n# Blaupunkt Backend - Email Service

Node.js Express server handling contact form submissions via SMTP.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and update with your Hostinger credentials:
```bash
cp .env.example .env
```

Edit `.env` and replace:
- `SMTP_PASS` with your actual email password
- `SMTP_USER` with your email address (if different)
- `DESTINATION_EMAIL` with where you want contact form emails sent

### 3. Test SMTP Connection (Optional but Recommended)
```bash
node smtp-test.js
```

This verifies your SMTP credentials work before starting the server.

### 4. Start the Server
```bash
node mailserver.js
```

Server runs on port 5000 by default (configurable via `PORT` env var).

---

## Hostinger Email Setup

### Option A: Using Hostinger Email Accounts (Recommended)

1. **Create Email Account in Hostinger**
   - Login to Hostinger hPanel
   - Go to **Emails** → **Email Accounts**
   - Create accounts: `noreply@yourdomain.com` and `info@yourdomain.com`

2. **Get SMTP Settings**
   - Click **Configure Email Client** next to your email account
   - Note the settings (usually):
     - **Host:** `smtp.hostinger.com` or `mail.yourdomain.com`
     - **Port:** `465` (SSL) or `587` (TLS)
     - **Username:** Full email address
     - **Password:** The password you set

3. **Update `.env` File**
   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=noreply@yourdomain.com
   SMTP_PASS=your-actual-password
   DESTINATION_EMAIL=info@yourdomain.com
   ```

### Option B: Using External Email Service (SendGrid, Mailgun, etc.)

Better deliverability and analytics, free tiers available.

**SendGrid Example:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

---

## Deployment Options

### Option 1: Hostinger Node.js Hosting (if available on your plan)

1. Check if your plan supports Node.js: hPanel → **Hosting** → **Manage** → Look for **Node.js**
2. Upload your backend folder
3. Set environment variables in Hostinger Node.js app settings
4. Start the app via Hostinger control panel

### Option 2: Deploy Backend Separately (Recommended)

**Why?** Most Hostinger shared hosting plans don't support Node.js. Deploying to a Node-capable platform is easier.

**Free Options:**
- [Render](https://render.com) - Free tier, auto-deploys from GitHub
- [Railway](https://railway.app) - Free tier with generous limits
- [Fly.io](https://fly.io) - Free tier for small apps
- [Cyclic](https://cyclic.sh) - Serverless, free tier

**Steps (using Render as example):**
1. Push your code to GitHub
2. Create new Web Service on Render
3. Connect your repo
4. Set environment variables in Render dashboard
5. Deploy
6. Update frontend `VITE_DOMAIN` to point to Render URL

### Option 3: Serverless Functions

Convert the backend to serverless functions (Netlify/Vercel Functions).

---

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | No | `development` | Environment mode |
| `SMTP_HOST` | Yes | `smtp.hostinger.com` | SMTP server hostname |
| `SMTP_PORT` | Yes | `465` | SMTP port (465=SSL, 587=TLS) |
| `SMTP_USER` | Yes | - | Full email address |
| `SMTP_PASS` | Yes | - | Email account password |
| `DESTINATION_EMAIL` | Yes | - | Where to send contact forms |
| `PORT` | No | `5000` | Server port |
| `VITE_DOMAIN` | No | `https://yourdomain.com` | Frontend URL (for CORS) |

---

## Testing

### Test SMTP Connection
```bash
node smtp-test.js
```

Expected output:
```
Testing SMTP configuration from environment variables...

✅ Env SMTP (smtp.hostinger.com:465) - WORKS!
```

### Test Contact Form Endpoint

Start server:
```bash
node mailserver.js
```

Send test request:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "This is a test message"
  }'
```

---

## Troubleshooting

### Error: `ECONNREFUSED 127.0.0.1:1025`
- **Cause:** Server is in development mode (trying to connect to local mail server)
- **Fix:** Set `NODE_ENV=production` in `.env`

### Error: `Invalid login` or `Authentication failed`
- **Cause:** Wrong SMTP credentials
- **Fix:** Double-check email address and password in Hostinger hPanel

### Error: `ECONNREFUSED` or `ETIMEDOUT`
- **Cause:** Wrong SMTP host or port, or firewall blocking
- **Fix:** Verify SMTP settings in Hostinger hPanel, try alternate ports (465/587)

### Error: `self signed certificate`
- **Cause:** SSL certificate validation issue
- **Fix:** Already handled in config with `tls.rejectUnauthorized: false`

### Emails going to spam
- **Fix:** Set up SPF, DKIM, and DMARC records in Hostinger DNS settings
- Or use transactional email service (SendGrid, Mailgun)

---

## Security Notes

1. **Never commit `.env`** - Already in `.gitignore`
2. **Use strong passwords** for email accounts
3. **Limit SMTP user permissions** - Use `noreply@` account with send-only
4. **Enable rate limiting** in production (consider adding express-rate-limit)
5. **Validate input** - Backend validates required fields; frontend should too

---

## Support

For Hostinger-specific issues:
- [Hostinger Email Documentation](https://support.hostinger.com/en/collections/1612514-email)
- [Hostinger SMTP Settings](https://support.hostinger.com/en/articles/1583286-email-client-setup)

For deployment help:
- See `DEPLOYMENT_GUIDE.md` in project root
