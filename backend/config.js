import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';

// DNS parameters for website hosting (Hostinger configuration)
export const DNS_CONFIG = {
    // These will be provided by Hostinger when you connect your domain
    // Check hPanel -> Domains -> DNS Zone Editor for actual values
    A_RECORDS: [
        // Hostinger will provide these IPs
        // Example: '123.456.789.0'
    ],
    CNAME_RECORD: 'blaupunkt-ev.com'
};

// Email configuration - production vs development
const emailConfig = {
    host: isDevelopment ? 'smtp.hostinger.com' : (process.env.SMTP_HOST || 'smtp.blaupunkt-ev.com'),
    port: isDevelopment ? parseInt(process.env.SMTP_PORT || '465') : parseInt(process.env.SMTP_PORT || '587'),
    secure: isDevelopment ? (process.env.SMTP_PORT === '465') : (process.env.SMTP_PORT === '465'),
    auth: {
        user: process.env.SMTP_USER || 'noreply@blaupunkt-ev.com',
        pass: process.env.SMTP_PASS || 'your-smtp-password'
    },
    tls: {
        rejectUnauthorized: false
    },
    // Add connection timeout settings
    connectionTimeout: 30000,  // 30 seconds
    greetingTimeout: 30000,
    socketTimeout: 30000,
    // Add retry settings
    pool: true,
    maxConnections: 5,
    maxMessages: 10
};

// Create transporter with environment-specific configuration
const transporter = nodemailer.createTransport(emailConfig);

const destinationEmail = process.env.DESTINATION_EMAIL || 'info@blaupunkt-ev.com';

// App configuration
export const appConfig = {
    environment: process.env.NODE_ENV || 'development',
    isDevelopment,
    frontend: {
        url: isDevelopment 
            ? 'http://localhost:3000' 
            : (process.env.VITE_DOMAIN || 'blaupunkt-ev.com')
    },
    api: {
        port: process.env.PORT || 5000,
        cors: {
            origin: isDevelopment 
                ? 'http://localhost:3000' 
                : (process.env.VITE_DOMAIN || 'https://blaupunkt-ev.com')
        }
    }
};

export { transporter, destinationEmail };
