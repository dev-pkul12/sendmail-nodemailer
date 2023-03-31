const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    try {

        let testAccount = await nodemailer.createTestAccount();
        // Connet with the SMTP
        let transporter = await nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: 'carley@ethereal.email', // generated ethereal user
                pass: '********', // generated ethereal password
            },
        });

        let info = await transporter.sendMail({
            from: 'sender@mail.com', // sender address
            to: "receivers@email.com", // list of receiver
            subject: "Subject of the email", // Subject line
            text: "Enter here Plain text that you want to send  to receiver", // plain text body
        });
        res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = sendEmail