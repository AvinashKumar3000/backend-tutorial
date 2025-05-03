const express = require('express');
const { addNewContent, getPublicContents, getPrivateContents } = require('../controllers/content.controller');
const tokenService = require('../services/token.service');

const contentRouter = express.Router();

const restrictAccess = function (req,res,next) {
    try {
        const header = req.headers;
        let token;
        if (header.authorization) {
            token = header.authorization.split(' ')[1];
        } 
        const decoded = tokenService.verifyToken(token);
        next();
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
}

contentRouter.post('/',addNewContent);
contentRouter.get('/public',getPublicContents);
contentRouter.get('/private',restrictAccess,getPrivateContents);

module.exports = contentRouter;
