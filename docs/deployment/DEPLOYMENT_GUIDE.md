# GitHub Auto-Deployment Setup Guide

## 🎯 Complete Setup Instructions

This guide will help you set up automatic deployment from GitHub to Hostinger for the Blaupunkt EV website.

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Hostinger hosting plan (Single Web Hosting)
- ✅ FTP credentials from Hostinger
- ✅ Domain name (optional, but recommended)

---

## 🚀 Step-by-Step Setup

### Step 1: Get FTP Credentials from Hostinger

1. Log in to **Hostinger hPanel**
2. Go to **Files → FTP Accounts**
3. Note down the following:

```
FTP Host: ftp://145.79.209.167
FTP Username: u966003410
FTP Port: 21
Folder: public_html
```

4. **Important:** Click **"Change FTP password"** to set/reset your password
5. Save the password securely (you'll need it for GitHub Secrets)

---

### Step 2: Create GitHub Repository

#### Option A: Using GitHub Web Interface

1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Repository name: `blaupunkt-ev` (or any name you prefer)
4. Make it **Public** or **Private**
5. **DO NOT** initialize with README (we already have files)
6. Click **"Create repository"**

#### Option B: Using Git CLI

```bash
# In your project directory
cd D:\DEV\Incial\Blaupunkt

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Blaupunkt EV website with auto-deployment"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/blaupunkt-ev.git

# Push to GitHub
git branch -M master
git push -u origin master
```

---

### Step 3: Add GitHub Secrets

**Critical Step:** These secrets keep your FTP credentials secure.

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. In left sidebar: **Secrets and variables → Actions**
4. Click **"New repository secret"**
5. Add each of the following secrets:

#### Secret 1: FTP_SERVER
```
Name: FTP_SERVER
Value: ftp://145.79.209.167
```

#### Secret 2: FTP_USERNAME
```
Name: FTP_USERNAME
Value: u966003410
```

#### Secret 3: FTP_PASSWORD
```
Name: FTP_PASSWORD
Value: [Your FTP password from Step 1]
```

#### Secret 4: VITE_WHATSAPP_NUMBER
```
Name: VITE_WHATSAPP_NUMBER
Value: 971558882595
```

#### Secret 5: VITE_WHATSAPP_MESSAGE
```
Name: VITE_WHATSAPP_MESSAGE
Value: Hello! I would like to know more about your products.
```

**Screenshot of what it should look like:**
```
Secrets
├── FTP_SERVER (Updated X days ago)
├── FTP_USERNAME (Updated X days ago)
├── FTP_PASSWORD (Updated X days ago)
├── VITE_WHATSAPP_NUMBER (Updated X days ago)
└── VITE_WHATSAPP_MESSAGE (Updated X days ago)
```

---

### Step 4: Test Auto-Deployment

#### Method 1: Push a Change

```bash
# Make a small change
echo "# Auto-deployment test" >> README.md

# Commit and push
git add README.md
git commit -m "Test: Auto-deployment workflow"
git push origin master
```

#### Method 2: Manual Trigger

1. Go to GitHub repository
2. Click **Actions** tab
3. Select **"🚀 Deploy to Hostinger"** workflow
4. Click **"Run workflow"** dropdown
5. Click **"Run workflow"** button

---

### Step 5: Monitor Deployment

1. Go to **Actions** tab in your GitHub repository
2. You'll see a workflow run in progress
3. Click on it to see real-time logs

**Expected Output:**
```
📥 Checkout code          ✓ Complete
🟢 Setup Node.js          ✓ Complete
📦 Install dependencies   ✓ Complete
🏗️ Build Vite project     ✓ Complete
📤 Deploy to Hostinger    ✓ Complete
✅ Deployment successful  ✓ Complete
```

**Total time:** Approximately 2-4 minutes

---

### Step 6: Verify Website

1. Visit your website:
   - By IP: `http://153.92.9.132`
   - By domain (if configured): `https://blaupunkt-ev.com`

2. Test all pages:
   - ✓ Home page loads
   - ✓ Products page works
   - ✓ Services page loads
   - ✓ Contact form functional
   - ✓ All routes work (no 404 errors)

---

## 🌐 Domain Configuration

### For Custom Domain (blaupunkt-ev.com)

Share these DNS records with your client/domain registrar:

#### Method 1: Update Nameservers (Recommended)

```
ns1.dns-parking.com
ns2.dns-parking.com
```

#### Method 2: Update A Records

```
Type: A
Name: @
Value: 153.92.9.132
TTL: 14400

Type: A
Name: www
Value: 153.92.9.132
TTL: 14400
```

**DNS Propagation Time:** 24-48 hours

---

## 🔒 SSL Certificate Setup

Once domain is connected:

1. Go to **Hostinger hPanel**
2. Navigate to **Security → SSL**
3. Select your domain
4. Click **"Install SSL"**
5. Wait 10-20 minutes for activation

**Free SSL provided by Hostinger** (Let's Encrypt)

---

## 🔄 How Auto-Deployment Works

```
┌─────────────────────┐
│  You make changes   │
│  in local code      │
└──────────┬──────────┘
           │
           │ git push
           ↓
┌─────────────────────┐
│  GitHub Repository  │
│     (master)        │
└──────────┬──────────┘
           │
           │ triggers
           ↓
┌─────────────────────┐
│  GitHub Actions     │
│  • Install deps     │
│  • Build with Vite  │
│  • Create dist/     │
└──────────┬──────────┘
           │
           │ FTP Upload
           ↓
┌─────────────────────┐
│  Hostinger Server   │
│  153.92.9.132       │
│  /public_html/      │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  Live Website       │
│ blaupunkt-ev.com    │
└─────────────────────┘
```

---

## 📝 Daily Workflow

### Making Updates

```bash
# 1. Make your changes in code
# 2. Test locally
npm run dev

# 3. Build and test production build
npm run build
npm run preview

# 4. Commit and push
git add .
git commit -m "Update: Description of changes"
git push origin master

# 5. Deployment happens automatically!
# Check GitHub Actions tab to monitor
```

---

## 🐛 Troubleshooting

### Issue: Deployment fails at "Deploy to Hostinger via FTP"

**Possible causes:**
- ❌ Wrong FTP password
- ❌ FTP server not accessible
- ❌ Wrong server path

**Solution:**
1. Verify FTP credentials in Hostinger
2. Check GitHub Secrets are correct
3. Try manual FTP connection using FileZilla

---

### Issue: Build succeeds but website not updated

**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check Hostinger File Manager → `public_html` folder
3. Verify files have new timestamps
4. Wait 2-3 minutes for server cache

---

### Issue: Routes show 404 error

**Solution:**
Ensure `.htaccess` file is in `public` folder (it will be copied to `dist` during build)

Check file location:
```
public/
  └── .htaccess   ← Should be here
```

---

### Issue: Images/Assets not loading

**Solution:**
1. Check `vite.config.js` has `base: '/'`
2. Verify assets folder uploaded in `dist`
3. Check file paths are correct in code

---

### Issue: Contact form not working

**Possible causes:**
- Backend not deployed
- Environment variables missing
- SMTP configuration incorrect

**Solution:**
1. Check backend folder is uploaded
2. Verify SMTP credentials
3. Test email configuration in Hostinger

---

## 📧 Email Notifications

### Enable GitHub Actions Notifications

1. Go to [GitHub Settings → Notifications](https://github.com/settings/notifications)
2. Under **Actions**:
   - ✓ Send notifications for failed workflows only

You'll receive email when deployment fails.

---

## 🔐 Security Best Practices

### ✅ DO:
- Keep FTP password strong (20+ characters)
- Use GitHub Secrets for all credentials
- Review deployment logs regularly
- Enable 2FA on GitHub account
- Keep `.env` files in `.gitignore`

### ❌ DON'T:
- Never commit passwords to repository
- Don't share FTP credentials publicly
- Don't disable security headers in `.htaccess`
- Don't expose API keys in frontend code

---

## 📊 Monitoring & Maintenance

### Weekly Checks:
- ✓ Review deployment success rate
- ✓ Check website performance
- ✓ Monitor error logs in Hostinger
- ✓ Test contact form functionality

### Monthly Tasks:
- ✓ Update dependencies (`npm update`)
- ✓ Review security advisories
- ✓ Backup database (if applicable)
- ✓ Check SSL certificate status

---

## 🆘 Support Resources

### GitHub Actions Logs
- Repository → Actions → Select workflow run
- View detailed logs for each step

### Hostinger Support
- hPanel → Help → Live Chat
- Email: support@hostinger.com

### FTP Testing Tools
- FileZilla (recommended)
- WinSCP
- Cyberduck

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [Hostinger Help Center](https://support.hostinger.com/)
- [FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action)

---

## ✅ Setup Checklist

- [ ] GitHub repository created
- [ ] All 5 secrets added to GitHub
- [ ] FTP password confirmed working
- [ ] `.htaccess` file in `public` folder
- [ ] First deployment successful
- [ ] Website accessible via IP
- [ ] Domain DNS configured (if applicable)
- [ ] SSL certificate installed (if domain connected)
- [ ] Email notifications enabled
- [ ] Team members added to repository (if applicable)

---

## 🎉 Success!

Your website is now set up for automatic deployment!

**Every time you push to the `master` branch, your website will automatically update within 2-4 minutes.**

For questions or issues, check the troubleshooting section above or review GitHub Actions logs.

---

*Last updated: October 6, 2025*
