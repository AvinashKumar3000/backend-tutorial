const nodemailer = require('nodemailer');
const otpService = require('./otp.service');


class EmailService {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });
        this.mailOption = {
            from: process.env.EMAIL,
            to: '',
            subject: 'OTP VALIDATION',
            html: ''
        };
    }

    async sendOtp(email, otp) {        
        this.mailOption.to = email;
        this.mailOption.html = `<h1>your otp is ${otp}</h1>`;
        await this.transport.sendMail(this.mailOption);
    }

    async sendPasswordResetToken(email, token) {
        this.mailOption.to = email;
        this.mailOption.subject = 'reset password token',
        this.mailOption.html = `<h1>your password reset token is : ${token}</h1>`;
        await this.transport.sendMail(this.mailOption);
    }
}

const emailService = new EmailService();
module.exports = emailService;