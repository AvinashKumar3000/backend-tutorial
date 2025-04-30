const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
        username: String,
        email: { 
            type: String, 
            required: true, 
            unique: [true, "user with email already exists"],
            trim: true,
            lowercase: true, 
            index: true
        } ,
        password: {
            type: String,
            required: true 
        } ,
        details: {
            personal: {
                name: { 
                    firstName: String,
                    lastName: String
                },
                dob: Date,
                address: {
                    city: String,
                    state: String,
                    country: String
                }
            },
            skills: {
                technical: [String],
                soft:[String],
            }
        }
    });

const UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;