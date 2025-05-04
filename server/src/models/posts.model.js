const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    music: {
        type: String,
        default: '',
    },
    externalLinks: [String],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: [String],
        default: [],
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
});

const PostsModel = mongoose.model('posts', postsSchema);
module.exports = PostsModel;
