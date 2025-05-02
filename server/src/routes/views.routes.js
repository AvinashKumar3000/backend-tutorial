const express = require('express');
const usersService = require('../services/users.service');

const viewsRouter = express.Router();

viewsRouter.get('/', async (req, res) => {
    const users = usersService.getAllUsers();
    res.render('index', { name: 'sinchan', age: 5 });
});

module.exports = viewsRouter;
