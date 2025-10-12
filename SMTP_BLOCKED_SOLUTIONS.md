# 🚨 SMTP BLOCKED - Quick Solutions

## Current Issue

**CONFIRMED:** Hostinger SMTP is blocking connections (ETIMEDOUT error)

Your backend can't connect to `smtp.hostinger.com:465` from:
- ❌ Your local machine
- ❌ Render servers

This is an **IP-based firewall restriction** on Hostinger's side.

---

## ⚡ SOLUTION 1: Use Gmail SMTP (WORKS NOW - 5 min)

Gmail SMTP is more permissive and will work immediately.

### Setup Steps:

#### 1. Enable 2-Step Verification on Gmail

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Complete the setup

#### 2. Create App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Enter: **Blaupunkt Backend**
5. Click **Generate**
6. **Copy the 16-character password** (looks like: `xxxx xxxx xxxx xxxx`)

#### 3. Update Render Environment Variables

Go to Render Dashboard → Environment → Update these:

```
SMTP_HOST          = smtp.gmail.com
SMTP_PORT          = 587
SMTP_USER          = your-gmail@gmail.com
SMTP_PASS          = [16-character app password]
DESTINATION_EMAIL  = info@blaupunkt-ev.com
```

Keep other variables (NODE_ENV, VITE_DOMAIN) as is.

**Note:** Use port **587** for Gmail (not 465)

#### 4. Update Email From Address

Emails will be sent FROM your Gmail, but will have:
- **From:** your-gmail@gmail.com
- **Reply-To:** info@blaupunkt-ev.com (customer email)
- **To:** info@blaupunkt-ev.com

This way customers can still reply to the right address.

#### 5. Save & Test

1. Save changes in Render
2. Wait 2-3 minutes for redeploy
3. Test contact form

**✅ This will work immediately!**

---

## 🏢 SOLUTION 2: Fix Hostinger SMTP (Recommended for Production)

### Contact Hostinger Support

1. **Open ticket:** https://hpanel.hostinger.com → Support
2. **Copy email template:** See `HOSTINGER_SUPPORT_EMAIL.txt`
3. **Submit ticket**
4. **Wait:** Usually 12-24 hours response time

### IPs to Allowlist

Provide these to Hostinger:
```
100.20.92.101
44.225.181.72
44.227.217.144
74.220.48.0/24
74.220.56.0/24
```

---

## 📊 SOLUTION 3: Use SendGrid/Mailgun (Professional)

For production apps, consider dedicated email services:

### SendGrid (Free tier: 100 emails/day)

1. Sign up: https://signup.sendgrid.com/
2. Create API Key
3. Update Render env vars:
   ```
   SMTP_HOST = smtp.sendgrid.net
   SMTP_PORT = 587
   SMTP_USER = apikey
   SMTP_PASS = [your-sendgrid-api-key]
   ```

### Mailgun (Free tier: 5000 emails/month)

1. Sign up: https://signup.mailgun.com/
2. Verify domain
3. Get SMTP credentials
4. Update Render env vars

---

## 🎯 RECOMMENDED APPROACH

### For Immediate Fix (Today):
✅ **Use Gmail SMTP** (Solution 1)
- Works in 5 minutes
- No support ticket needed
- Reliable delivery

### For Long-Term (This Week):
✅ **Contact Hostinger** (Solution 2)
- Keep using info@blaupunkt-ev.com
- More professional
- Free with hosting

### For Scalability (Future):
✅ **Switch to SendGrid/Mailgun** (Solution 3)
- Better deliverability
- Analytics and tracking
- Higher sending limits

---

## 🧪 Test Current Configuration

Check what's configured:
```powershell
curl https://blaupunkt-backend.onrender.com/api/debug-env
```

Check if backend is alive:
```powershell
curl https://blaupunkt-backend.onrender.com/api/health
```

---

## 📝 Summary

**Current Status:**
- ✅ Backend deployed and running
- ✅ Environment variables set correctly
- ✅ All routes working
- ❌ **Hostinger SMTP blocked (ETIMEDOUT)**
- ❌ Contact form fails with 500 error

**Next Action:**
Choose one solution above and implement it.

**Fastest:** Gmail SMTP (5 minutes)
**Best:** Contact Hostinger support (wait 12-24 hours)
**Professional:** SendGrid/Mailgun (setup required)

---

## 🆘 Need Help?

Let me know which solution you want to implement and I'll guide you through it!
