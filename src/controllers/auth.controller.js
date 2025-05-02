const emailService = require('../services/email.service');
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
        const emailExists = await usersService.isUserEmailExists(payload.email);
        if (!emailExists) throw new Error('email not exists');
        await emailService.sendOtp(payload.email);
        res.status(200).json({
            status: true,
            message: 'otp sent to your email',
        });
    } catch (error) {
        res.status(400).status({
            status: false,
            message: error.message,
        });
    }
};
