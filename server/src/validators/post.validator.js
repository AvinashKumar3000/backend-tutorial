const Joi = require('joi');

const postValidators = {
    newPost:Joi.object({
        title: Joi.string().required(),
        desc:Joi.string().required(), 
        content:Joi.string().required(),
        image: Joi.string().optional(),
        music: Joi.string().optional(),
        externalLinks: Joi.array(Joi.string()).optional(),
        author:Joi.string().required(), 
        isPrivate: Joi.boolean().optional(),
        tags: Joi.array(Joi.string()).optional(),
        isPublished: Joi.boolean().optional()
    }),
    pagination: Joi.object({
        from: Joi.string().require(),
        to: Joi.string().required()
    }),
    search: Joi.object({
        text: Joi.string().required()
    })
}

module.exports = postValidators;