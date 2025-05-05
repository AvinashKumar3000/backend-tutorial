const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    count: Number
},{
   timestamps: true 
});

const MyCustomModel = mongoose.model('like',likeSchema);
module.exports = MyCustomModel;
