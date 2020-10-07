const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1) Create transporter
    // Activate "less secure app" options in gmail
    /*
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    */
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    // Development - MailTrap
    // Production - SendGrid and MailGun

    // 2) Define email options
    const mailOptions = {
        from: 'Dev Baweja <devbaweja576@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:
    };

    // 3) Actually send email
    await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
