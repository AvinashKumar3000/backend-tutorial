const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'user with email already exists'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    details: {
        personal: {
            name: {
                firstName: { type: String, default: '' },
                lastName: { type: String, default: '' },
            },
            age: Number,
            address: {
                city: { type: String, default: '' },
                state: { type: String, default: '' },
                country: { type: String, default: '' },
            },
        },
        skills: {
            technical: [String],
            soft: [String],
        },
    },
});

const UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;
