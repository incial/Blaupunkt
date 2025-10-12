// SMTP Server Detection for Blaupunkt-ev.com
// Run this to find your correct SMTP settings

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
    name: 'Env SMTP',
    host: process.env.SMTP_HOST || 'smtp.blaupunkt-ev.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: (process.env.SMTP_PORT === '465')
};

async function testSMTPConnection(config) {
    const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
            user: process.env.SMTP_USER || 'noreply@blaupunkt-ev.com',
            pass: process.env.SMTP_PASS || 'YOUR_PASSWORD_HERE'
        }
    });

    try {
        await transporter.verify();
        console.log(`✅ ${config.name} (${config.host}:${config.port}) - WORKS!`);
        return true;
    } catch (error) {
        console.log(`❌ ${config.name} (${config.host}:${config.port}) - Failed: ${error.message}`);
        return false;
    }
}

// Run the single env-driven test when executed
async function run() {
    console.log('Testing SMTP configuration from environment variables...\n');
    const ok = await testSMTPConnection(envConfig);
    process.exit(ok ? 0 : 2);
}

run();
