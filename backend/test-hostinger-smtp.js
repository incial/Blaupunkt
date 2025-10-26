/**
 * Quick SMTP Test Script for Hostinger Email
 * This script tests your Hostinger email configuration before deploying to Render
 * 
 * Usage:
 * 1. Create a .env file in the backend folder with your credentials
 * 2. Run: node test-hostinger-smtp.js
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🧪 Testing Hostinger SMTP Configuration...\n');

// Display configuration (without password)
console.log('📋 Current Configuration:');
console.log('-------------------------');
console.log(`SMTP Host: ${process.env.SMTP_HOST || 'NOT SET'}`);
console.log(`SMTP Port: ${process.env.SMTP_PORT || 'NOT SET'}`);
console.log(`SMTP User: ${process.env.SMTP_USER || 'NOT SET'}`);
console.log(`SMTP Pass: ${process.env.SMTP_PASS ? '****' + process.env.SMTP_PASS.slice(-4) : 'NOT SET'}`);
console.log(`Destination: ${process.env.DESTINATION_EMAIL || 'NOT SET'}`);
console.log('-------------------------\n');

// Check if all required variables are set
if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ ERROR: Missing required environment variables!');
    console.error('Please create a .env file in the backend folder with:');
    console.error('  SMTP_HOST=smtp.hostinger.com');
    console.error('  SMTP_PORT=465');
    console.error('  SMTP_USER=info@blaupunkt-ev.com');
    console.error('  SMTP_PASS=your-email-password');
    console.error('  DESTINATION_EMAIL=info@blaupunkt-ev.com');
    process.exit(1);
}

// Create transporter with your Hostinger settings
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000
});

// Test 1: Verify SMTP connection
console.log('🔍 Test 1: Verifying SMTP connection...');
try {
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');
} catch (error) {
    console.error('❌ SMTP connection failed!');
    console.error('Error:', error.message);
    console.error('\n💡 Troubleshooting tips:');
    console.error('  1. Check if email password is correct');
    console.error('  2. Try SMTP_HOST=mail.blaupunkt-ev.com instead of smtp.hostinger.com');
    console.error('  3. Try SMTP_PORT=587 instead of 465');
    console.error('  4. Check if 2FA is enabled on your email account');
    console.error('  5. Verify email account exists in Hostinger hPanel\n');
    process.exit(1);
}

// Test 2: Send test email
console.log('📧 Test 2: Sending test email...');
const mailOptions = {
    from: `"Blaupunkt EV Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.DESTINATION_EMAIL || process.env.SMTP_USER,
    subject: 'Test Email from Blaupunkt Contact Form',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">🧪 Test Email</h2>
            <p>This is a test email from your Blaupunkt EV contact form backend.</p>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Configuration Details:</h3>
                <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
                <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
                <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
                <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #28a745; font-weight: bold;">✅ If you received this email, your SMTP configuration is working correctly!</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
                This is an automated test email from the Blaupunkt EV contact form system.
            </p>
        </div>
    `
};

try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log(`📬 Message ID: ${info.messageId}`);
    console.log(`📨 Check your inbox: ${process.env.DESTINATION_EMAIL || process.env.SMTP_USER}\n`);
    
    console.log('🎉 SUCCESS! Your Hostinger SMTP configuration is working correctly!');
    console.log('\n📋 Next Steps:');
    console.log('  1. Deploy backend to Render with these same environment variables');
    console.log('  2. Add all variables in Render Dashboard → Environment tab');
    console.log('  3. Test the /api/health endpoint');
    console.log('  4. Test contact form submission from your website\n');
} catch (error) {
    console.error('❌ Failed to send test email!');
    console.error('Error:', error.message);
    console.error('\n💡 Troubleshooting tips:');
    console.error('  1. SMTP connection worked but sending failed - check email quota');
    console.error('  2. Verify destination email address is correct');
    console.error('  3. Check Hostinger email account settings');
    console.error('  4. Try sending to a different email address\n');
    process.exit(1);
}
