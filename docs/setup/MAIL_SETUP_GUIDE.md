# 📧 Email Contact Form Setup Guide

This guide explains how to set up and test the contact form email functionality for the Blaupunkt EV website.

## 🎯 Overview

The contact form consists of two parts:
1. **Frontend (React)** - The contact form UI in `src/Components/ContactUs.jsx`
2. **Backend (Node.js/Express)** - The email server in `backend/mailserver.js`

## 🔧 Prerequisites

- Node.js (v18 or higher)
- SMTP email credentials (Hostinger, Gmail, or other email provider)

## 📋 Quick Start

### Option 1: Use the Startup Script (Recommended)

```powershell
# Run the development startup script
.\start-dev.ps1
```

### Option 2: Manual Start

```powershell
# Terminal 1 - Start Backend
cd backend
npm install
node mailserver.js

# Terminal 2 - Start Frontend
npm install
npm run dev
```

## ⚙️ Configuration

### 1. Backend Environment Variables (`backend/.env`)

Create or edit `backend/.env` with your email configuration:

```env
# Development mode
NODE_ENV=development

# SMTP Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-email-password-here

# Email Destination
DESTINATION_EMAIL=info@blaupunkt-ev.com

# Server Port
PORT=5000
```

### 2. Frontend Environment Variables (`.env`)

```env
# API URL (local development)
VITE_API_URL=http://localhost:5000

# Development mode
NODE_ENV=development
```

## 🧪 Testing

### 1. Test Backend Health

```powershell
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

### 2. Test Email Sending

```powershell
curl -X POST http://localhost:5000/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

### 3. Test Frontend Form

1. Open browser to `http://localhost:3002/contact`
2. Fill in the contact form
3. Click Submit
4. Check for success toast notification
5. Check destination email inbox

## 🔍 Troubleshooting

### Issue: "Cannot connect to server"

**Solution:**
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in `.env` is set to `http://localhost:5000`

### Issue: "SMTP connection failed"

**Solution:**
1. Verify SMTP credentials in `backend/.env`
2. Check email provider settings (port, host, SSL/TLS)
3. For Gmail: Enable "App Passwords" in security settings
4. For Hostinger: Get SMTP settings from hPanel → Email

### Issue: "JSON parse error"

**Solution:**
- This error occurs when backend is not running or returns non-JSON response
- Check backend terminal for error messages
- Ensure all backend responses use `.json()` method

### Issue: Port already in use

**Solution:**
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## 📧 Email Provider Setup

### Hostinger SMTP Settings

```
Host: smtp.hostinger.com
Port: 465 (SSL) or 587 (TLS)
Username: your-email@yourdomain.com
Password: Your email password
```

### Gmail SMTP Settings

```
Host: smtp.gmail.com
Port: 465 (SSL) or 587 (TLS)
Username: your-email@gmail.com
Password: App-specific password (not your regular password)
```

**Note:** For Gmail, you must:
1. Enable 2-factor authentication
2. Generate an App Password at https://myaccount.google.com/apppasswords

### Testing SMTP (Development)

For local testing without real SMTP, you can use:
- [Ethereal Email](https://ethereal.email/) - Fake SMTP service
- [MailHog](https://github.com/mailhog/MailHog) - Local email testing tool

## 🚀 Production Deployment

### Backend (.env for production)

```env
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-production-password
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

### Frontend (.env.production)

```env
VITE_API_URL=https://your-backend-url.com
NODE_ENV=production
```

## 🔒 Security Best Practices

1. **Never commit `.env` files** - They contain sensitive credentials
2. **Use environment variables** - Set them in your hosting platform
3. **Enable rate limiting** - Prevent spam abuse
4. **Validate input** - Already implemented in backend
5. **Use HTTPS** - Always in production

## 📝 File Structure

```
backend/
├── .env                 # Backend environment variables
├── config.js            # Email configuration
├── mailserver.js        # Express server & API endpoints
├── template.js          # Email HTML template
└── package.json         # Backend dependencies

src/
├── Components/
│   └── ContactUs.jsx    # Contact form component
└── config/
    └── api.js           # API configuration
```

## ✅ Checklist

Before going live, ensure:

- [ ] Backend `.env` has correct SMTP credentials
- [ ] Frontend `.env` has correct API URL
- [ ] Backend is running and accessible
- [ ] Frontend connects to backend successfully
- [ ] Test email sends successfully
- [ ] Email template looks good
- [ ] Error handling works properly
- [ ] Form validation works
- [ ] Success/error messages display correctly

## 🆘 Support

If you encounter issues:

1. Check backend terminal for errors
2. Check browser console for errors
3. Verify environment variables are set correctly
4. Test SMTP credentials manually
5. Ensure all dependencies are installed

## 📞 Contact

For additional support, reach out to the development team or check the main README.md file.

---

**Last Updated:** October 25, 2025
**Version:** 1.0.0
