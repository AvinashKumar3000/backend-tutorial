const LikesModel = require('../models/likes.model');

class LikeService {
    async getByPostId(postId) {
        const likes = await LikesModel.find({ postId });
        if (!like) {
            throw new Error('no like found with postId');
        }
        return likes;
    }
    async updateLike(userId, postId) {
        // like it if user didn't like.
        // unlike it if user liked.
        const like = await LikesModel.find({ postId, likedBy: userId });
        if (!like) {
            // user not yet liked
            const newLike = await LikesModel.create({
                postId,
                likedBy: userId,
            });
            await newLike.save();
            return {
                liked: true,
            };
        } else {
            // user already liked
            await LikesModel.findOneAndDelete(like._id);
            return {
                liked: false,
            };
        }
    }
    async isUserLiked(userId, postId) {
        const like = await LikesModel.find({ postId, likedBy: userId });
        return Boolean(like);
    }
}

const likeService = new LikeService();
module.exports = likeService;
