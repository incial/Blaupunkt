# 🔧 Fix SMTP Authentication Error (535 5.7.8)

## Problem
```
Error: Invalid login: 535 5.7.8 Error: authentication failed: (reason unavailable)
```

This means your SMTP password is **incorrect** or the email account has restrictions.

## ✅ Solution (Step-by-Step)

### Step 1: Reset Your Hostinger Email Password

1. **Login to Hostinger:**
   - Go to: https://hpanel.hostinger.com/
   - Login with your Hostinger account

2. **Navigate to Email Accounts:**
   - Click on **"Email"** in the left sidebar
   - Click **"Email Accounts"**

3. **Find Your Email Account:**
   - Look for `info@blaupunkt-ev.com`
   - Click the **"Manage"** button or **⋮** menu next to it

4. **Change Password:**
   - Click **"Change Password"** or **"Reset Password"**
   - Enter a NEW strong password
   - **IMPORTANT:** Write it down or save it!
   - Example: `Blaupunkt@EV2025!`

5. **Save the New Password:**
   - Click **"Change Password"** or **"Save"**
   - Wait for confirmation

### Step 2: Update Your Local .env File

1. **Open the backend .env file:**
   ```
   D:\DEV\Incial\Blaupunkt\backend\.env
   ```

2. **Update the SMTP_PASS line:**
   ```env
   SMTP_PASS=YourNewPasswordHere
   ```
   Replace `YourNewPasswordHere` with the exact password from Step 1

3. **Save the file**

### Step 3: Restart Your Backend Server

**Stop the current backend:**
- In VS Code terminal where backend is running, press `Ctrl+C`

**Restart it:**
```powershell
cd backend
node mailserver.js
```

Or use the script:
```powershell
.\scripts\start-backend.bat
```

### Step 4: Test the Contact Form Again

1. Open your frontend in browser: http://localhost:5173
2. Go to Contact page
3. Fill in the form and submit
4. Should now see: **"Message sent successfully!"** ✅

---

## 🔍 Alternative: Verify Current Password

If you want to test your current password without resetting:

### Test Login to Webmail

1. Go to: https://webmail.hostinger.com/
2. Enter:
   - **Email:** `info@blaupunkt-ev.com`
   - **Password:** `Blaupunkt@ev123` (or your current password)
3. Try to login

**If login fails** → Password is wrong, follow Step 1 above
**If login succeeds** → Password might need other settings (see below)

---

## 🛠️ Advanced: Enable SMTP Access

Some Hostinger accounts require explicit SMTP access:

1. Login to Hostinger hPanel
2. Go to **Email** → **Email Accounts**
3. Click on `info@blaupunkt-ev.com` → **Manage**
4. Look for **"Email Client Configuration"** or **"SMTP Settings"**
5. Ensure **"Allow SMTP access"** is enabled
6. Verify settings:
   - **Outgoing Server:** smtp.hostinger.com
   - **Port:** 465 (SSL) or 587 (TLS)
   - **Requires Authentication:** Yes
   - **Use same credentials as incoming**

---

## 🔄 If Still Not Working

### Try Port 587 Instead of 465

Some servers prefer TLS (port 587) over SSL (port 465):

**Update backend/.env:**
```env
SMTP_PORT=587
```

**Restart backend** and test again.

### Check Hostinger Firewall/Security

1. Hostinger hPanel → Email → Security
2. Check if there are any:
   - **IP restrictions** (disable if found)
   - **"Suspicious activity" blocks**
   - **Rate limits exceeded**

### Contact Hostinger Support

If nothing works:
1. Go to Hostinger support chat
2. Say: "I can't authenticate to SMTP with info@blaupunkt-ev.com. Getting error 535 5.7.8. Please verify the account is configured correctly for SMTP access."

---

## ✅ Quick Test Script

After making changes, test the email with this PowerShell script:

```powershell
# Test Backend Contact Form
$body = @{
    fullName = "Test User"
    email = "test@example.com"
    phone = "+1234567890"
    message = "Testing SMTP after password reset"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/contact" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

**Expected output:**
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

---

## 📋 Checklist

- [ ] Reset password in Hostinger hPanel
- [ ] Updated SMTP_PASS in backend/.env
- [ ] Restarted backend server
- [ ] Tested webmail login (https://webmail.hostinger.com/)
- [ ] Verified SMTP settings in Hostinger
- [ ] Tested contact form - SUCCESS! ✅

---

## 🎯 Most Common Issue

**99% of the time**, this error means:
1. Wrong password in `.env` file
2. Password was changed in Hostinger but not updated in code

**Fix:** Reset password, update .env, restart backend = Fixed! ✅
