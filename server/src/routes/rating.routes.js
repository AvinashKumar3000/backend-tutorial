const express = require('express');

const ratingRouter = express.Router();

function dummyHandler(req,res) {
    res.status(200).json({
        status: false,
        message: 'response from dummy'
    });
}

ratingRouter.get('/by/post/:postId', dummyHandler);
/**
 * get average rating of a post
 * get is user already rated this post
 * add a new rating of new user.
 */

module.exports = ratingRouter;