const tokenService = require('../services/token.service');

exports.verifyToken = async function (req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer [token]

        if (!token) {
            res.status(401).json({
                status: false,
                message: 'Token is missing',
            });
        }

        const decoded = tokenService.verifyToken(token);
        req.decoded = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
