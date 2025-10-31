# Hostinger Deployment Guide

This project is configured to deploy to Hostinger with a **PHP backend** and **React frontend** in a single hosting environment.

## Architecture

```
Hostinger Server
├── /public_html/          → React Frontend (Static Files)
│   ├── index.html
│   ├── assets/            → JS, CSS, Images
│   ├── api/
│   │   └── contact.php    → PHP Backend API
│   └── .htaccess          → Routing & Config
```

## Features

- ✅ **All-in-One Deployment**: Frontend + Backend on same domain
- ✅ **Automated Deployment**: GitHub Actions with FTP
- ✅ **PHP Email Backend**: Uses Hostinger's built-in mail() function
- ✅ **React Router Support**: Client-side routing with .htaccess
- ✅ **No External Services**: Everything runs on Hostinger

---

## Setup Instructions

### 1. Get Hostinger FTP Credentials

1. Log in to **Hostinger hPanel**
2. Go to **Files** → **FTP Accounts**
3. Copy your FTP credentials:
   - FTP Server
   - FTP Username
   - FTP Password

### 2. Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:

```
FTP_SERVER = ftp.yourdomain.com
FTP_USERNAME = your_ftp_username
FTP_PASSWORD = your_ftp_password
```

### 3. Configure Email in PHP Backend

Edit `public/api/contact.php` and update:

```php
$to = 'info@blaupunkt-ev.com';  // Your email address
```

The email headers are already configured to use:
- **From**: `noreply@blaupunkt-ev.com`
- **Reply-To**: User's email from form

### 4. Push to GitHub

```bash
git add .
git commit -m "Setup PHP backend deployment"
git push origin main
```

GitHub Actions will automatically:
1. Build your React app
2. Deploy to Hostinger via FTP
3. Deploy complete! 🚀

---

## Local Development

### Run Frontend

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

### Test PHP Backend Locally (Optional)

If you have PHP installed:

```bash
# Start PHP built-in server
php -S localhost:8000 -t public

# API available at: http://localhost:8000/api/contact.php
```

---

## File Structure

```
Blaupunkt/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
├── public/
│   ├── api/
│   │   └── contact.php         # PHP email handler
│   └── .htaccess               # Routing rules
├── src/
│   ├── config/
│   │   └── api.js              # API configuration
│   ├── components/
│   │   └── ContactUs.jsx       # Contact form
│   └── ...
└── vite.config.js              # Vite config (copies public folder)
```

---

## API Endpoint

**POST** `/api/contact.php`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```

---

## Deployment Workflow

```bash
# Make changes
git add .
git commit -m "Update feature"
git push origin main

# GitHub Actions automatically:
# 1. Checks out code
# 2. Installs dependencies
# 3. Builds React app (npm run build)
# 4. Deploys dist/ folder to Hostinger /public_html/
# Done! ✅
```

---

## Troubleshooting

### Email Not Sending

1. Check Hostinger email settings in hPanel
2. Verify email address exists: `noreply@blaupunkt-ev.com`
3. Check PHP error logs in hPanel
4. Test mail() function:
   ```php
   <?php
   mail('test@example.com', 'Test', 'Test message');
   ?>
   ```

### React Router 404 Errors

1. Ensure `.htaccess` is deployed to `/public_html/`
2. Check `.htaccess` rules are correct
3. Verify mod_rewrite is enabled (usually is on Hostinger)

### FTP Deployment Fails

1. Check FTP credentials in GitHub Secrets
2. Verify server path is `/public_html/`
3. Check GitHub Actions logs for errors

### API Not Working

1. Verify PHP file deployed: `/public_html/api/contact.php`
2. Check file permissions (should be 644)
3. Test API directly: `https://yourdomain.com/api/contact.php`
4. Check browser console for CORS errors

---

## Important Notes

- ✅ `.htaccess` handles React Router routing
- ✅ PHP backend uses Hostinger's mail() function
- ✅ No Node.js backend needed
- ✅ No SSH access required
- ✅ Works with all Hostinger shared hosting plans

---

## Support

For issues, check:
1. GitHub Actions logs
2. Hostinger error logs (hPanel → Files → Error Log)
3. Browser console (F12)

---

## License

Private project for Blaupunkt EV
