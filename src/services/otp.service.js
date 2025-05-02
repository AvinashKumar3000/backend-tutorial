const OtpModel = require('../models/otp.model');

class OtpService {
    async genOtp(email) {
        const otp = (Math.random() * 1000000).toString().slice(0, 4);
        await OtpModel.create({
            email: email,
            otp: otp,
        });
        return otp;
    }
    async compare(id, otp) {
        const otpObj = await OtpModel.findById(id);
        if (otpObj.expiresIn > new Date()) throw new Error('otp expired');
        if (!otpObj) throw new Error('otp not yet generated for email');
        if (otpObj.otp !== otp) throw new Error('Invalid otp');
        otpObj.isVerified = true;
        await otpObj.save();
    }
}

const otpService = new OtpService();
module.exports = otpService;
