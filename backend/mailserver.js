import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter, destinationEmail } from './config.js';
import { generateEmailTemplate } from './template.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint for keeping Render alive
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        message: 'Backend is alive!' 
    });
});

app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).send({ error: 'Please fill in all required fields.' });
    }

    try {
        const mailOptions = {
            from: `"Blaupunkt EV Contact Form" <${process.env.SMTP_USER || 'info@blaupunkt-ev.com'}>`,
            replyTo: `"${fullName}" <${email}>`,
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

// Verify transporter before starting server
transporter.verify().then(() => {
    console.log('SMTP transporter verified successfully.');
    app.listen(PORT, () => {
        console.log(`\uD83D\uDE80 Server running at http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to verify SMTP transporter. Server will not start.');
    console.error(err);
    process.exit(1);
});
