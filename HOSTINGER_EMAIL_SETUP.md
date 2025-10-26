# 📧 Hostinger Email + Render Backend Setup Guide

## Overview
This guide helps you configure email sending from your website contact form using:
- **Frontend**: Hosted on Hostinger
- **Backend**: Hosted on Render
- **Email**: Hostinger email account

---

## 🎯 Step 1: Get Hostinger Email Credentials

1. **Login to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Login with your account

2. **Navigate to Email Accounts**
   - Click on **"Emails"** in the sidebar
   - Click on **"Email Accounts"**

3. **Find or Create Email Account**
   - If you already have `info@blaupunkt-ev.com` (or similar), use that
   - Otherwise, click **"Create Email Account"** and create one

4. **Get SMTP Settings**
   - Click on **"Configure Email Client"** or **"Settings"** for your email
   - Note down these settings:
     ```
     SMTP Host: smtp.hostinger.com (or mail.yourdomain.com)
     SMTP Port: 465 (SSL) or 587 (TLS)
     Username: info@blaupunkt-ev.com (your full email address)
     Password: [Your email password]
     ```

5. **Common Hostinger SMTP Settings**:
   - **Host**: `smtp.hostinger.com` OR `mail.blaupunkt-ev.com`
   - **Port**: `465` (SSL/Secure) or `587` (TLS/STARTTLS)
   - **Username**: Your complete email address
   - **Password**: Your email account password
   - **Encryption**: SSL (port 465) or TLS (port 587)

---

## 🚀 Step 2: Configure Render Backend

### 2.1 Deploy to Render (if not already done)

1. **Go to Render Dashboard**
   - Visit https://render.com
   - Login or create account

2. **Create New Web Service**
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Select the `Blaupunkt` repository

3. **Configure Build Settings**
   ```
   Name: blaupunkt-backend
   Region: Oregon (or closest to you)
   Branch: master
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: node mailserver.js
   ```

4. **Select Free Plan**
   - Choose **"Free"** plan

### 2.2 Set Environment Variables in Render

**CRITICAL**: Go to your Render service → **"Environment"** tab and add these variables:

```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=YOUR_ACTUAL_EMAIL_PASSWORD_HERE
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

**⚠️ IMPORTANT**: 
- Replace `YOUR_ACTUAL_EMAIL_PASSWORD_HERE` with your real Hostinger email password
- Use `smtp.hostinger.com` OR `mail.blaupunkt-ev.com` (try both if one doesn't work)
- Port 465 uses SSL, Port 587 uses TLS (Hostinger supports both)

### 2.3 Get Your Render Backend URL

After deployment, your backend URL will be:
```
https://blaupunkt-backendd.onrender.com
```

Copy this URL - you'll need it for the frontend.

---

## 🌐 Step 3: Configure Frontend on Hostinger

### 3.1 Update Production Environment File

Edit `.env.production` in your project root:

```bash
# Backend API URL (Your Render backend)
VITE_API_URL=https://blaupunkt-backend.onrender.com

# App Configuration
VITE_APP_NAME=Blaupunkt EV
VITE_CONTACT_EMAIL=info@blaupunkt-ev.com

# Frontend Domain (Hostinger)
VITE_DOMAIN=https://blaupunkt-ev.com
```

### 3.2 Build Frontend for Production

Run this command in PowerShell from your project root:

```powershell
# Build with production environment variables
npm run build
```

This creates a `dist` folder with your production-ready files.

### 3.3 Upload to Hostinger

**Method 1: Using File Manager**
1. Login to Hostinger hPanel
2. Go to **"Files"** → **"File Manager"**
3. Navigate to `public_html` (or your domain folder)
4. Delete old files (optional: backup first)
5. Upload all files from `dist` folder
6. Make sure `index.html` is in the root of `public_html`

**Method 2: Using FTP**
1. Get FTP credentials from Hostinger hPanel
2. Use FileZilla or any FTP client
3. Upload `dist` folder contents to `public_html`

---

## 🧪 Step 4: Test Everything

### 4.1 Test Backend Health

Visit this URL in your browser:
```
https://blaupunkt-backend.onrender.com/api/health
```

You should see:
```json
{
  "status": "ok",
  "timestamp": "2025-10-26T...",
  "message": "Backend is alive!"
}
```

### 4.2 Test Environment Variables

Visit this URL to check if all environment variables are set:
```
https://blaupunkt-backend.onrender.com/api/debug-env
```

You should see all variables marked with ✅. Example:
```json
{
  "message": "Environment Variables Status",
  "status": {
    "SMTP_HOST": "✅ Set",
    "SMTP_PORT": "✅ Set",
    "SMTP_USER": "✅ Set",
    "SMTP_PASS": "✅ Set (hidden)",
    "DESTINATION_EMAIL": "✅ Set",
    "NODE_ENV": "production",
    "VITE_DOMAIN": "✅ Set"
  }
}
```

**⚠️ If any show ❌ Missing**: Go back to Render and add them in Environment tab.

### 4.3 Test Email Sending

**Method 1: Using Your Live Website**
1. Go to https://blaupunkt-ev.com/contact
2. Fill out the contact form
3. Submit
4. Check your inbox at `info@blaupunkt-ev.com`

**Method 2: Using cURL (PowerShell)**
```powershell
curl -X POST https://blaupunkt-backend.onrender.com/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message from the contact form"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

