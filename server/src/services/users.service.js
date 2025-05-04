const UsersModel = require('../models/users.model');
const bcrypt = require('bcryptjs');

class UsersService {
    async registerUser(email, password) {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        const obj = {
            email,
            password: hashedPassword,
        };
        await UsersModel.create(obj);
    }

    async getUserByEmail(email) {
        const user = await UsersModel.findOne({ email });
        if (!user) {
            throw new Error('email not found');
        }
        return user;
    }
    async isUserEmailExists(email) {
        const user = await UsersModel.findOne({ email });
        const result = {
            status: Boolean(user),
            data: user,
        };
        return result;
    }
    async login(email, password) {
        const result = await this.isUserEmailExists(email);
        if (!result.status) {
            throw new Error('user with email not found');
        }
        const status = await bcrypt.compare(password, result.data.password);
        if (!status) {
            throw new Error('incorrect password');
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
    async updatePassword(userId, newPassword) {
        const user = await UsersModel.findById(userId);
        if (!user) {
            throw new Error('Invalid user id or invalid token');
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
    }
    async searchByUser(text) {
        const users = await UsersModel.find({ username : { $regex: text, $options: 'i' }});
        return users;
    }
}

const usersService = new UsersService();
module.exports = usersService;
