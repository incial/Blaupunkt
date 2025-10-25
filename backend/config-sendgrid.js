// Alternative Email Configuration with SendGrid Support
// Use this if Render blocks SMTP ports

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';
const useSendGrid = process.env.USE_SENDGRID === 'true';

// SendGrid configuration (if using SendGrid API)
let transporter;
let destinationEmail = process.env.DESTINATION_EMAIL || 'info@blaupunkt-ev.com';

if (useSendGrid && process.env.SENDGRID_API_KEY) {
    // Using SendGrid API (no SMTP, works on Render free tier)
    console.log('📧 Using SendGrid API for email');
    
    // We'll use SendGrid's Web API instead of SMTP
    transporter = {
        sendMail: async (mailOptions) => {
            const sgMail = (await import('@sendgrid/mail')).default;
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            
            const msg = {
                to: mailOptions.to,
                from: process.env.SENDGRID_FROM || 'noreply@blaupunkt-ev.com',
                replyTo: mailOptions.replyTo,
                subject: mailOptions.subject,
                html: mailOptions.html,
            };
            
            return await sgMail.send(msg);
        }
    };
} else {
    // Using traditional SMTP (may not work on Render free tier)
    console.log('📧 Using SMTP for email');
    
    const emailConfig = {
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: (process.env.SMTP_PORT || '465') === '465',
        auth: {
            user: process.env.SMTP_USER || 'info@blaupunkt-ev.com',
            pass: process.env.SMTP_PASS || 'your-smtp-password'
        },
        tls: {
            rejectUnauthorized: false
        },
        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 30000,
        pool: true,
        maxConnections: 5,
        maxMessages: 10,
        debug: isDevelopment,
        logger: isDevelopment
    };
    
    transporter = nodemailer.createTransporter(emailConfig);
}

// Verify connection (skip in production if using SendGrid)
if (!useSendGrid && isDevelopment) {
    transporter.verify((error, success) => {
        if (error) {
            console.log('❌ SMTP verification failed:', error);
        } else {
            console.log('✅ SMTP server is ready');
        }
    });
}

export { transporter, destinationEmail };

export const appConfig = {
    environment: process.env.NODE_ENV || 'development',
    isDevelopment,
    emailService: useSendGrid ? 'sendgrid' : 'smtp',
    emailDestination: destinationEmail
};
