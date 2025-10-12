# 🚨 IMMEDIATE ACTION REQUIRED

## Your Backend is Running BUT Cannot Send Emails

**Problem:** Environment variables are NOT set in Render (0 loaded).

---

## ⚡ QUICK FIX (5 Minutes)

### 1. Open Render Dashboard
**URL:** https://dashboard.render.com

### 2. Select Your Service
Click: **blaupunkt-backend**

### 3. Go to Environment Tab
Click: **Environment** (left sidebar)

### 4. Add These 7 Variables

Click **Add Environment Variable** button for each:

```
SMTP_HOST          = smtp.hostinger.com
SMTP_PORT          = 465
SMTP_USER          = info@blaupunkt-ev.com
SMTP_PASS          = Blaupunkt@ev123
DESTINATION_EMAIL  = info@blaupunkt-ev.com
NODE_ENV           = production
VITE_DOMAIN        = https://blaupunkt-ev.com
```

### 5. Save Changes
Click **Save Changes** button at bottom

### 6. Wait for Auto-Redeploy
⏱️ Takes 2-3 minutes

---

## ✅ Verify It Worked

### Test 1: Check Debug Endpoint
Open this URL in browser:
```
https://blaupunkt-backend.onrender.com/api/debug-env
```

**You should see:**
```json
{
  "status": {
    "SMTP_HOST": "✅ Set",
    "SMTP_PORT": "✅ Set",
    "SMTP_USER": "✅ Set",
    ...all showing ✅
  }
}
```

### Test 2: Check Render Logs
Go to: **Logs** tab in Render

**You should see:**
```
✅ SMTP transporter verified successfully.
```

**NOT:**
```
⚠️ SMTP transporter verification failed
```

### Test 3: Try Contact Form
Go to: https://blaupunkt-ev.com/contact

Submit a test message → Should succeed!

---

## 🔥 If Still Failing After Adding Variables

**Most likely:** Hostinger is blocking Render's IP addresses.

**Solution:** Contact Hostinger support with this:

---

**To: Hostinger Support**

Subject: Please Allowlist These IPs for SMTP Access

Hi,

I need to send emails from my backend (hosted on Render.com) using info@blaupunkt-ev.com.

Please allowlist these IP addresses for SMTP access:
- 100.20.92.101
- 44.225.181.72
- 44.227.217.144  
- 74.220.48.0/24
- 74.220.56.0/24

Currently getting connection timeouts to smtp.hostinger.com:465 from these IPs.

Thanks!

---

## 📚 Full Troubleshooting Guide

See: `RENDER_TROUBLESHOOTING.md`

---

## 🆘 Current Status

- ✅ Backend deployed and running
- ✅ Health endpoint working (`/api/health`)
- ✅ GitHub Action keeping it alive
- ⚠️ **Environment variables NOT set** (0 loaded)
- ❌ SMTP connection failing (timeout)
- ❌ Contact form returns 500 error

**Next Step:** Add environment variables in Render Dashboard NOW! ⚡
