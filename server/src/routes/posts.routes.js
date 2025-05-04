const express = require('express');
const { getAllRecentPosts, addPost, getRecentPosts, searchPost } = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.get('/search',searchPost);
postsRouter.post('/',addPost);
postsRouter.post('/recent',getRecentPosts);

module.exports = postsRouter;