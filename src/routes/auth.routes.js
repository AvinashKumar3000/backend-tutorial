const express = require('express');
const { registerUser, loginUser, requestOtp } = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/request-otp',requestOtp);

module.exports = authRouter;