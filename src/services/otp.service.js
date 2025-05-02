const OtpModel = require("../models/otp.model");

class OtpService {
    async genOtp(email,reason) {
        const otp = (Math.random() * 1000000).toString().slice(0,4);
        await OtpModel.create({
            email: '',
            otp: otp,
            reason: reason
        });
        return otp;
    }
}

const otpService = new OtpService();
module.exports = otpService;