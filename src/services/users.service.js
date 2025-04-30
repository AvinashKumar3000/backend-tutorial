const UsersModel = require("../models/users.model");

class UsersService {
    async registerUser(email, password) {
        const obj = {
            email,
            password
        };
        await UsersModel.create(obj);
    }
    async updateUser(obj) {
        const id = obj._id;
        const existingUser = await UsersModel.findById(id);
        if(!existingUser) {
            throw new Error('user id not found...');
        }
        existingUser.username = obj.username;
        existingUser.details = obj.details;
        await existingUser.save();
    }
    async getAllUsers() {
        const users = await UsersModel.find();
        return users;
    }
    async deleteUserById(id) {
        await UsersModel.deleteOne({_id: id});
    }
}

const usersService = new UsersService();
module.exports = usersService;