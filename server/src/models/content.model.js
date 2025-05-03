const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        isPrivate: { type: Boolean, default: false },
    },
    {
        timestamps: true
    }
);

const ContentModel = mongoose.model('content', contentSchema);
module.exports = ContentModel;
