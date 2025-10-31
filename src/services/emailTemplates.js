/**
 * Email Templates for Contact Form
 * Contains HTML and plain text email templates
 */

/**
 * Generate HTML email template for contact form submission
 * @param {Object} data - Contact form data
 * @param {string} data.fullName - Sender's full name
 * @param {string} data.email - Sender's email
 * @param {string} data.phone - Sender's phone number
 * @param {string} data.message - Message content
 * @returns {string} HTML email template
 */
export const getContactFormHTMLTemplate = ({ fullName, email, phone, message }) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e40af; margin-top: 0; font-size: 18px; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Contact Information</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 100px;">Name:</strong>
            <span style="color: #111827;">${fullName}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 100px;">Email:</strong>
            <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #4b5563; display: inline-block; width: 100px;">Phone:</strong>
            <a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a>
          </div>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1e40af; margin-top: 0; font-size: 18px; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Message</h2>
          <p style="color: #374151; white-space: pre-wrap; line-height: 1.8; margin: 0;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #1e40af; border-radius: 4px;">
          <p style="margin: 0; color: #1e3a8a; font-size: 14px;">
            <strong>Note:</strong> This email was sent from the Blaupunkt contact form on ${currentDate}
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
        <p style="margin: 5px 0;">© ${currentYear} Blaupunkt EV Systems. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};

/**
 * Generate plain text email template for contact form submission
 * @param {Object} data - Contact form data
 * @param {string} data.fullName - Sender's full name
 * @param {string} data.email - Sender's email
 * @param {string} data.phone - Sender's phone number
 * @param {string} data.message - Message content
 * @returns {string} Plain text email template
 */
export const getContactFormTextTemplate = ({ fullName, email, phone, message }) => {
  const currentDate = new Date().toLocaleString();

  return `
New Contact Form Submission

Contact Information:
-------------------
Name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
--------
${message}

---
This email was sent from the Blaupunkt contact form on ${currentDate}
  `.trim();
};

/**
 * Get email subject line
 * @param {string} fullName - Sender's full name
 * @returns {string} Email subject
 */
export const getEmailSubject = (fullName) => {
  return `New Contact Form Submission from ${fullName}`;
};
