export function generateEmailTemplate({ fullName, email, phone, message }) {
    return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: auto; padding: 0; border: 1px solid #e1e1e1; border-radius: 6px; overflow: hidden; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #2c3e50; padding: 24px 30px; color: white;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 500;">New Contact Form Submission</h1>
            <p style="margin: 8px 0 0; font-size: 14px; color: #ecf0f1; opacity: 0.9;">You have received a new message via your contact form</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #2c3e50; font-weight: 500;">Contact Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; width: 100px; font-weight: 600; color: #34495e; vertical-align: top;">Name:</td>
                        <td style="padding: 8px 0; color: #34495e;">${fullName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #34495e; vertical-align: top;">Email:</td>
                        <td style="padding: 8px 0; color: #34495e;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #34495e; vertical-align: top;">Phone:</td>
                        <td style="padding: 8px 0; color: #34495e;">${phone || 'Not provided'}</td>
                    </tr>
                </table>
            </div>
            
            <div>
                <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #2c3e50; font-weight: 500;">Message</h3>
                <div style="background-color: #f8f9fa; padding: 16px; border-radius: 4px; border-left: 3px solid #3498db; color: #34495e; line-height: 1.5;">
                    ${message.replace(/\n/g, '<br/>')}
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 16px 30px; text-align: center; border-top: 1px solid #e1e1e1;">
            <p style="margin: 0; font-size: 12px; color: #7f8c8d; line-height: 1.5;">
                This email was generated automatically. Please do not reply directly to this email.<br>
                <span style="color: #bdc3c7;">© ${new Date().getFullYear()} Your Company Name. All rights reserved.</span>
            </p>
        </div>
    </div>
    `;
}