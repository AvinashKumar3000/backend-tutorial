const mongoose = require('mongoose'); 

const todoSchema = new mongoose.Schema({
    title:String,
    desc:String,
    tags:[String],
},{
    timestamps: true
});

const TodoModel = mongoose.model('todo',todoSchema);
module.exports = TodoModel;