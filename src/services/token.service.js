const jwt = require('jsonwebtoken');

class TokenService {
    secret = process.env.JWT_SECRET;
    expiresIn = process.env.JWT_EXPIRES_IN;

    genToken(payload = {}, expiry) {
        const token = jwt.sign(payload, this.secret, {
            expiresIn: expiry || this.expiresIn,
        });
        return token;
    }

    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, this.secret);
            return decoded;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

const tokenService = new TokenService();
module.exports = tokenService;
