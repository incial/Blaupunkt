# 🚨 500 Error Diagnosis Complete

## Diagnostic Results

### ✅ What's Working:
- Backend is deployed and running
- Health endpoint responds correctly
- All environment variables are SET in Render

### ❌ What's Failing:
- Contact endpoint returns **500 Internal Server Error**
- Email sending is failing

## 🔍 Root Cause

The backend receives your form data but **cannot send the email** via SMTP. This is almost always due to:

1. **Wrong SMTP password** (most common)
2. **Hostinger email account restrictions**
3. **SMTP authentication failing**

## ✅ Solution Steps

### Step 1: Verify Hostinger Email Password

The password in Render **must exactly match** your Hostinger email password.

**To verify/reset:**
1. Go to [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Click **Email** → **Email Accounts**
3. Find `info@blaupunkt-ev.com`
4. Click **Manage** or the **⋮** menu
5. Click **Change Password**
6. Set a new, strong password (remember it!)

**Example password requirements:**
- At least 8 characters
- Mix of letters, numbers, and symbols
- Example: `Blaupunkt@2025!`

### Step 2: Update SMTP Password in Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click on **blaupunkt-backend** service
3. Go to **Environment** tab
4. Find `SMTP_PASS`
5. Click **Edit**
6. Enter the EXACT password from Step 1
7. Click **Save**

**Important:** Service will redeploy automatically (wait 2-3 minutes)

### Step 3: Verify SMTP Settings in Hostinger

1. In Hostinger hPanel → **Email** → **Email Accounts**
2. Click on `info@blaupunkt-ev.com` → **Configuration**
3. Verify these match your Render settings:

**Outgoing (SMTP) Server:**
```
Server: smtp.hostinger.com
Port: 465 (SSL) or 587 (TLS/STARTTLS)
Requires SSL: Yes
Username: info@blaupunkt-ev.com
Password: [Your email password]
```

**Update Render if different:**
- `SMTP_HOST=smtp.hostinger.com`
- `SMTP_PORT=465`
- `SMTP_USER=info@blaupunkt-ev.com`
- `SMTP_PASS=[Your exact password]`

### Step 4: Check Email Account Status

**Verify account is active:**
1. Hostinger hPanel → Email → Email Accounts
2. Ensure `info@blaupunkt-ev.com` shows as **Active**
3. Check quota/limits:
   - Not over storage limit
   - Can send emails
   - No restrictions

**Try sending a test email:**
1. Login to webmail: `https://webmail.hostinger.com`
2. Use: `info@blaupunkt-ev.com` / [your password]
3. Send a test email to yourself
4. If this fails → Email account has issues

### Step 5: Test Again

After updating the password:

**Wait 2-3 minutes for Render to redeploy**, then:

```powershell
.\scripts\test-backend.ps1
```

Or test manually:
```powershell
$body = @{
    fullName = "Test User"
    email = "test@example.com"
    phone = "+1234567890"
    message = "Test after password update"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/contact" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

Expected: `success: True, message: Message sent successfully.`

## 🔍 Alternative: Check Render Logs

To see the exact error:

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **blaupunkt-backend**
3. Click **Logs** tab
4. Submit the contact form again
5. Look for errors like:
   - `Invalid credentials` → Wrong password
   - `Authentication failed` → Wrong username/password
   - `Connection refused` → Wrong SMTP server/port
   - `TLS/SSL` errors → Port issue (try 587 instead of 465)

## 📋 Quick Checklist

- [ ] Verified Hostinger email password
- [ ] Updated SMTP_PASS in Render to match exactly
- [ ] Waited 2-3 minutes for Render redeploy
- [ ] Verified SMTP settings match (smtp.hostinger.com:465)
- [ ] Email account is active in Hostinger
- [ ] Can login to webmail successfully
- [ ] Tested backend with diagnostic script
- [ ] Contact endpoint now works

## 🎯 Most Common Fixes

| Issue | Fix |
|-------|-----|
| Wrong password | Reset in Hostinger, update in Render |
| Password has special chars | Ensure exact match (no extra spaces) |
| Port mismatch | Use 465 (SSL) or 587 (TLS) |
| Account inactive | Activate in Hostinger hPanel |
| Quota exceeded | Check storage limits in Hostinger |

## 🆘 Still Not Working?

1. **Try Port 587 instead of 465:**
   - Update `SMTP_PORT=587` in Render
   - Some servers prefer TLS over SSL

2. **Enable less secure apps** (if Hostinger requires):
   - Check Hostinger email security settings
   - Enable SMTP access if restricted

3. **Create a new email account:**
   - Create `contact@blaupunkt-ev.com` in Hostinger
   - Use it for SMTP instead
   - Update all Render env vars

4. **Check Render Logs for exact error message**
   - This will tell you exactly what's failing

## 📧 Test Email Sending Manually

Before testing from the website, verify SMTP works from command line:

```powershell
# This requires a mail testing tool
# Or login to webmail.hostinger.com and send a test email
```

If you can't send from webmail → Email account has issues, contact Hostinger support.

## 🚀 After Fix

Once the contact form works:
1. Upload new frontend dist/ to Hostinger (already built)
2. Test from `https://blaupunkt-ev.com/contact`
3. Verify email arrives at `info@blaupunkt-ev.com`

**Success!** ✅
