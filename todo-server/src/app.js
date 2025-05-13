const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todo.route");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/sample-project")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("some thing went wrong in mongodb connection");
  });

app.use(express.json());
app.use(morgan('dev'));

app.use("/todo", todoRouter);

module.exports = app;
