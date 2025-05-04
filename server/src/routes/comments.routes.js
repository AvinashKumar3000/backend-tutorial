const express = require('express');

const commentsRouter = express.Router();

function dummyHandler(req, res) {
    res.status(200).json({
        status: true,
        message: 'dummy response',
    });
}

commentsRouter.get('/by/post/:postId',dummyHandler);
commentsRouter.get('/by/reply',dummyHandler); // query
commentsRouter.put('/add/comment',dummyHandler);
commentsRouter.put('/add/reply',dummyHandler);

module.exports = commentsRouter;