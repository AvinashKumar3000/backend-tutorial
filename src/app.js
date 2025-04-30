const express = require('express');
const morgan = require('morgan');
const connectDb = require('./configs/db.config');
const usersRouter = require('./routes/users.routes');

const app = express();

// middle wares
app.use(morgan('dev'));
app.use(express.json());

connectDb();
// routes
app.use('/users',usersRouter);

module.exports = app;