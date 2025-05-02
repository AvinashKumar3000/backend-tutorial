const mongoose = require('mongoose');

const replyCommentsSchema = new mongoose.Schema(
    {
        parentComment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comments',
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const ReplyCommentsModel = mongoose.model('replyComments', replyCommentsSchema);
module.exports = ReplyCommentsModel;
