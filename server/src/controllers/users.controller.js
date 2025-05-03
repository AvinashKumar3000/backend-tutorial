const usersService = require('../services/users.service');
const userValidator = require('../validators/user.validator');

exports.registerUser = async function (req, res) {
    try {
        const payload = req.body;
        const { error, value } = userValidator.registerUser.validate(payload);
        if (error !== undefined) throw new Error(error.details[0].message);

        await usersService.registerUser(value.email, value.password);
        res.status(201).json({
            status: true,
            message: 'user registration successful.',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.getAllUsers = async function (req, res) {
    const data = await usersService.getAllUsers();
    try {
        res.json({
            status: true,
            message: 'got all users details',
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.updateUser = async function (req, res) {
    try {
        const payload = req.body;
        await usersService.updateUser(payload);
        res.status(204).json({
            status: true,
            message: 'updated successfully',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.deleteUserById = async function (req, res) {
    try {
        const userId = req.params.id;
        await usersService.deleteUserById(userId);
        res.json({
            status: true,
            message: 'user deleted successfully.',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
