const UsersModel = require('../models/users.model');
const bcrypt = require('bcryptjs');

class UsersService {
    async registerUser(email, password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password,salt);
        const obj = {
            email,
            password: hashedPassword,
        };
        await UsersModel.create(obj);
    }
    async isUserEmailExists(email) {
        const user = await UsersModel.findOne({ email });
        return Boolean(user);
    }
    async login(email, password) {
        const emailExists = await this.isUserEmailExists(email);
        if(!emailExists) {
            throw new Error("user with email not found");
        }
        const status = await bcrypt.compare(password, user.password);
        if(!status) {
            throw new Error("incorrect password");
        }
    }

    async updateUser(obj) {
        const id = obj._id;
        const existingUser = await UsersModel.findById(id);
        if (!existingUser) {
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
        await UsersModel.deleteOne({ _id: id });
    }
}

const usersService = new UsersService();
module.exports = usersService;
