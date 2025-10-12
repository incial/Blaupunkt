# 🔧 Render Backend Troubleshooting

## Current Issue: SMTP Connection Timeout

### What the Logs Show:
```
[dotenv@17.2.3] injecting env (0) from .env
⚠️ SMTP transporter verification failed.
Error: Connection timeout
```

**Problem:** `(0)` means **ZERO environment variables** are loaded!

---

## ✅ IMMEDIATE FIX - Add Environment Variables in Render

### Step 1: Go to Render Dashboard

1. Open: https://dashboard.render.com
2. Click on your service: **blaupunkt-backend**
3. Click **Environment** tab (left sidebar)

### Step 2: Add These 7 Environment Variables

Click **Add Environment Variable** for each:

| Key | Value |
|-----|-------|
| `SMTP_HOST` | `smtp.hostinger.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@blaupunkt-ev.com` |
| `SMTP_PASS` | `Blaupunkt@ev123` |
| `DESTINATION_EMAIL` | `info@blaupunkt-ev.com` |
| `NODE_ENV` | `production` |
| `VITE_DOMAIN` | `https://blaupunkt-ev.com` |

**Important:** 
- Copy values EXACTLY as shown (no extra spaces)
- Port must be `465` (not 587)
- After adding all variables, click **Save Changes**

### Step 3: Wait for Auto-Redeploy

Render will automatically redeploy your service when you save environment variables.

**Wait 2-3 minutes** for the new deployment to complete.

---

## 🧪 Verify Environment Variables Are Loaded

### Test 1: Check Debug Endpoint

Open this URL in your browser:
```
https://blaupunkt-backend.onrender.com/api/debug-env
```

**Expected Response:**
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
    "VITE_DOMAIN": "✅ Set",
    "totalEnvVars": 50
  }
}
```

**If you see ❌ Missing:** Environment variables are not set correctly in Render.

### Test 2: Check Render Logs

1. Go to Render Dashboard → **Logs** tab
2. Look for this line after redeployment:
   ```
   ✅ SMTP transporter verified successfully.
   ```

**If you still see timeout:** SMTP connection is blocked.

---

## 🚨 If SMTP Still Times Out After Adding Variables

### Possible Cause: Hostinger Blocking Render IPs

Hostinger may be blocking connections from Render's IP addresses.

**Render's Outbound IPs:**
- 100.20.92.101
- 44.225.181.72
- 44.227.217.144
- 74.220.48.0/24
- 74.220.56.0/24

### Fix Options:

#### Option 1: Contact Hostinger Support (Recommended)

Send this message to Hostinger support:

---

**Subject:** Allow SMTP Access from Render Backend IPs

Hi Hostinger Support,

I need to send emails from my backend server (hosted on Render.com) using my Hostinger SMTP account: **info@blaupunkt-ev.com**

Please allowlist these IP addresses/ranges to access SMTP:
- 100.20.92.101
- 44.225.181.72
- 44.227.217.144
- 74.220.48.0/24
- 74.220.56.0/24

I'm getting connection timeouts when trying to connect to smtp.hostinger.com:465 from these IPs.

Thank you!

---

#### Option 2: Check Hostinger Email Security Settings

1. Go to Hostinger hPanel
2. Navigate to **Emails** → **Email Accounts**
3. Click on `info@blaupunkt-ev.com`
4. Look for **Security** or **IP Allowlist** settings
5. Add Render's IP addresses if there's an option

#### Option 3: Try Alternative SMTP Port

If Hostinger blocks port 465, try port 587 (TLS):

1. In Render Dashboard → Environment
2. Change `SMTP_PORT` from `465` to `587`
3. Save and wait for redeploy

---

## 🧪 Test Contact Form After Fix

### Step 1: Wait for Successful SMTP Verification

Check Render logs until you see:
```
✅ SMTP transporter verified successfully.
🚀 Server running at http://localhost:10000
```

### Step 2: Test from Your Website

1. Go to: https://blaupunkt-ev.com/contact
2. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: 1234567890
   - Message: Testing SMTP connection
3. Click **Submit**

### Step 3: Check Results

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Failed to send message."
}
```

**If you get 500:** Check Render logs for the exact SMTP error.

---

## 📊 Monitoring & Debugging

### Check Backend Logs

**URL:** https://dashboard.render.com → blaupunkt-backend → **Logs**

**What to look for:**

✅ **Successful SMTP:**
```
✅ SMTP transporter verified successfully.
```

❌ **Connection Timeout:**
```
Error: Connection timeout
```
→ Hostinger is blocking Render IPs

❌ **Authentication Failed:**
```
Error: Invalid login: 535 Authentication failed
```
→ Wrong SMTP credentials in environment variables

❌ **Connection Refused:**
```
Error: connect ECONNREFUSED
```
→ Wrong SMTP host or port

### Test SMTP Directly (PowerShell)

```powershell
curl https://blaupunkt-backend.onrender.com/api/debug-env
```

Should show all environment variables as `✅ Set`.

---

## 🎯 Quick Checklist

- [ ] Added all 7 environment variables in Render Dashboard
- [ ] Saved changes and waited for auto-redeploy (2-3 min)
- [ ] Checked `/api/debug-env` - all show ✅
- [ ] Checked Render logs - see "SMTP verified successfully"
- [ ] Tested contact form - got success message
- [ ] Received email at info@blaupunkt-ev.com
- [ ] (If blocked) Contacted Hostinger to allowlist Render IPs

---

## 🚀 Once Working

After everything works:

1. **Remove debug endpoint** for security:
   - Delete the `/api/debug-env` route from `mailserver.js`
   - Redeploy

2. **Monitor GitHub Actions:**
   - Check: https://github.com/AbinVarghexe/Blaupunkt/actions
   - Should run every 12 minutes

3. **Test regularly:**
   - Submit a contact form weekly
   - Check emails are arriving

---

## 📞 Need More Help?

If issues persist after:
1. ✅ Adding all environment variables
2. ✅ Contacting Hostinger about IPs
3. ✅ Waiting for successful redeploy

**Share these with me:**
- Screenshot of Render environment variables (hide password)
- Copy of Render logs (last 50 lines)
- Screenshot of contact form error
- Response from Hostinger support

I'll help debug further! 🔧
