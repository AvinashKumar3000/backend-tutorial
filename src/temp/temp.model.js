const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({});

const TempModel = mongoose.model('temp', tempSchema);
module.exports = TempModel;
