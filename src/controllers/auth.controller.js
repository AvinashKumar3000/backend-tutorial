const { REASON } = require('../constants/enum.constants');
const emailService = require('../services/email.service');
const otpService = require('../services/otp.service');
const tokenService = require('../services/token.service');
const usersService = require('../services/users.service');

exports.registerUser = async function (req, res) {
    try {
        const payload = req.body;
        await usersService.registerUser(payload.email, payload.password);
        res.status(200).json({
            status: true,
            message: 'registration successful',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.loginUser = async function (req, res) {
    try {
        const payload = req.body;
        await usersService.login(payload.email, payload.password);
        res.status(200).json({
            status: true,
            message: 'login successful',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.requestOtp = async function (req, res) {
    try {
        const payload = req.body;
        const { status } = await usersService.isUserEmailExists(payload.email);
        if (!status) throw new Error('email not exists');
        const { otp, _id } = await otpService.genOtp(payload.email, REASON.VERIFY);
        await emailService.sendOtp(payload.email, otp);
        res.status(200).json({
            status: true,
            message: 'otp sent to your email',
            data: {
                id: _id,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.verifyOtp = async function (req, res) {
    try {
        const payload = req.body;
        await otpService.compare(payload.id, payload.otp);
        res.status(200).json({
            status: true,
            message: 'otp verification successful',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.requestResetPassword = async function (req, res) {
    try {
        const payload = req.body;
        const { status, data } = await usersService.isUserEmailExists(payload.email);
        if (!status) throw new Error('email not exists');
        // console.log('data::',data);
        const tokenPayload = {
            userId: data?._id,
            email: payload.email,
        };
        const resetToken = tokenService.genToken(tokenPayload);
        await emailService.sendPasswordResetToken(payload.email, resetToken);
        res.status(200).json({
            status: true,
            message: 'request token sent to your email',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.resetPassword = async function (req, res) {
    try {
        const payload = req.body;
        const { newPassword, token } = payload;
        const decoded = tokenService.verifyToken(token);
        console.log(decoded);
        if (!decoded.userId) {
            throw new Error('invalid token payload. _id not found in payload');
        }
        await usersService.updatePassword(decoded.userId, newPassword);
        res.status(200).json({
            status: true,
            message: 'new password updated',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
