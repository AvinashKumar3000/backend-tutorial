const express = require('express');

const testRouter = express.Router();

const cm1 = (req, res, next) => {
    const data = '🥩🥩🥩';
    console.log('🤍 : CM1 ',data);
    next(data);
};

const cm2 = (data, req, res, next) => {
    console.log('🤍 : CM2 ',data);
    next();
};


testRouter.use(cm1);
testRouter.use(cm2);

testRouter.get('/r1', (req, res) => {
    console.log('⭐ : R1');
    res.send('from GET /r1');
});
testRouter.get('/r3', (req, res) => {
    console.log('⭐ : R3');
    res.send('from GET /r3');
});
testRouter.get('/r2',(req, res) => {
    console.log('⭐ : R2');
    res.send('from GET /r2');
});

module.exports = testRouter;
