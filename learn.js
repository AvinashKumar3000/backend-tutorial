const jwt = require('jsonwebtoken');
const secret = 'Happy';

function genToken(payload) {
    const token = jwt.sign(payload, secret, {
        expiresIn: '1d'
    });
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token,secret);
}

function main() {
    const token = genToken({
        email: 'dummy@gmail.com',
        userName: 'dummy',
        id: 123123123,
    });
    console.log('your token is: ', token);
}


main();