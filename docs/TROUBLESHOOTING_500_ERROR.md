# Troubleshooting: 500 Server Error on Contact Form

## Problem
Contact form on `https://blaupunkt-ev.com` returns:
```
ERROR: Contact form submission error: Error: Server error: 500
```

## Root Cause Analysis

The 500 error means the backend is receiving the request but something is failing on the server side. Possible causes:

1. **Backend not deployed to Render**
2. **Missing environment variables in Render**
3. **SMTP configuration issues**
4. **CORS configuration issues**

## 🔍 Diagnostic Steps

### Step 1: Check if Backend is Deployed

**Test the health endpoint:**
```bash
curl https://blaupunkt-backend.onrender.com/api/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

**If it fails:**
- Backend is NOT deployed yet
- See **Solution 1** below

### Step 2: Check Backend Logs in Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click on **blaupunkt-backend** service
3. Go to **Logs** tab
4. Look for errors related to the `/api/contact` endpoint

**Common errors you might see:**
- `SMTP connection failed` → Environment variables missing
- `Cannot connect to SMTP server` → Wrong SMTP credentials
- `Invalid credentials` → Wrong email password
- `CORS error` → CORS not configured properly

### Step 3: Test Backend Directly

**Using curl:**
```bash
curl -X POST https://blaupunkt-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://blaupunkt-ev.com" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "Test message"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

**If you get a 500 error:**
- Check the response body for error details
- Check Render logs for stack trace

### Step 4: Check Environment Variables

In Render Dashboard → blaupunkt-backend → **Environment** tab:

**Required variables:**
```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=Blaupunkt@ev123
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

**All must be set!** Missing even one will cause errors.

## ✅ Solutions

### Solution 1: Deploy Backend to Render (If Not Deployed)

**Method 1: Using Blueprint (Easiest)**
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Blueprint"**
3. Connect repository: `AbinVarghexe/Blaupunkt`
4. Render detects `render.yaml`
5. Click **"Apply"**
6. Wait for deployment (5-10 minutes)

**Method 2: Manual Deployment**
1. **"New +"** → **"Web Service"**
2. Connect GitHub: `AbinVarghexe/Blaupunkt`
3. Configure:
   - **Name:** `blaupunkt-backend`
   - **Region:** Oregon
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node mailserver.js`
   - **Plan:** Free
4. Click **"Create Web Service"**
5. Go to **Environment** tab
6. Add all environment variables (see Step 4 above)
7. Service will auto-deploy

### Solution 2: Fix Missing Environment Variables

1. Go to Render Dashboard → blaupunkt-backend
2. Click **Environment** tab
3. Add/Update these variables:

```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=Blaupunkt@ev123
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

4. Click **"Save Changes"**
5. Service will automatically redeploy
6. Wait 2-3 minutes
7. Test again

### Solution 3: Fix SMTP Configuration

If logs show SMTP errors:

**Check Hostinger Email Settings:**
1. Login to [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Go to **Email** → **Email Accounts**
3. Find `info@blaupunkt-ev.com`
4. Click **Manage** → **Configuration**
5. Verify SMTP settings:
   - Server: `smtp.hostinger.com`
   - Port: `465` (SSL) or `587` (TLS)
   - Requires SSL: Yes
   - Username: `info@blaupunkt-ev.com`
   - Password: Your email password

**Update Backend Environment:**
- Ensure `SMTP_PASS` in Render matches Hostinger email password
- If password changed, update it in Render

### Solution 4: Fix CORS Issues

If logs show CORS errors:

**Verify backend CORS configuration:**
The backend should already allow `https://blaupunkt-ev.com`, but verify:

1. Check `backend/mailserver.js` has:
```javascript
const allowedOrigins = [
    'https://blaupunkt-ev.com',
    // ...
];
```

2. Check `VITE_DOMAIN` in Render environment:
```bash
VITE_DOMAIN=https://blaupunkt-ev.com
```

3. Redeploy if needed:
   - Render Dashboard → Manual Deploy → Deploy Latest Commit

### Solution 5: Check Network/Firewall

If backend is deployed but unreachable:

1. **Check Render Service Status:**
   - Dashboard should show "Live" (green)
   - Not "Deploying" or "Failed"

2. **Check URL:**
   - Should be `https://blaupunkt-backend.onrender.com`
   - NOT `http://` (must be HTTPS)

3. **Test from different network:**
   - Try from mobile data
   - Try from different WiFi

## 🧪 Testing After Fixes

### 1. Test Health Endpoint
```bash
curl https://blaupunkt-backend.onrender.com/api/health
```

Should return:
```json
{"status":"ok","timestamp":"...","message":"Backend is alive!"}
```

### 2. Test Contact Endpoint Directly
```bash
curl -X POST https://blaupunkt-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test",
    "email": "test@test.com",
    "phone": "1234567890",
    "message": "Test"
  }'
```

Should return:
```json
{"success":true,"message":"Email sent successfully!"}
```

### 3. Test from Website
1. Go to `https://blaupunkt-ev.com/contact`
2. Open browser console (F12)
3. Submit test form
4. Check console for detailed logs
5. Check `info@blaupunkt-ev.com` for email

## 📊 Debugging Frontend

Open browser console (F12) when submitting the form. You'll now see detailed logs:

```
[ContactUs] INFO: Submitting form to: https://blaupunkt-backend.onrender.com/api/contact
[ContactUs] INFO: Form data: {fullName: "Test", ...}
[ContactUs] INFO: Response status: 500
[ContactUs] ERROR: Server error details: {...}
```

This will help identify the exact issue.

## 🔍 Common Issues and Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Failed to fetch` | Backend not deployed | Deploy backend to Render |
| `500 Server Error` | Missing env vars | Add environment variables in Render |
| `SMTP connection failed` | Wrong SMTP credentials | Verify Hostinger email password |
| `Invalid credentials` | Wrong email password | Update SMTP_PASS in Render |
| `CORS error` | Domain not allowed | Set VITE_DOMAIN=https://blaupunkt-ev.com |
| `Network error` | Firewall/DNS issue | Check network, try different connection |

## 📋 Quick Checklist

Before testing again:

- [ ] Backend deployed to Render
- [ ] Service shows "Live" status
- [ ] Health endpoint responds (`/api/health`)
- [ ] All 8 environment variables set in Render
- [ ] SMTP credentials match Hostinger email
- [ ] VITE_DOMAIN = https://blaupunkt-ev.com
- [ ] Frontend rebuilt and uploaded to Hostinger
- [ ] HTTPS enabled on both frontend and backend

## 🆘 Still Having Issues?

1. **Share Render Logs:**
   - Copy the last 50 lines from Render logs
   - Look for errors during `/api/contact` requests

2. **Share Browser Console:**
   - F12 → Console tab
   - Copy all error messages

3. **Check Email:**
   - Login to Hostinger email
   - Verify `info@blaupunkt-ev.com` is active
   - Check quota/limits

## 📚 Next Steps

1. Deploy backend to Render (if not done)
2. Set all environment variables
3. Test health endpoint
4. Test contact endpoint with curl
5. Test from website
6. Verify email received

**Most likely issue:** Backend not deployed or environment variables missing in Render.
