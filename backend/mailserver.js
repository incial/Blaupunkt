import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter, destinationEmail } from './config.js';
import { generateEmailTemplate } from './template.js';

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
        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: destinationEmail,
            subject: `Contact Form Submission from ${fullName}`,
            html: generateEmailTemplate({ fullName, email, phone, message })
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
