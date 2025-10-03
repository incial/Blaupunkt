import nodemailer from 'nodemailer';

// DNS parameters for website hosting only (separate from email domain)
export const DNS_A_RECORDS = [
    '75.2.60.5',        // Netlify primary
    '99.83.190.102',    // Netlify secondary
];
export const DNS_CNAME_RECORD = 'your-site-name.netlify.app'; // Your Netlify subdomain

// Email configuration - uses Blaupunkt-ev.com (which has MX records)
const transporter = nodemailer.createTransport({
    host: 'smtp.blaupunkt-ev.com',        // SMTP server for your domain
    port: 587,                            // Standard SMTP port
    secure: false,                        // false for 587, true for 465
    auth: {
        user: 'noreply@blaupunkt-ev.com', // Sender email from your domain
        pass: 'your-smtp-password'        // SMTP password for this email
    },
    tls: {
        rejectUnauthorized: false         
    }
});

const destinationEmail = 'info@blaupunkt-ev.com'; 

export { transporter, destinationEmail };
