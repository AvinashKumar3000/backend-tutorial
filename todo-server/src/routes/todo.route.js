const express = require('express');
const { getAllData, addData, updateData, deleteData } = require('../controllers/todo.controller');

const todoRouter = express.Router();

todoRouter.get('/all',getAllData);
todoRouter.post('/',addData);
todoRouter.put('/',updateData);
todoRouter.delete('/:id',deleteData);

module.exports = todoRouter;