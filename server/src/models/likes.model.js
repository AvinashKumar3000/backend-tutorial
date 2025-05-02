const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required: true,
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
});

const LikesModel = mongoose.model('likes', likesSchema);
module.exports = LikesModel;
