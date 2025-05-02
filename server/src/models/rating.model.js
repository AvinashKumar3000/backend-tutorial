const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required: true,
    },
    ratedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: [0, 'rating is range from 0 to 5'],
        max: [5, 'rating is range from 0 to 5'],
    },
});

const RatingModel = mongoose.model('rating', ratingSchema);
module.exports = RatingModel;
