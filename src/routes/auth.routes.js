const express = require('express');
const {
    registerUser,
    loginUser,
    requestOtp,
    verifyOtp,
    requestResetPassword,
    resetPassword,
} = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/request-otp', requestOtp);
authRouter.post('/verify-otp', verifyOtp);
authRouter.post('/request-reset-password', requestResetPassword);
authRouter.put('/reset-password', resetPassword);

module.exports = authRouter;
