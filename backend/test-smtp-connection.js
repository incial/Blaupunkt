import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Testing SMTP Connection...\n');

// Configuration
const config = {
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER || 'info@blaupunkt-ev.com',
        pass: process.env.SMTP_PASS || 'your-password'
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
    debug: true, // Enable debug output
    logger: true // Enable logging
};

console.log('📋 SMTP Configuration:');
console.log(`   Host: ${config.host}`);
console.log(`   Port: ${config.port}`);
console.log(`   Secure (SSL): ${config.secure}`);
console.log(`   User: ${config.auth.user}`);
console.log(`   Pass: ${config.auth.pass ? '***' + config.auth.pass.slice(-4) : 'NOT SET'}`);
console.log('\n');

// Create transporter
const transporter = nodemailer.createTransport(config);

// Test connection
console.log('🔌 Attempting to connect to SMTP server...\n');

transporter.verify((error, success) => {
    if (error) {
        console.error('❌ SMTP Connection FAILED!\n');
        console.error('Error Details:');
        console.error('  Code:', error.code);
        console.error('  Message:', error.message);
        console.error('  Command:', error.command);
        console.error('\n');
        
        // Provide specific troubleshooting
        if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
            console.error('🔥 CONNECTION TIMEOUT - Possible causes:');
            console.error('   1. Hostinger is blocking Render\'s IP addresses');
            console.error('   2. Firewall blocking outbound connections');
            console.error('   3. Wrong SMTP host or port\n');
            console.error('💡 Solution: Contact Hostinger support to allowlist Render IPs:');
            console.error('   - 100.20.92.101');
            console.error('   - 44.225.181.72');
            console.error('   - 44.227.217.144');
            console.error('   - 74.220.48.0/24');
            console.error('   - 74.220.56.0/24\n');
        } else if (error.code === 'EAUTH') {
            console.error('🔥 AUTHENTICATION FAILED - Possible causes:');
            console.error('   1. Wrong username or password');
            console.error('   2. Account locked or disabled');
            console.error('   3. Two-factor authentication enabled\n');
        } else if (error.code === 'ECONNREFUSED') {
            console.error('🔥 CONNECTION REFUSED - Possible causes:');
            console.error('   1. Wrong SMTP host');
            console.error('   2. Wrong port (try 587 instead of 465)');
            console.error('   3. SMTP service is down\n');
        }
        
        process.exit(1);
    } else {
        console.log('✅ SMTP Connection SUCCESSFUL!\n');
        console.log('🎉 Your SMTP configuration is working correctly.');
        console.log('   You can now send emails from your backend.\n');
        
        // Try sending a test email
        console.log('📧 Attempting to send test email...\n');
        
        const mailOptions = {
            from: `"Blaupunkt EV Test" <${config.auth.user}>`,
            to: process.env.DESTINATION_EMAIL || config.auth.user,
            subject: 'SMTP Test - Connection Successful',
            text: 'This is a test email to verify SMTP is working correctly.',
            html: '<h1>✅ SMTP Test Successful</h1><p>Your Render backend can now send emails via Hostinger SMTP!</p>'
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Failed to send test email:');
                console.error('  ', error.message);
                process.exit(1);
            } else {
                console.log('✅ Test email sent successfully!');
                console.log('   Message ID:', info.messageId);
                console.log('   Response:', info.response);
                console.log('\n🎉 Everything is working! Check your inbox.\n');
                process.exit(0);
            }
        });
    }
});

// Timeout fallback
setTimeout(() => {
    console.error('⏱️ Connection test timed out after 30 seconds.');
    console.error('This usually means Hostinger is blocking the connection.');
    process.exit(1);
}, 30000);
