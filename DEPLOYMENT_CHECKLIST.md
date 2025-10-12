# 🚀 Complete Deployment Checklist for Blaupunkt

## ✅ What's Already Done

- [x] Backend configured for `info@blaupunkt-ev.com`
- [x] Frontend API configuration created
- [x] ContactUs component updated to use environment variables
- [x] Deployment files created (render.yaml, package.json)
- [x] Documentation complete

---

## 📋 Your Deployment Steps

### Step 1: Get Hostinger Email Password (5 minutes)

1. Login to **Hostinger hPanel**: https://hpanel.hostinger.com
2. Navigate to **Emails** → **Email Accounts**
3. Find or create **info@blaupunkt-ev.com**
4. Click **⋮** (three dots) → **Configure Email Client**
5. **Copy the password** (you'll need it in Step 3)
6. **Note the SMTP host**: Usually `smtp.hostinger.com` or `mail.blaupunkt-ev.com`

---

### Step 2: Test Locally (Optional but Recommended - 5 minutes)

```powershell
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Edit .env file and add your real password
# Open backend/.env in VS Code
# Replace 'your-email-password-here' with actual password

# Test SMTP connection
npm test
```

**Expected output:**
```
✅ Env SMTP (smtp.hostinger.com:465) - WORKS!
```

If you see ✅, proceed to Step 3. If you see ❌:
- Double-check the password
- Try changing `SMTP_HOST` to `mail.blaupunkt-ev.com`
- Try changing `SMTP_PORT` to `587`

---

### Step 3: Push Code to GitHub (2 minutes)

```powershell
# From project root
git status
git add .
git commit -m "Configure backend for deployment with info@blaupunkt-ev.com"
git push origin master
```

---

### Step 4: Deploy Backend to Render (10 minutes)

#### 4A. Create Render Account
1. Go to https://render.com
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Render to access your repositories

#### 4B. Deploy via Blueprint
1. Click **New** → **Blueprint**
2. Search for **Blaupunkt** repository
3. Click **Connect**
4. Render will detect `render.yaml` automatically
5. Click **Apply**

#### 4C. Add Environment Variables
1. Click on **blaupunkt-backend** service
2. Go to **Environment** tab
3. Add these variables (click **Add Environment Variable** for each):

   | Key | Value |
   |-----|-------|
   | `SMTP_HOST` | `smtp.hostinger.com` (or `mail.blaupunkt-ev.com`) |
   | `SMTP_PORT` | `465` |
   | `SMTP_USER` | `info@blaupunkt-ev.com` |
   | `SMTP_PASS` | `[paste password from Step 1]` |
   | `DESTINATION_EMAIL` | `info@blaupunkt-ev.com` |
   | `VITE_DOMAIN` | `https://blaupunkt-ev.com` |
   | `NODE_ENV` | `production` |

4. Click **Save Changes**

#### 4D. Wait for Deployment
- Watch the logs (automatically shown)
- Wait 2-3 minutes for deployment to complete
- Look for: `✅ Live` status
- **Copy your backend URL**: e.g., `https://blaupunkt-backend.onrender.com`

---

### Step 5: Test Deployed Backend (2 minutes)

```powershell
# Replace with YOUR actual Render URL
$BACKEND_URL = "https://blaupunkt-backend.onrender.com"

# Test the contact endpoint
curl -X POST "$BACKEND_URL/api/contact" `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test Deployment",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Testing from deployment"
  }'
```

**Expected response:**
```json
{"success": true, "message": "Message sent successfully."}
```

**Check your email:**
- Open `info@blaupunkt-ev.com` inbox
- You should see the test email!

---

### Step 6: Update Frontend for Production (3 minutes)

#### 6A. Create Production Environment File
Create `.env.production` in project root:

```env
# Production Backend URL (replace with YOUR Render URL)
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

**Important:** Replace `blaupunkt-backend.onrender.com` with your **actual Render URL** from Step 4D!

#### 6B. Update .gitignore
Make sure `.env.production` is safe to commit (it only contains public URLs, no secrets):

```powershell
# Check if .env.production is in .gitignore
cat .gitignore | Select-String ".env.production"

# If it shows up, remove that line from .gitignore
# We want to commit .env.production (it's safe - only has public URL)
```

---

### Step 7: Build & Deploy Frontend to Hostinger (10 minutes)

#### 7A. Build Production Frontend
```powershell
# Build with production environment
npm run build
```

This creates a `dist/` folder with your production build.

#### 7B. Upload to Hostinger

