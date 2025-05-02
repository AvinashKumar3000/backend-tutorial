const nodemailer = require('nodemailer');


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

    async sendOtp(email) {
        this.mailOption.to = email;
        this.mailOption.html = `<h1>your otp is ${otp}</h1>`;
        await this.transport.sendMail(this.mailOption);
    }
}

const emailService = new EmailService();
module.exports = emailService;