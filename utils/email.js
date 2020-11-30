const nodemailer = require('nodemailer');

const sendEmail = (myEmail, password, toEmail, subject, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: password
        }
    });

    const mailOptions = {
        from: myEmail,
        to: toEmail,
        subject,
        text: message
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log(err);
        }

        return console.log("Email sent");
    });
};

module.exports = sendEmail;