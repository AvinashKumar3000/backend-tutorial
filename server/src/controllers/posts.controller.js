const postService = require('../services/posts.service');
const postValidators = require('../validators/post.validator');

exports.searchPost = async function (req, res) {
    try {
        const { error } = postValidators.search.validate(req.query);
        if(error) {
            throw new Error(error.details[0].message);
        }
        const { text } = req.query;
        const posts = await postService.filterPostByText(text);

        res.status(200).json({
            success: true,
            message: 'Recent public published posts fetched successfully',
            data: posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.addPost = async function (req, res) {
    try {
        const payload = req.body;
        const { error } = postValidators.newPost.validate(payload);
        if (error) {
            throw new Error(error.details[0].message);
        }
        await postService.addNewPost(payload);
        res.status(201).json({
            status: true,
            message: 'new post created successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

exports.getRecentPosts = async function (req,res) {
    try {
        const { error, value } = postValidators.pagination.validate(req.query);
        if(error) {
            throw new Error(error.details[0].message);
        }
        const posts = await postService.recentPosts(value.from, value.to);
        res.status(200).json({
            status: true,
            message: 'retrieved data successfully',
            data: posts
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
        });
    }
}