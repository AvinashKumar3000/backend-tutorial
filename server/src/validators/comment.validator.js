const Joi = require('joi');

const commentValidator = {
    query : Joi.object({
        postId: Joi.string().required(),
        commentId: Joi.string().required()
    })
};  

module.exports = commentValidator;