**Method 1: File Manager (Recommended)**
1. Login to Hostinger hPanel
2. Go to **Files** → **File Manager**
3. Navigate to `public_html/` (or your domain's root folder)
4. **Delete old files** (if any) or create a backup
5. **Upload the entire `dist/` folder contents** (not the folder itself!)
   - Select all files inside `dist/`
   - Upload them to `public_html/`
6. Ensure `index.html` is in the root of `public_html/`

**Method 2: FTP (Alternative)**
1. Open FileZilla or your FTP client
2. Get FTP credentials from Hostinger hPanel → **Files** → **FTP Accounts**
3. Connect to Hostinger
4. Upload contents of `dist/` to `public_html/`

#### 7C. Configure Hostinger for SPA Routing
1. In Hostinger File Manager, create/edit `.htaccess` in `public_html/`
2. Add this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. Save the file

---

### Step 8: Final Testing (5 minutes)

#### 8A. Test Live Website
1. Visit **https://blaupunkt-ev.com**
2. Navigate to **Contact** page
3. Fill out the contact form with real data
4. Click **Submit**

#### 8B. Verify Email Delivery
1. Wait 10-30 seconds
2. Check **info@blaupunkt-ev.com** inbox
3. You should see the contact form submission!

#### 8C. Test from Different Browsers
- Test in Chrome, Firefox, Safari
- Test on mobile device
- Verify form works and emails arrive

---

## 🎉 Success Checklist

After completing all steps, verify:

- [ ] Backend deployed on Render and shows "Live" status
- [ ] Backend URL accessible (e.g., `https://blaupunkt-backend.onrender.com/api/contact`)
- [ ] Test email sent to `info@blaupunkt-ev.com` successfully
- [ ] Frontend built with production environment
- [ ] Frontend deployed to Hostinger `public_html/`
- [ ] Live website loads at `https://blaupunkt-ev.com`
- [ ] Contact form submits successfully
- [ ] Contact emails arrive at `info@blaupunkt-ev.com`
- [ ] No console errors in browser DevTools

---

## 🆘 Troubleshooting Guide

### Backend Issues

**Build fails on Render:**
```
Error: Cannot find module 'express'
```
**Fix:** Check that `backend/package.json` exists and has all dependencies

**SMTP Authentication Error:**
```
Error: Invalid login: 535 Authentication failed
```
**Fix:** 
- Verify password in Render environment variables
- Try alternate SMTP host: `mail.blaupunkt-ev.com`
- Try port 587 instead of 465

**Backend doesn't start:**
- Check Render logs for errors
- Verify all environment variables are set
- Ensure `NODE_ENV=production`

### Frontend Issues

**Contact form shows CORS error:**
```
Access to fetch at '...' has been blocked by CORS policy
```
**Fix:** 
- Verify `VITE_DOMAIN` is set in backend env vars
- Check it matches your frontend domain exactly

**Contact form doesn't submit:**
- Open browser DevTools → Console
- Check for errors
- Verify `VITE_API_URL` in `.env.production` is correct
- Rebuild frontend: `npm run build`

**404 errors on page refresh:**
- Verify `.htaccess` is in `public_html/`
- Check `.htaccess` content matches Step 7C

### Email Issues

**Emails go to spam:**
- Check Hostinger DNS settings for SPF record
- Add SPF record: `v=spf1 include:spf.hostinger.com ~all`
- Consider using DKIM in Hostinger email settings

**Emails not arriving:**
- Check spam folder
- Verify `DESTINATION_EMAIL=info@blaupunkt-ev.com` in backend
- Check Render logs for sending errors
- Test SMTP locally with `npm test`

---

## 📱 Quick Commands Reference

```powershell
# Test backend locally
cd backend
npm install
npm test
npm start

# Build frontend
npm run build

# Push to GitHub
git add .
git commit -m "Deploy updates"
git push

# Test deployed backend
curl -X POST https://YOUR-RENDER-URL/api/contact `
  -H "Content-Type: application/json" `
  -d '{"fullName":"Test","email":"test@test.com","message":"Hi"}'
```

---

## 📞 Support Resources

- **Hostinger Support:** https://support.hostinger.com
- **Render Docs:** https://render.com/docs
- **SMTP Settings:** https://support.hostinger.com/en/articles/1583286
- **Backend README:** `backend/README.md`
- **Full Deployment Guide:** `DEPLOY_BACKEND.md`

---

## 🎯 Next Steps After Deployment

1. **Monitor emails:** Check `info@blaupunkt-ev.com` regularly
2. **Set up email forwarding:** In Hostinger, forward to your personal email
3. **Enable notifications:** Set up email alerts on your phone
4. **Test monthly:** Send test contact forms to ensure it's still working
5. **Monitor Render:** Free tier sleeps after 15 min inactivity (first request may be slow)

**Render Free Tier Note:** The backend will "sleep" after 15 minutes of inactivity. The first request after sleep takes ~30 seconds to wake up. This is normal for free tier.

To avoid this:
- Upgrade to paid tier ($7/month) for always-on service
- Or use a service like UptimeRobot to ping your backend every 10 minutes

---

**You're all set! 🎉** Follow these steps and your contact form will be live and sending emails to info@blaupunkt-ev.com!
