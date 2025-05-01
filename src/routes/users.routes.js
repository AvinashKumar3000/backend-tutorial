const express = require('express');
const {
    registerUser,
    getAllUsers,
    updateUser,
    deleteUserById,
} = require('../controllers/users.controller');

const usersRouter = express.Router();

usersRouter.post('/', registerUser);
usersRouter.get('/all', getAllUsers);
usersRouter.put('/', updateUser);
usersRouter.delete('/:id', deleteUserById);

module.exports = usersRouter;
