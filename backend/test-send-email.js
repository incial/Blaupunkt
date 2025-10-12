// Quick email test
import { transporter, destinationEmail } from './config.js';
import { generateEmailTemplate } from './template.js';

const testData = {
    fullName: 'Test User - Backend Working!',
    email: 'customer@example.com',
    phone: '1234567890',
    message: '✅ This is a test email from your backend!\n\nIf you receive this, your SMTP configuration is working perfectly!'
};

console.log('📧 Sending test email to:', destinationEmail);
console.log('Using SMTP:', process.env.SMTP_HOST);

const mailOptions = {
    from: `"Blaupunkt EV Contact Form" <${process.env.SMTP_USER || 'info@blaupunkt-ev.com'}>`,
    replyTo: `"${testData.fullName}" <${testData.email}>`,
    to: destinationEmail,
    subject: `✅ Test Email - Contact Form Working!`,
    html: generateEmailTemplate(testData)
};

transporter.sendMail(mailOptions)
    .then(() => {
        console.log('\n✅ SUCCESS! Email sent to', destinationEmail);
        console.log('Check your inbox at info@blaupunkt-ev.com');
        process.exit(0);
    })
    .catch((err) => {
        console.error('\n❌ FAILED to send email:');
        console.error(err);
        process.exit(1);
    });
