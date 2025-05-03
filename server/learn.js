const Joi = require('joi');

const registerValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(5).required(),
});

const payload = {
    email: 'sample@gmail.com',
    password: 'pass@123',
};
const {error, value} = registerValidator.validate(payload);

console.log("error: ", error?.details[0].message);
console.log("value :", value);