# 🚀 Quick Start: Hostinger Email to Render Backend

## ⚡ 3-Step Setup

### Step 1️⃣: Get Hostinger Email Settings (2 minutes)

1. Login to **Hostinger hPanel**: https://hpanel.hostinger.com
2. Go to **Emails** → **Email Accounts**
3. Find your email (e.g., `info@blaupunkt-ev.com`)
4. Click **"Configure Email Client"** or **Settings icon**
5. Note these values:
   ```
   Host: smtp.hostinger.com
   Port: 465
   Username: info@blaupunkt-ev.com
   Password: [your email password]
   ```

---

### Step 2️⃣: Test SMTP Locally (3 minutes)

```powershell
# 1. Edit backend/.env file
# Add your Hostinger credentials:
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-actual-password
DESTINATION_EMAIL=info@blaupunkt-ev.com

# 2. Run test script
.\scripts\test-hostinger-smtp.ps1

# If successful, you'll see: ✅ SUCCESS!
# If failed, try these alternatives in backend/.env:
#   SMTP_HOST=mail.blaupunkt-ev.com
#   SMTP_PORT=587
```

---

### Step 3️⃣: Deploy to Render (5 minutes)

#### A. Create Render Service
1. Go to https://render.com → **New** → **Web Service**
2. Connect GitHub → Select **Blaupunkt** repository
3. Configure:
   - **Name**: `blaupunkt-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node mailserver.js`
   - **Plan**: Free

#### B. Add Environment Variables
Click **Environment** tab and add:

```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-actual-email-password
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

⚠️ **IMPORTANT**: Use the EXACT same values that worked in Step 2!

#### C. Deploy
1. Click **"Create Web Service"**
2. Wait 2-3 minutes for deployment
3. Copy your backend URL: `https://blaupunkt-backend.onrender.com`

---

### Step 4️⃣: Update & Deploy Frontend (5 minutes)

```powershell
# 1. Edit .env.production
VITE_API_URL=https://blaupunkt-backend.onrender.com

# 2. Build for production
npm run build

# 3. Upload to Hostinger
# - Login to Hostinger hPanel
# - Go to Files → File Manager
# - Navigate to public_html
# - Upload all files from 'dist' folder
# - Make sure index.html is in root
```

---

## ✅ Testing Checklist

| Test | URL | Expected Result |
|------|-----|----------------|
| Backend Health | `https://blaupunkt-backend.onrender.com/api/health` | `{"status": "ok"}` |
| Environment Check | `https://blaupunkt-backend.onrender.com/api/debug-env` | All show ✅ |
| Contact Form | `https://blaupunkt-ev.com/contact` | Email received in inbox |

---

## 🔧 Common Issues & Fixes

### Issue: "500 Internal Server Error"

**Fix 1**: Check Render Logs
```
Render Dashboard → Your Service → Logs tab
Look for "SMTP" or "Authentication" errors
```

**Fix 2**: Try Alternative SMTP Settings (in Render Environment)
```bash
# Option A: Using domain mail server
SMTP_HOST=mail.blaupunkt-ev.com
SMTP_PORT=465

# Option B: Using TLS instead of SSL
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
```

**Fix 3**: Verify Environment Variables
- Visit: `https://blaupunkt-backend.onrender.com/api/debug-env`
- All should show ✅
- If any show ❌, add them in Render → Environment

---

### Issue: "Authentication Failed"

**Possible Causes:**
- ❌ Wrong password (copy-paste to avoid typos)
- ❌ Username not full email address
- ❌ 2FA enabled on email account
- ❌ Email account doesn't exist

**Fix:**
1. **Reset email password** in Hostinger hPanel
2. **Test credentials** in an email client (Outlook/Thunderbird)
3. **Update password** in Render environment variables
4. **Redeploy** backend (Render → Manual Deploy)

---

### Issue: "CORS Error"

**Fix:** Ensure `VITE_DOMAIN` is set in Render
```bash
VITE_DOMAIN=https://blaupunkt-ev.com
```

---

### Issue: Backend is slow/times out

**Cause:** Render Free tier spins down after 15 minutes

**Solutions:**
1. First request after sleep takes 30-60 seconds (normal)
2. Set up keep-alive ping (see `docs/setup/KEEP_ALIVE_GUIDE.md`)
3. Upgrade to Render paid plan for instant responses

---

## 📞 Support

If still having issues:

1. **Check detailed guide**: `HOSTINGER_EMAIL_SETUP.md`
2. **View Render logs**: Dashboard → Logs
3. **Test SMTP locally first**: `.\scripts\test-hostinger-smtp.ps1`
4. **Contact Hostinger support** for email issues
5. **Check troubleshooting docs**: `docs/TROUBLESHOOTING_500_ERROR.md`

---

## 📝 Summary

```
✅ Get Hostinger SMTP credentials
✅ Test locally with test-hostinger-smtp.ps1
✅ Deploy backend to Render with environment variables
✅ Build frontend with VITE_API_URL pointing to Render
✅ Upload frontend to Hostinger
✅ Test contact form → Email arrives ✉️
```

**Total Time**: ~15-20 minutes

---

🎉 **That's it!** Your contact form now sends emails from Hostinger email via Render backend!
