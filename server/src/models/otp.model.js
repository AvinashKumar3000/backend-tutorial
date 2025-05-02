const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true, index: true },
    otp: { type: String, required: true },
    reason: {
        type: String,
        enum: ['verify', 'login', 'pass_reset'],
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    expiresIn: {
        type: Date,
        default: () => new Date(Date.now() + 1 * 60 * 1000), // 1 minute from now
    },
});

const OtpModel = mongoose.model('otp', otpSchema);
module.exports = OtpModel;
