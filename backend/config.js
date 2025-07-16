import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9fad843cc7d5d1", // replace with .env for production
        pass: "f732117fc8e42f"
    }
});

const destinationEmail = 'destination@domain.com';

export { transporter, destinationEmail };
