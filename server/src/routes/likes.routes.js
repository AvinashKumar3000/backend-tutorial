const express = require('express');
const { getLikeDetailsByPostId } = require('../controllers/likes.controller');

const likesRouter = express.Router();

likesRouter.get('by/post',getLikeDetailsByPostId);
likesRouter.put('/');

module.exports = likesRouter;