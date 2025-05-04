const PostsModel = require('../models/posts.model');

class PostService {
    async addNewPost(obj) {
        const post = await PostsModel.create(obj);
        await post.save();
    }
    async filterPostByText(text) {
        // Search for posts where the text is contained in the title or description fields
        const posts = await PostsModel.find({
            $and: [
                {
                    isPrivate: false
                },
                {
                    $or: [{ title: { $regex: text, $options: 'i' } }, { desc: { $regex: text, $options: 'i' } }],
                }
            ]
        });
        return posts;
    }
    async recentPosts(from, to) {
        const skip = parseInt(from) || 0;
        const limit = parseInt(to) - skip || 10;

        const posts = await PostsModel.find({
            isPublished: true,
            isPrivate: false,
        })
            .sort({ createdAt: -1 }) // sort by most recent
            .skip(skip)
            .limit(limit);

        return posts;
    }
}

const postService = new PostService();
module.exports = postService;
