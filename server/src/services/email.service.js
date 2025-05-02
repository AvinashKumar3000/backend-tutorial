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
            html: '',
        };
    }

    async sendOtp(email, otp) {
        this.mailOption.to = email;
        this.mailOption.html = `
            <h1>your otp is  <span style="color:red;">${otp}</span>  </h1>
            `;
        await this.transport.sendMail(this.mailOption);
    }

    async sendPasswordResetToken(email, token) {
        this.mailOption.to = email;
        this.mailOption.subject = 'reset password token';
        this.mailOption.html = `
            <h1>your password reset token is</h1>
            <p style="color: gray; margin: 10px; padding:10px;">
            ${token}
            </p>
        `;
        await this.transport.sendMail(this.mailOption);
    }
}

const emailService = new EmailService();
module.exports = emailService;
