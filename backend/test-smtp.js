// Test SMTP Connection and Authentication
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('\n🔍 Testing SMTP Configuration...\n');

// Display configuration (hide password)
console.log('Configuration:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`SMTP Host: ${process.env.SMTP_HOST || '❌ NOT SET'}`);
console.log(`SMTP Port: ${process.env.SMTP_PORT || '❌ NOT SET'}`);
console.log(`SMTP User: ${process.env.SMTP_USER || '❌ NOT SET'}`);
console.log(`SMTP Pass: ${process.env.SMTP_PASS ? '✅ Set (' + process.env.SMTP_PASS.substring(0, 3) + '****)' : '❌ NOT SET'}`);
console.log(`Destination: ${process.env.DESTINATION_EMAIL || '❌ NOT SET'}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Create transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true, // Show detailed logs
    logger: true  // Enable logging
});

// Test 1: Verify connection
console.log('Test 1: Verifying SMTP connection...\n');

transporter.verify()
    .then(() => {
        console.log('✅ SMTP connection successful!\n');
        console.log('Your credentials are correct and the server is reachable.\n');
        
        // Test 2: Send test email
        console.log('Test 2: Sending test email...\n');
        
        const mailOptions = {
            from: `"Blaupunkt Test" <${process.env.SMTP_USER}>`,
            to: process.env.DESTINATION_EMAIL,
            subject: 'SMTP Test Email - ' + new Date().toLocaleString(),
            html: `
                <h2>✅ SMTP Test Successful!</h2>
                <p>This is a test email from your Blaupunkt backend.</p>
                <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Server:</strong> ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}</p>
                <p><strong>User:</strong> ${process.env.SMTP_USER}</p>
                <hr>
                <p>If you received this email, your SMTP configuration is working correctly! 🎉</p>
            `
        };
        
        return transporter.sendMail(mailOptions);
    })
    .then((info) => {
        console.log('✅ Test email sent successfully!\n');
        console.log('Message ID:', info.messageId);
        console.log(`\n🎉 All tests passed! Check ${process.env.DESTINATION_EMAIL} for the test email.\n`);
        process.exit(0);
    })
    .catch((error) => {
        console.error('❌ SMTP Error:\n');
        console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.error(error.message);
        console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        
        // Provide helpful error messages
        if (error.message.includes('535')) {
            console.log('🔧 Fix: Authentication Failed (535)');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('Your SMTP password is incorrect or the account has restrictions.\n');
            console.log('Solutions:');
            console.log('1. Reset password in Hostinger hPanel → Email → Email Accounts');
            console.log('2. Update SMTP_PASS in backend/.env file');
            console.log('3. Verify email account is active (not suspended)');
            console.log('4. Try logging in to https://webmail.hostinger.com/');
        } else if (error.message.includes('ETIMEDOUT') || error.message.includes('ECONNREFUSED')) {
            console.log('🔧 Fix: Connection Timeout/Refused');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('Cannot connect to SMTP server.\n');
            console.log('Solutions:');
            console.log('1. Check your internet connection');
            console.log('2. Try port 587 instead of 465');
            console.log('3. Check if firewall is blocking SMTP');
        } else if (error.message.includes('EAUTH')) {
            console.log('🔧 Fix: Authentication Required');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('SMTP authentication failed.\n');
            console.log('Solutions:');
            console.log('1. Verify SMTP_USER is the full email: info@blaupunkt-ev.com');
            console.log('2. Verify SMTP_PASS is correct');
            console.log('3. Check Hostinger account for "Allow SMTP" setting');
        }
        
        console.log('\n📖 See FIX_SMTP_AUTH.md for detailed instructions.\n');
        process.exit(1);
    });
