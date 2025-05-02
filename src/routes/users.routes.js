const express = require('express');
const { getAllUsers, updateUser, deleteUserById } = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.get('/all', getAllUsers);
usersRouter.put('/', updateUser);
usersRouter.delete('/:id', deleteUserById);

module.exports = usersRouter;
