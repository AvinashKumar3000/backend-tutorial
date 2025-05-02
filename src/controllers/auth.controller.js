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
            message: 'login successful'
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