---

## 🔧 Troubleshooting

### Problem 1: "500 Internal Server Error"

**Possible Causes:**
- SMTP credentials are incorrect
- Environment variables not set in Render
- SMTP host/port is wrong

**Solutions:**
1. Check Render logs:
   - Go to Render Dashboard → Your Service → Logs
   - Look for SMTP errors

2. Verify environment variables:
   - Visit `/api/debug-env` endpoint
   - Ensure all variables show ✅

3. Try alternative SMTP settings:
   ```bash
   # Option 1: Using smtp.hostinger.com
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   
   # Option 2: Using your domain
   SMTP_HOST=mail.blaupunkt-ev.com
   SMTP_PORT=465
   
   # Option 3: Try TLS instead of SSL
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   ```

### Problem 2: "CORS Error" or "Network Request Failed"

**Cause:** Backend not allowing requests from your domain

**Solution:**
1. Ensure `VITE_DOMAIN` is set in Render:
   ```bash
   VITE_DOMAIN=https://blaupunkt-ev.com
   ```

2. Check if your domain (with/without www) is in the allowed origins in `mailserver.js`

### Problem 3: Email Not Arriving

**Possible Causes:**
- Email going to spam folder
- Destination email is wrong
- SMTP authentication failed

**Solutions:**
1. Check spam/junk folder
2. Verify `DESTINATION_EMAIL` in Render
3. Check Render logs for errors
4. Test SMTP credentials using an email client (like Outlook)

### Problem 4: Backend Sleeps (Render Free Tier)

**Cause:** Render free tier spins down after 15 minutes of inactivity

**Solutions:**
1. First request might be slow (30-60 seconds) - this is normal
2. Use a keep-alive service (see `docs/setup/KEEP_ALIVE_GUIDE.md`)
3. Upgrade to paid Render plan for always-on service

### Problem 5: Authentication Failed

**Error**: "Invalid login: 535 Authentication failed"

**Solutions:**
1. Double-check email password (copy-paste to avoid typos)
2. Ensure username is full email address: `info@blaupunkt-ev.com`
3. Try resetting email password in Hostinger hPanel
4. Check if 2FA/Two-factor authentication is enabled (disable if needed)
5. Some Hostinger accounts require app-specific passwords

---

## 📝 Quick Checklist

Use this checklist to ensure everything is set up correctly:

### Hostinger Email
- [ ] Email account created (e.g., `info@blaupunkt-ev.com`)
- [ ] SMTP credentials noted down
- [ ] Email password is correct and working

### Render Backend
- [ ] Service deployed from GitHub
- [ ] Root directory set to `backend`
- [ ] All environment variables added:
  - [ ] `NODE_ENV=production`
  - [ ] `SMTP_HOST` (smtp.hostinger.com or mail.yourdomain.com)
  - [ ] `SMTP_PORT` (465 or 587)
  - [ ] `SMTP_USER` (full email address)
  - [ ] `SMTP_PASS` (email password)
  - [ ] `DESTINATION_EMAIL`
  - [ ] `VITE_DOMAIN`
- [ ] Health endpoint working: `/api/health`
- [ ] Debug endpoint shows all ✅: `/api/debug-env`

### Frontend (Hostinger)
- [ ] `.env.production` has correct `VITE_API_URL`
- [ ] Frontend built with `npm run build`
- [ ] `dist` folder uploaded to Hostinger
- [ ] Website accessible at your domain

### Testing
- [ ] Backend health check passes
- [ ] Environment variables all set
- [ ] Contact form submission successful
- [ ] Email received in inbox

---

## 🎉 Success!

Once all tests pass, your setup is complete! Users can now submit the contact form on your website and you'll receive emails at your Hostinger inbox.

### Next Steps

1. **Remove Debug Endpoint** (Security)
   - Comment out or remove the `/api/debug-env` endpoint in `mailserver.js`
   - This prevents exposing your configuration publicly

2. **Set Up Keep-Alive** (Optional)
   - See `docs/setup/KEEP_ALIVE_GUIDE.md`
   - Prevents backend from sleeping

3. **Monitor Logs**
   - Regularly check Render logs for any issues
   - Set up email notifications for errors

---

## 📚 Additional Resources

- [Render Deployment Guide](docs/deployment/RENDER_DEPLOYMENT_GUIDE.md)
- [Hostinger Frontend Guide](docs/deployment/HOSTINGER_FRONTEND.md)
- [Keep-Alive Setup](docs/setup/KEEP_ALIVE_GUIDE.md)
- [SMTP Troubleshooting](docs/FIX_SMTP_AUTH.md)

---

## 🆘 Still Having Issues?

1. **Check Render Logs**: Dashboard → Your Service → Logs tab
2. **Test SMTP credentials** with an email client (Thunderbird, Outlook)
3. **Try both SMTP options**: `smtp.hostinger.com` and `mail.yourdomain.com`
4. **Contact Hostinger Support** if SMTP credentials don't work
5. **Check this doc**: `docs/TROUBLESHOOTING_500_ERROR.md`
