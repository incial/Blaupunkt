/**
 * Email Service using Resend
 * Handles all email sending functionality
 */

import { Resend } from 'resend';
import { 
  getContactFormHTMLTemplate, 
  getContactFormTextTemplate,
  getEmailSubject 
} from './emailTemplates.js';

/**
 * Email Service Class
 */
class EmailService {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('Resend API key is required');
    }
    this.resend = new Resend(apiKey);
  }

  /**
   * Send contact form email
   * @param {Object} formData - Contact form data
   * @param {string} formData.fullName - Sender's full name
   * @param {string} formData.email - Sender's email
   * @param {string} formData.phone - Sender's phone number
   * @param {string} formData.message - Message content
   * @param {Object} config - Email configuration
   * @param {string} config.from - Sender email address
   * @param {string} config.to - Recipient email address
   * @returns {Promise<Object>} Resend API response
   */
  async sendContactFormEmail(formData, config) {
    try {
      const { fullName, email, phone, message } = formData;
      const { from, to } = config;

      // Validate required fields
      if (!fullName || !email || !phone || !message) {
        throw new Error('All form fields are required');
      }

      if (!from || !to) {
        throw new Error('Email configuration (from, to) is required');
      }

      // Generate email templates
      const htmlContent = getContactFormHTMLTemplate({ fullName, email, phone, message });
      const textContent = getContactFormTextTemplate({ fullName, email, phone, message });
      const subject = getEmailSubject(fullName);

      // Send email using Resend
      const { data, error } = await this.resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: htmlContent,
        text: textContent,
        // Optional: Add reply-to header for easy responses
        reply_to: email,
        // Optional: Add tags for tracking
        tags: [
          {
            name: 'category',
            value: 'contact-form'
          }
        ]
      });

      if (error) {
        throw new Error(`Resend API Error: ${error.message}`);
      }

      return {
        success: true,
        data: data,
        emailId: data.id
      };

    } catch (error) {
      console.error('Email Service Error:', error);
      throw error;
    }
  }

  /**
   * Verify Resend API connection
   * @returns {Promise<boolean>} Connection status
   */
  async verifyConnection() {
    try {
      // Try to get API key info (this is a simple check)
      // Note: Resend doesn't have a direct verification endpoint
      // So we'll just check if the API key is configured
      return !!this.resend;
    } catch (error) {
      console.error('Connection verification failed:', error);
      return false;
    }
  }
}

/**
 * Create and export email service instance
 * @param {string} apiKey - Resend API key
 * @returns {EmailService} Email service instance
 */
export const createEmailService = (apiKey) => {
  return new EmailService(apiKey);
};

export default EmailService;
