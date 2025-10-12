# ✅ FINAL STEP - Upload to Hostinger

## 🎉 What's Done
- ✅ Backend deployed to Render: `https://blaupunkt-backend.onrender.com`
- ✅ Production build created (with correct backend URL)
- ✅ GitHub Action configured to keep backend alive
- ✅ All fixes committed to Git

---

## 📦 Files Ready to Upload

Your `dist/` folder contains the production-ready frontend.

**Size:** ~788 KB JavaScript + assets
**Backend URL configured:** `https://blaupunkt-backend.onrender.com`

---

## 🚀 Upload to Hostinger (5 minutes)

### Step 1: Access Hostinger File Manager

1. Go to **Hostinger hPanel**: https://hpanel.hostinger.com
2. Click **Files** → **File Manager**
3. Navigate to `public_html/` folder

### Step 2: Backup Old Files (Optional)

1. Select all files in `public_html/`
2. Click **Compress** → Create backup zip
3. Download the backup (optional safety)

### Step 3: Clear Old Files

1. Select all files in `public_html/`
2. Click **Delete**
3. Confirm deletion

### Step 4: Upload New Files

1. Click **Upload** button
2. Select **all files and folders** from your `dist/` directory:
   - `index.html`
   - `assets/` folder (all files inside)
   - Any other files in `dist/`
3. Wait for upload to complete

**Important:** Upload the **contents** of `dist/`, not the `dist/` folder itself!

### Step 5: Create .htaccess File

1. In File Manager, click **New File**
2. Name it `.htaccess`
3. Click **Edit**
4. Paste this content:

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

5. Save and close

---

## ✅ Verify File Structure

After upload, your `public_html/` should look like:

```
public_html/
├── index.html
├── .htaccess (newly created)
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   ├── vendor-[hash].js
│   ├── router-[hash].js
│   ├── ui-[hash].js
│   └── [all images, PDFs, videos]
```

---

## 🧪 Test Your Live Website

### Step 1: Visit Homepage
**URL:** https://blaupunkt-ev.com

Should load without errors.

### Step 2: Test Navigation
- Click different pages
- Check all routes work
- No 404 errors on refresh

### Step 3: Test Contact Form
1. Go to https://blaupunkt-ev.com/contact
2. Fill out the form:
   - Full Name: Test User
   - Email: your-email@example.com
   - Phone: 1234567890
   - Message: Testing contact form!
3. Click **Submit**
4. Should see success message

### Step 4: Verify Email Delivery
- Open `info@blaupunkt-ev.com` inbox
- You should see the contact form submission
- Email should have:
  - From: Blaupunkt EV Contact Form <info@blaupunkt-ev.com>
  - Reply-To: your-email@example.com
  - Subject: Contact Form Submission from Test User

---

## 🔧 Troubleshooting

### Issue: "Page Not Found" on Refresh
**Fix:** Make sure `.htaccess` is created and has correct content

### Issue: Contact form shows CORS error
**Fix:** 
1. Check Render environment variables include `VITE_DOMAIN=https://blaupunkt-ev.com`
2. Rebuild frontend: `npm run build`
3. Re-upload to Hostinger

### Issue: Contact form doesn't submit
**Fix:**
1. Open browser DevTools (F12) → Console
2. Look for errors
3. Verify backend URL is correct: `https://blaupunkt-backend.onrender.com`

### Issue: Email not arriving
**Fix:**
1. Check spam folder
2. Verify Render backend logs show successful email send
3. Check Render environment variables are set correctly

---

## 📋 Final Checklist

- [ ] Logged into Hostinger hPanel
- [ ] Opened File Manager → `public_html/`
- [ ] Backed up old files (optional)
- [ ] Deleted old files
- [ ] Uploaded all files from `dist/` folder
- [ ] Created `.htaccess` file with correct content
- [ ] Verified file structure looks correct
- [ ] Visited https://blaupunkt-ev.com (loads successfully)
- [ ] Tested page navigation (no 404 errors)
- [ ] Tested contact form (submits successfully)
- [ ] Received email at info@blaupunkt-ev.com
- [ ] Verified GitHub Action is running (GitHub → Actions)

---

## 🎉 Success!

Once all checkboxes are complete, your website is **LIVE** with:

✅ **Frontend:** https://blaupunkt-ev.com (hosted on Hostinger)
✅ **Backend:** https://blaupunkt-backend.onrender.com (hosted on Render)
✅ **Email:** Delivers to info@blaupunkt-ev.com
✅ **Keep-Alive:** GitHub Action pinging every 12 minutes
✅ **HTTPS:** Secure connections
✅ **SPA Routing:** Works with .htaccess

---

## 📊 Monitoring

### Check Backend Health
```powershell
curl https://blaupunkt-backend.onrender.com/api/health
```

Should return: `{"status":"ok","timestamp":"...","message":"Backend is alive!"}`

### Check GitHub Action
**URL:** https://github.com/AbinVarghexe/Blaupunkt/actions

Should show "Keep Render Backend Alive" running every 12 minutes.

### Check Render Logs
**URL:** https://dashboard.render.com

Click your service → Logs tab
Should show health check pings and contact form requests.

---

## 🚀 You're Live!

**Congratulations!** Your Blaupunkt EV website is now fully deployed and operational! 🎉

Test it out by submitting a contact form and receiving emails!
