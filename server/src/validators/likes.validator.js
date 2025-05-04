const Joi = require('joi');

const likesValidator = {
    query: Joi.object({
        postId: Joi.string().required(),
        userId: Joi.string().required()
    })
};

module.exports = likesValidator;