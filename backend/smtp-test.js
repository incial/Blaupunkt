// SMTP Server Detection for Blaupunkt-ev.com
// Run this to find your correct SMTP settings

import nodemailer from 'nodemailer';

const testSMTPConfigurations = [
    {
        name: 'Standard SMTP',
        host: 'smtp.blaupunkt-ev.com',
        port: 587,
        secure: false
    },
    {
        name: 'Mail Server',
        host: 'mail.blaupunkt-ev.com',
        port: 587,
        secure: false
    },
    {
        name: 'SSL SMTP',
        host: 'smtp.blaupunkt-ev.com',
        port: 465,
        secure: true
    },
    {
        name: 'SSL Mail',
        host: 'mail.blaupunkt-ev.com',
        port: 465,
        secure: true
    }
];

async function testSMTPConnection(config) {
    const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
            user: 'noreply@blaupunkt-ev.com',
            pass: 'YOUR_PASSWORD_HERE' // Replace with actual password
        }
    });

    try {
        await transporter.verify();
        console.log(`✅ ${config.name} (${config.host}:${config.port}) - WORKS!`);
        return config;
    } catch (error) {
        console.log(`❌ ${config.name} (${config.host}:${config.port}) - Failed: ${error.message}`);
        return null;
    }
}

// Test all configurations
async function findWorkingSMTP() {
    console.log('Testing SMTP configurations for Blaupunkt-ev.com...\n');
    
    for (const config of testSMTPConfigurations) {
        await testSMTPConnection(config);
    }
}

// Uncomment to run: findWorkingSMTP();
