const likeService = require('../services/likes.service');
const likesValidator = require('../validators/likes.validator');

exports.getLikeDetailsByPostId = async function (req, res) {
    try {
        const { error } = likesValidator.query.validate(req.query);
        if (error) {
            throw new Error(error.details[0].message);
        }
        const { postId, userId } = req.query;
        const likeDetails = await likeService.getByPostId(postId);
        const data = {
            isLiked: await likeService.isUserLiked(userId, postId),
            likeCount: likeDetails.length,
        };
        res.status(200).json({
            status: true,
            message: 'retrieved like details',
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.updateLike = async function (req, res) {
    try {
        const { error } = likesValidator.query.validate(req.query);
        if (error) {
            throw new Error(error.details[0].message);
        }
        const { postId, userId } = req.query;
        const result = await likeService.updateLike(userId, postId);
        const likeDetails = await likeService.getByPostId(postId);
        const data = {
            isLiked: result.liked,
            likeCount: likeDetails.length,
        };
        res.status(204).json({
            status: true,
            message: 'retrieved like details',
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
