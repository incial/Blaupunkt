# ⚠️ Render Environment Variables Setup

## Problem: SMTP Connection Timeout

If you see this error in Render logs:
```
Failed to verify SMTP transporter. Server will not start.
Error: Connection timeout
```

**Cause:** Environment variables are not set in Render dashboard.

---

## ✅ Solution: Add Environment Variables

### Step 1: Go to Render Dashboard

1. Go to https://dashboard.render.com
2. Click on your **blaupunkt-backend** service
3. Click **Environment** tab (left sidebar)

### Step 2: Add These Environment Variables

Click **Add Environment Variable** for each:

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_ENV` | `production` | Required |
| `SMTP_HOST` | `smtp.hostinger.com` | Or `mail.blaupunkt-ev.com` |
| `SMTP_PORT` | `465` | SSL port |
| `SMTP_USER` | `info@blaupunkt-ev.com` | Your email |
| `SMTP_PASS` | `Blaupunkt@ev123` | Your password |
| `DESTINATION_EMAIL` | `info@blaupunkt-ev.com` | Where emails go |
| `PORT` | `5000` | Optional (Render auto-assigns) |
| `VITE_DOMAIN` | `https://blaupunkt-ev.com` | Your frontend URL |

### Step 3: Save Changes

1. Click **Save Changes** button at the bottom
2. Render will automatically redeploy
3. Wait 2-3 minutes for deployment

### Step 4: Verify It Works

Check the logs - you should see:
```
✅ SMTP transporter verified successfully.
🚀 Server running at http://localhost:5000
```

---

## 🔧 Alternative: Try Port 587

If you still see timeout errors, try changing:

| Key | Value |
|-----|-------|
| `SMTP_PORT` | `587` |

Port 587 uses STARTTLS instead of SSL and may work better from Render's network.

---

## 🧪 Test After Setup

Once environment variables are set and server is running:

```powershell
# Replace with your actual Render URL
curl -X POST https://blaupunkt-backend.onrender.com/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test Render Deploy",
    "email": "test@test.com",
    "phone": "1234567890",
    "message": "Testing SMTP from Render"
  }'
```

**Expected response:**
```json
{"success": true, "message": "Message sent successfully."}
```

**Check your inbox** at `info@blaupunkt-ev.com`!

---

## 📋 Environment Variables Checklist

- [ ] `NODE_ENV` = `production`
- [ ] `SMTP_HOST` = `smtp.hostinger.com`
- [ ] `SMTP_PORT` = `465` (or `587`)
- [ ] `SMTP_USER` = `info@blaupunkt-ev.com`
- [ ] `SMTP_PASS` = `Blaupunkt@ev123`
- [ ] `DESTINATION_EMAIL` = `info@blaupunkt-ev.com`
- [ ] `VITE_DOMAIN` = `https://blaupunkt-ev.com`
- [ ] Saved changes
- [ ] Waited for redeploy (2-3 min)
- [ ] Checked logs for "✅ SMTP transporter verified"
- [ ] Tested with curl command
- [ ] Received test email

---

## 🆘 Still Getting Timeout?

### Option 1: Try Different SMTP Host
Change `SMTP_HOST` to: `mail.blaupunkt-ev.com`

### Option 2: Try Different Port
Change `SMTP_PORT` to: `587`

### Option 3: Check Hostinger Settings
1. Login to Hostinger hPanel
2. Go to Emails → Email Accounts
3. Click "Configure Email Client" for info@blaupunkt-ev.com
4. Verify the SMTP settings match what you entered

### Option 4: Contact Render Support
- Render may be blocking outbound SMTP connections
- Check their docs: https://render.com/docs/troubleshooting-deploys

---

## 📸 Screenshot Guide

### Where to Add Environment Variables in Render:

1. **Dashboard** → Your Service → **Environment** (sidebar)
2. Click **Add Environment Variable**
3. Enter Key and Value
4. Click **Save Changes**

Example:
```
Key: SMTP_HOST
Value: smtp.hostinger.com
```

Repeat for all 7 variables listed above.

---

## ✅ Success Indicators

Once properly configured, Render logs will show:

```
==> Running 'cd backend && npm start'
[dotenv@17.2.3] injecting env (7) from .env  ← Should show (7) not (0)
✅ SMTP transporter verified successfully.
🚀 Server running at http://localhost:5000
==> Your service is live 🎉
```

---

## 🔄 After Setup Complete

1. **Update GitHub Action URL** (`.github/workflows/keep-alive.yml`)
2. **Copy your Render URL** from dashboard
3. **Build frontend** with Render URL in `.env.production`
4. **Deploy to Hostinger**

See `QUICK_START_DEPLOY.md` for complete steps!
