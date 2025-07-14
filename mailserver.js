import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).send({ error: 'Please fill in all required fields.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "9fad843cc7d5d1", // TEST USERNAME
                pass: "f732117fc8e42f" // TEST PASSWORD
            }
        });

        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: 'destination@domain.com', // Replace
            subject: `Contact Form Submission from ${fullName}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
