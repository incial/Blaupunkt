// Client Email Template for DNS and Hosting Setup
export function generateClientSetupEmail({ clientName = "Blaupunkt Team", domainName = "Blaupunkt-ev.com" }) {
    return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: auto; padding: 0; border: 1px solid #e1e1e1; border-radius: 6px; overflow: hidden; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #1e40af; padding: 24px 30px; color: white;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 500;">Website Hosting & DNS Setup Requirements</h1>
            <p style="margin: 8px 0 0; font-size: 14px; color: #dbeafe; opacity: 0.9;">DNS Parameters for ${domainName}</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 25px; line-height: 1.6;">
                Hello ${clientName},
            </p>
            
            <p style="font-size: 14px; color: #4b5563; margin-bottom: 25px; line-height: 1.6;">
                Thank you for choosing us for your website development. Your website is ready for deployment. To set up hosting for your domain <strong>${domainName}</strong>, please configure the following DNS records with your domain registrar:
            </p>

            <!-- DNS Records Section -->
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #1e40af;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #1e40af; font-weight: 600;">Required DNS Records</h3>
                
                <!-- A Records -->
                <div style="margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #374151; font-weight: 600;">A Records (for root domain):</h4>
                    <div style="background-color: #ffffff; padding: 12px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #1f2937; border: 1px solid #e5e7eb;">
                        Name: @ (or leave blank)<br>
                        Value: 75.2.60.5<br><br>
                        Name: @ (or leave blank)<br>
                        Value: 99.83.190.102
                    </div>
                </div>

                <!-- CNAME Record -->
                <div style="margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #374151; font-weight: 600;">CNAME Record (for www subdomain):</h4>
                    <div style="background-color: #ffffff; padding: 12px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #1f2937; border: 1px solid #e5e7eb;">
                        Name: www<br>
                        Value: blaupunkt-website.netlify.app
                        <p style="font-size: 11px; color: #6b7280; margin: 8px 0 0 0; font-family: Arial, sans-serif;">
                            <em>Note: We'll provide the exact Netlify subdomain after deployment</em>
                        </p>
                    </div>
                </div>

                <!-- MX Records Note -->
                <div style="background-color: #ecfdf5; padding: 15px; border-radius: 6px; border: 1px solid #a7f3d0;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #059669; font-weight: 600;">📧 Email Configuration:</h4>
                    <p style="margin: 0; font-size: 13px; color: #047857; line-height: 1.5;">
                        Your existing MX records for <strong>${domainName}</strong> email will remain unchanged. The website hosting is separate from your email services.
                    </p>
                </div>
            </div>

            <!-- Instructions -->
            <div style="background-color: #fffbeb; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
                <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #92400e; font-weight: 600;">📋 Setup Instructions:</h3>
                <ol style="margin: 0; padding-left: 20px; color: #92400e; font-size: 14px; line-height: 1.6;">
                    <li style="margin-bottom: 8px;">Login to your domain registrar's control panel</li>
                    <li style="margin-bottom: 8px;">Navigate to DNS Management or DNS Zone Editor</li>
                    <li style="margin-bottom: 8px;">Add the A records pointing to the Netlify IPs</li>
                    <li style="margin-bottom: 8px;">Add the CNAME record for www subdomain</li>
                    <li style="margin-bottom: 8px;">Save changes (DNS propagation may take 24-48 hours)</li>
                </ol>
            </div>

            <!-- Timeline -->
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
                <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #0c4a6e; font-weight: 600;">⏱️ Timeline:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #0c4a6e; font-size: 14px; line-height: 1.6;">
                    <li style="margin-bottom: 8px;"><strong>DNS Setup:</strong> 5-10 minutes</li>
                    <li style="margin-bottom: 8px;"><strong>Propagation:</strong> 24-48 hours globally</li>
                    <li style="margin-bottom: 8px;"><strong>SSL Certificate:</strong> Auto-generated after DNS propagation</li>
                </ul>
            </div>

            <!-- Contact Information -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
                <p style="font-size: 14px; color: #4b5563; margin-bottom: 15px; line-height: 1.6;">
                    If you need assistance with DNS configuration or have any questions, please don't hesitate to reach out to us.
                </p>
                
                <p style="font-size: 14px; color: #374151; margin: 0; line-height: 1.6;">
                    Best regards,<br>
                    <strong>Development Team</strong><br>
                    <span style="color: #6b7280;">Website Development & Hosting</span>
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                This email contains technical setup instructions for ${domainName}
            </p>
        </div>
    </div>
    `;
}

// Function to send setup email to client
export async function sendClientSetupEmail(transporter, clientEmail, clientName, domainName) {
    const emailContent = generateClientSetupEmail({ clientName, domainName });
    
    const mailOptions = {
        from: 'noreply@blaupunkt-ev.com',
        to: clientEmail,
        subject: `DNS Setup Instructions for ${domainName} - Website Hosting`,
        html: emailContent
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Client setup email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Failed to send client setup email:', error);
        return { success: false, error: error.message };
    }
}
