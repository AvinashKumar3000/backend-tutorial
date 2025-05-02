const OtpModel = require('../models/otp.model');

class OtpService {
    async genOtp(email) {
        const otp = (Math.random() * 1000000).toString().slice(0, 4);
        const otpObj = await OtpModel.create({
            email: email,
            otp: otp,
        });
        return {
            otp: otp,
            _id: otpObj._id,
        };
    }
    async compare(id, otp) {
        const otpObj = await OtpModel.findById(id);
        if (otpObj.isVerified) {
            throw new Error('otp already verified');
        }
        if (new Date() > otpObj.expiresIn) {
            throw new Error('otp expired');
        }
        if (!otpObj) {
            throw new Error('otp not yet generated for email');
        }
        if (otpObj.otp !== otp) {
            throw new Error('Invalid otp');
        }
        otpObj.isVerified = true;
        await otpObj.save();
    }
}

const otpService = new OtpService();
module.exports = otpService;
