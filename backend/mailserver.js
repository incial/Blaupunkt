import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter, destinationEmail } from './config.js';
import { generateEmailTemplate } from './template.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for Hostinger frontend
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests from your Hostinger domain and localhost for development
        const allowedOrigins = [
            process.env.VITE_DOMAIN,
            'https://blaupunkt-ev.com',
            'http://localhost:3000',
            'http://localhost:3001',
            'http://localhost:3002',
            'http://localhost:5173'
        ];
        
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint for keeping Render alive
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        message: 'Backend is alive!' 
    });
});

// Debug endpoint to check environment variables (REMOVE IN PRODUCTION)
app.get('/api/debug-env', (req, res) => {
    const envStatus = {
        SMTP_HOST: process.env.SMTP_HOST ? '✅ Set' : '❌ Missing',
        SMTP_PORT: process.env.SMTP_PORT ? '✅ Set' : '❌ Missing',
        SMTP_USER: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
        SMTP_PASS: process.env.SMTP_PASS ? '✅ Set (hidden)' : '❌ Missing',
        DESTINATION_EMAIL: process.env.DESTINATION_EMAIL ? '✅ Set' : '❌ Missing',
        NODE_ENV: process.env.NODE_ENV || 'development',
        VITE_DOMAIN: process.env.VITE_DOMAIN ? '✅ Set' : '❌ Missing',
        totalEnvVars: Object.keys(process.env).length
    };
    
    res.status(200).json({
        message: 'Environment Variables Status',
        status: envStatus,
        note: 'If any are missing, add them in Render Dashboard → Environment tab'
    });
});

app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            error: 'Please fill in all required fields.' 
        });
    }

    try {
        const mailOptions = {
            from: `"Blaupunkt EV Contact Form" <${process.env.SMTP_USER || 'info@blaupunkt-ev.com'}>`,
            replyTo: `"${fullName}" <${email}>`,
            to: destinationEmail,
            subject: `Contact Form Submission from ${fullName}`,
            html: generateEmailTemplate({ fullName, email, phone, message })
        };
        
        console.log('Attempting to send email...');
        console.log('SMTP Config:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            secure: process.env.SMTP_PORT === '465'
        });
        
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully');
        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error('❌ Email send error:', err);
        console.error('Error code:', err.code);
        console.error('Error command:', err.command);
        
        // More detailed error message
        let errorMessage = 'Failed to send message. Please try again later.';
        let errorDetails = err.message;
        
        if (err.code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Please check SMTP credentials.';
            errorDetails = 'Invalid username or password';
        } else if (err.code === 'ESOCKET') {
            errorMessage = 'Cannot connect to email server.';
            errorDetails = 'SMTP connection failed';
        } else if (err.code === 'ETIMEDOUT') {
            errorMessage = 'Email server connection timeout.';
            errorDetails = 'Connection timed out';
        }
        
        res.status(500).json({ 
            success: false, 
            message: errorMessage,
            error: errorDetails,
            code: err.code
        });
    }
});

// Verify transporter before starting server (non-blocking)
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        console.log(`📧 Email destination: ${destinationEmail}`);
        console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
};

// Skip SMTP verification in development mode or verify in production
if (process.env.NODE_ENV === 'development') {
    console.log('⚡ Development mode: Skipping SMTP verification');
    console.log('📧 SMTP will be tested when sending actual emails');
    startServer();
} else {
    // Try to verify SMTP, but start server anyway
    transporter.verify()
        .then(() => {
            console.log('✅ SMTP transporter verified successfully.');
            startServer();
        })
        .catch(err => {
            console.warn('⚠️ SMTP transporter verification failed. Server will start anyway.');
            console.warn('Error:', err.message);
            console.warn('Please check your SMTP environment variables.');
            startServer();
        });
}
