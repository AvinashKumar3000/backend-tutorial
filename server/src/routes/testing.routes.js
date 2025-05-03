const express = require('express');
const validateMiddleware = require('../middlewares/validate.middleware');
const Joi = require('joi');

const registerValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
const testRouter = express.Router();

const cm1 = (req, res, next) => {
    const data = '🥩🥩🥩';
    console.log('🤍 : CM1 ', data);
    next(data);
};

const cm2 = (x, req, res, next) => {
    console.log('🤍 : CM2 ', x);
    next();
};

testRouter.use(cm1, cm2);

testRouter.get('/r1', (req, res) => {
    console.log('⭐ : R1');
    res.send('from GET /r1');
});

testRouter.get('/r2', (req, res) => {
    console.log('⭐ : R2');
    res.send('from GET /r2');
});
testRouter.get('/r3', (req, res) => {
    console.log('⭐ : R3');
    // res.send('from GET /r3');
    throw new Error('hai');
});

testRouter.post('/validate', validateMiddleware(),(req, res) => {
    console.log(req.body);
    res.send('validation successful');
});

testRouter.use((err, req, res) => {
    res.status(400).send('error handler executed');
});

module.exports = testRouter;
