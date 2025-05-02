const Joi = require('joi');

const userValidator = {
    userUpdate: Joi.object({
        personal: Joi.object({
            name: Joi.object({
                firstName: Joi.string().allow('').default(''),
                lastName: Joi.string().allow('').default(''),
            }),
            age: Joi.number().optional(),
            address: Joi.object({
                city: Joi.string().allow('').default(''),
                state: Joi.string().allow('').default(''),
                country: Joi.string().allow('').default(''),
            }),
        }).required(),
        skills: Joi.object({
            technical: Joi.array().items(Joi.string()).optional(),
            soft: Joi.array().items(Joi.string()).optional(),
        }).required(),
    }),
    registerUser: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

module.exports = userValidator;
