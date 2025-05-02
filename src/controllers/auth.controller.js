const emailService = require('../services/email.service');
const otpService = require('../services/otp.service');
const usersService = require('../services/users.service');
const nodemailer = require('nodemailer');

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
        const { otp, _id } = await otpService.genOtp(payload.email);
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
