const dotenv = require('dotenv');
dotenv.config();

const data = {
    email: process.env.EMAIL,
    mongodbUrl: process.env.MONGODB_URL
};
console.log(data);