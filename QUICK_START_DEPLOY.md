# 🚀 QUICK START - Deploy in 15 Minutes

## What You Need Right Now

1. **Hostinger email password** for `info@blaupunkt-ev.com`
2. **GitHub account** (to deploy backend)
3. **15 minutes** of time

---

## ⚡ Fast Track Deployment

### Step 1: Get Password (2 min)
1. Go to https://hpanel.hostinger.com
2. **Emails** → **Email Accounts** → `info@blaupunkt-ev.com`
3. **Configure Email Client** → Copy the **password**

### Step 2: Update Local Config (1 min)
```powershell
# Open backend/.env
code backend/.env

# Replace this line:
SMTP_PASS=your-email-password-here

# With your actual password:
SMTP_PASS=YOUR_REAL_PASSWORD_HERE

# Save file (Ctrl+S)
```

### Step 3: Test Locally (1 min)
```powershell
cd backend
npm test
```

Expected: `✅ Env SMTP (smtp.hostinger.com:465) - WORKS!`

If ❌ appears, try:
- Change `SMTP_HOST=mail.blaupunkt-ev.com` in backend/.env
- OR change `SMTP_PORT=587`
- Run `npm test` again

### Step 4: Push to GitHub (1 min)
```powershell
cd ..
git add .
git commit -m "Configure for info@blaupunkt-ev.com"
git push
```

### Step 5: Deploy to Render (5 min)
1. Go to https://render.com → **Sign Up with GitHub**
2. **New** → **Blueprint**
3. Select **Blaupunkt** repo → **Apply**
4. Click **blaupunkt-backend** → **Environment**
5. Add these 3 variables:
   - `SMTP_PASS` = `[your password from Step 1]`
   - `SMTP_HOST` = `smtp.hostinger.com` (or `mail.blaupunkt-ev.com`)
   - `VITE_DOMAIN` = `https://blaupunkt-ev.com`
6. **Save Changes**
7. Wait 2-3 minutes for deployment
8. **Copy your URL** (e.g., `https://blaupunkt-backend.onrender.com`)

### Step 6: Update Frontend (2 min)
```powershell
# Create .env.production file
echo "VITE_API_URL=https://YOUR-RENDER-URL-HERE" > .env.production

# Replace YOUR-RENDER-URL-HERE with your actual URL from Step 5!

# Build
npm run build
```

### Step 7: Upload to Hostinger (3 min)
1. Hostinger hPanel → **Files** → **File Manager**
2. Go to `public_html/`
3. **Upload** all files from `dist/` folder
4. Create `.htaccess` with this content:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Step 8: Test! (30 sec)
1. Visit https://blaupunkt-ev.com/contact
2. Fill form and submit
3. Check info@blaupunkt-ev.com inbox
4. 🎉 You should see the email!

---

## ⚠️ Common Issues & Quick Fixes

**"Authentication failed"**
→ Wrong password. Check Step 1 again.

**"CORS error" in browser**
→ Add `VITE_DOMAIN=https://blaupunkt-ev.com` to Render environment variables

**"Cannot read VITE_API_URL"**
→ Rebuild: `npm run build` and re-upload to Hostinger

**Emails not arriving**
→ Check spam folder, verify `DESTINATION_EMAIL=info@blaupunkt-ev.com` in Render

---

## 📋 Checklist

- [ ] Got Hostinger password for info@blaupunkt-ev.com
- [ ] Updated backend/.env with real password
- [ ] Tested locally (`npm test` shows ✅)
- [ ] Pushed to GitHub
- [ ] Deployed to Render (shows "Live")
- [ ] Added environment variables in Render
- [ ] Created .env.production with Render URL
- [ ] Built frontend (`npm run build`)
- [ ] Uploaded dist/ to Hostinger
- [ ] Created .htaccess
- [ ] Tested contact form - email received!

---

## 🆘 Need Help?

See full guides:
- **DEPLOYMENT_CHECKLIST.md** - Detailed step-by-step
- **DEPLOY_BACKEND.md** - Backend deployment details
- **backend/README.md** - Technical documentation

**Current Setup:**
- ✅ Backend configured for `info@blaupunkt-ev.com`
- ✅ Frontend ready with API config
- ✅ All deployment files created
- ⚠️ **Just need:** Real password + deploy to Render + build & upload!
