# 🚀 Render Deployment Guide - Blaupunkt EV Website

## 📋 Overview

This guide will help you deploy your Blaupunkt EV website to Render. You'll deploy:

1. **Backend (Node.js)** - Contact form email server → Render Web Service
2. **Frontend (React/Vite)** - Main website → Render Static Site (or use Netlify/Vercel)

**Estimated Setup Time:** 15-20 minutes

---

## ✅ Prerequisites

- [ ] GitHub account (free)
- [ ] Render account (free) - Sign up at [render.com](https://render.com)
- [ ] Your code pushed to GitHub repository
- [ ] SMTP email credentials (Hostinger email)

---

## 🎯 Deployment Strategy

### Option 1: Backend on Render + Frontend on Render (Recommended)
✅ Everything in one place
✅ Simple management
✅ Free tier available

### Option 2: Backend on Render + Frontend on Netlify/Vercel
✅ Better frontend performance
✅ More generous free tier for static sites
✅ Advanced features (redirects, headers, etc.)

This guide covers **Option 1**. You can adapt for Option 2.

---

## 📦 Part 1: Deploy Backend to Render

### Step 1: Push Code to GitHub

If you haven't already:

```powershell
# In your project root (D:\DEV\Incial\Blaupunkt)
git init
git add .
git commit -m "Initial commit - Blaupunkt EV website"
git branch -M master

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/Blaupunkt.git
git push -u origin master
```

### Step 2: Create Render Web Service for Backend

1. **Go to Render Dashboard**
   - Visit [dashboard.render.com](https://dashboard.render.com)
   - Click **"New +"** → **"Web Service"**

2. **Connect Your GitHub Repository**
   - Click **"Connect GitHub"** (first time only)
   - Select your `Blaupunkt` repository
   - Click **"Connect"**

3. **Configure the Service**

Fill in these settings:

| Field | Value |
|-------|-------|
| **Name** | `blaupunkt-backend` |
| **Region** | Choose closest to your users (e.g., Oregon, Frankfurt) |
| **Branch** | `master` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node mailserver.js` |
| **Instance Type** | `Free` |

4. **Add Environment Variables**

Click **"Advanced"** → **"Add Environment Variable"** for each:

```env
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=Blaupunkt@ev123
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

⚠️ **Important:** Replace `SMTP_PASS` with your actual email password!

5. **Deploy**
   - Click **"Create Web Service"**
   - Wait 2-5 minutes for deployment
   - You'll get a URL like: `https://blaupunkt-backend.onrender.com`

6. **Test Backend**
   - Visit: `https://blaupunkt-backend.onrender.com/api/health`
   - You should see: `{"status":"ok","timestamp":"...","message":"Backend is alive!"}`

✅ **Backend is now live!**

---

## 🎨 Part 2: Deploy Frontend to Render

### Step 1: Update Frontend Environment Variables

**Before deploying**, update your production config:

1. **Edit `.env.production`:**

```env
# Backend API URL (use your Render backend URL)
VITE_API_URL=https://blaupunkt-backend.onrender.com

# Optional
VITE_DOMAIN=https://blaupunkt-frontend.onrender.com
```

2. **Commit and push:**

```powershell
git add .env.production
git commit -m "Update production API URL for Render"
git push
```

### Step 2: Create Render Static Site for Frontend

1. **Go to Render Dashboard**
   - Click **"New +"** → **"Static Site"**

2. **Connect Same Repository**
   - Select your `Blaupunkt` repository

3. **Configure the Static Site**

| Field | Value |
|-------|-------|
| **Name** | `blaupunkt-frontend` |
| **Branch** | `master` |
| **Root Directory** | Leave empty (or `.`) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

4. **Add Environment Variables** (Optional)

If you want to override any build-time variables:

```env
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

5. **Deploy**
   - Click **"Create Static Site"**
   - Wait 3-5 minutes for build and deployment
   - You'll get a URL like: `https://blaupunkt-frontend.onrender.com`

✅ **Frontend is now live!**

---

## 🧪 Testing Your Deployment

### Test 1: Backend Health Check

```powershell
Invoke-RestMethod -Uri 'https://blaupunkt-backend.onrender.com/api/health'
```

**Expected response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

### Test 2: Contact Form Submission

```powershell
$body = @{
    fullName = 'Test User'
    email = 'test@example.com'
    phone = '1234567890'
    message = 'Testing from Render deployment'
} | ConvertTo-Json

Invoke-RestMethod -Uri 'https://blaupunkt-backend.onrender.com/api/contact' -Method Post -Body $body -ContentType 'application/json'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

### Test 3: Frontend Website

1. Visit: `https://blaupunkt-frontend.onrender.com`
2. Navigate to the Contact page
3. Fill out the contact form
4. Submit and verify:
   - Success toast message appears
   - Email received at `info@blaupunkt-ev.com`

---

## ⚙️ Important Render Configuration

### Auto-Deploy from GitHub

By default, Render auto-deploys when you push to your branch:

```powershell
# Make a change
git add .
git commit -m "Update feature"
git push

# Render automatically rebuilds and deploys!
```

To disable auto-deploy:
- Go to service **Settings** → **Build & Deploy**
- Toggle **"Auto-Deploy"** off

### Custom Domain Setup

1. **Go to Service Settings**
   - Click on your frontend service
   - Go to **Settings** → **Custom Domains**

2. **Add Custom Domain**
   - Click **"Add Custom Domain"**
   - Enter: `www.blaupunkt-ev.com` and `blaupunkt-ev.com`

3. **Configure DNS (in Hostinger)**

In Hostinger hPanel → Domains → DNS Records, add:

```
Type: CNAME
Name: www
Value: blaupunkt-frontend.onrender.com
```

For apex domain (`blaupunkt-ev.com`):
```
Type: A
Name: @
Value: [Render IP - shown in Render dashboard]
```

4. **SSL Certificate**
   - Render automatically provisions SSL certificates
   - Wait 5-10 minutes after DNS propagation

---

## 🔧 Render Configuration Files (Optional but Recommended)

### Update `render.yaml` for Infrastructure as Code

Your existing `render.yaml` already has backend config. Let's enhance it:

```yaml
services:
  # Backend Service
  - type: web
    name: blaupunkt-backend
    runtime: node
    region: oregon  # or frankfurt, singapore
    plan: free
    rootDir: backend
    buildCommand: npm install
    startCommand: node mailserver.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: SMTP_HOST
        value: smtp.hostinger.com
      - key: SMTP_PORT
        value: 465
      - key: SMTP_USER
        sync: false  # Set manually in dashboard for security
      - key: SMTP_PASS
        sync: false  # Set manually in dashboard for security
      - key: DESTINATION_EMAIL
        value: info@blaupunkt-ev.com
      - key: PORT
        value: 5000
      - key: VITE_DOMAIN
        sync: false
    healthCheckPath: /api/health

  # Frontend Service
  - type: web
    name: blaupunkt-frontend
    runtime: static
    region: oregon
    plan: free
    buildCommand: npm install && npm run build
    staticPublishPath: dist
    envVars:
      - key: VITE_API_URL
        value: https://blaupunkt-backend.onrender.com
    headers:
      - path: /*
        name: X-Frame-Options
        value: DENY
      - path: /*
        name: X-Content-Type-Options
        value: nosniff
```

With `render.yaml`, you can deploy with one click by importing the YAML file!

---

## 💡 Free Tier Limitations & Solutions

### Render Free Tier:
- ✅ **750 hours/month** per service (enough for 1 service 24/7)
- ✅ **Automatic HTTPS**
- ✅ **Auto-deploy from GitHub**
- ⚠️ **Spins down after 15 min inactivity**
- ⚠️ **Cold start: 30-60 seconds** on first request after sleep

### How to Handle Backend Sleep Issue:

#### Solution 1: Keep-Alive Service (Recommended)

You already have a keep-alive guide! Let's integrate it:

1. **Use Cron Job Service** (like UptimeRobot or cron-job.org)
   - Create free account at [uptimerobot.com](https://uptimerobot.com)
   - Add monitor for: `https://blaupunkt-backend.onrender.com/api/health`
   - Check interval: Every 5 minutes
   - This keeps your backend awake

2. **Your KEEP_ALIVE_GUIDE.md** has more options:
   - GitHub Actions (automated pings)
   - Render Cron Jobs (paid feature)

#### Solution 2: Upgrade to Paid Plan ($7/month)
- No sleep
- More CPU/RAM
- Better performance

---

## 🐛 Troubleshooting

### Issue 1: "Application failed to respond"

**Cause:** Backend not starting properly

**Solutions:**
1. Check Render logs: Dashboard → Service → Logs
2. Verify `startCommand` is `node mailserver.js`
3. Check environment variables are set
4. Ensure `PORT` is set or app listens on `process.env.PORT`

### Issue 2: "Cannot connect to backend" from frontend

**Cause:** CORS or incorrect API URL

**Solutions:**
1. Verify `VITE_API_URL` in frontend matches backend URL
2. Check backend CORS settings in `backend/config.js`
3. Ensure backend allows your frontend domain

### Issue 3: Email not sending

**Cause:** SMTP credentials incorrect or blocked

**Solutions:**
1. Check SMTP credentials in Render environment variables
2. Test SMTP locally first
3. Check Hostinger email account is active
4. Check Render logs for SMTP errors

### Issue 4: Backend sleeps/wakes slowly

**Cause:** Free tier limitation

**Solutions:**
1. Set up UptimeRobot ping (see Solution 1 above)
2. Or upgrade to paid plan
3. Or use Railway.app (similar free tier but different limits)

### Issue 5: Build fails

**Cause:** Missing dependencies or build errors

**Solutions:**
1. Check Render build logs
2. Ensure `package.json` has all dependencies
3. Test build locally: `npm run build`
4. Check Node version compatibility

---

## 🔐 Security Best Practices

### 1. Environment Variables
- ✅ Never commit `.env` files
- ✅ Use Render's environment variable sync for sensitive data
- ✅ Mark sensitive vars as `sync: false` in render.yaml

### 2. SMTP Security
- ✅ Use app-specific passwords if available
- ✅ Limit SMTP account to send-only permissions
- ✅ Consider using dedicated email service (SendGrid, Mailgun)

### 3. CORS Configuration
- ✅ Update `backend/config.js` to only allow your frontend domain
- ✅ Don't use `*` in production CORS

### 4. Rate Limiting
- ✅ Already handled in backend (see keep-alive guide)
- ✅ Consider adding express-rate-limit for contact form

---

## 📊 Monitoring & Logs

### View Logs in Render

1. Go to your service in Render dashboard
2. Click **"Logs"** tab
3. Filter by:
   - **Build logs** - For deployment issues
   - **Deploy logs** - For startup issues
   - **Runtime logs** - For application errors

### Useful Log Commands

Backend will log:
```
✅ SMTP transporter verified successfully.
🚀 Server running at http://localhost:5000
📧 Email destination: info@blaupunkt-ev.com
🌍 Environment: production
```

---

## 🚦 Deployment Checklist

### Pre-Deployment
- [ ] All code committed and pushed to GitHub
- [ ] `.env.production` updated with Render backend URL
- [ ] SMTP credentials ready
- [ ] Tested contact form locally

### Backend Deployment
- [ ] Render Web Service created
- [ ] Environment variables set (especially SMTP credentials)
- [ ] Health check endpoint working
- [ ] Test email sending with curl/PowerShell

### Frontend Deployment
- [ ] Render Static Site created
- [ ] `VITE_API_URL` points to backend
- [ ] Build completes successfully
- [ ] Site loads and navigates properly
- [ ] Contact form submits successfully

### Post-Deployment
- [ ] Set up UptimeRobot or keep-alive ping
- [ ] Configure custom domain (if applicable)
- [ ] Test contact form end-to-end
- [ ] Monitor logs for errors
- [ ] Check email deliverability

---

## 💰 Cost Breakdown

### Free Tier (What you get for $0/month):

**Backend:**
- ✅ 750 hours/month (enough for 24/7 with 1 service)
- ✅ 512MB RAM
- ✅ Shared CPU
- ⚠️ Spins down after 15 min inactivity

**Frontend:**
- ✅ Unlimited bandwidth
- ✅ Global CDN
- ✅ Automatic SSL
- ✅ No sleep (static sites don't sleep!)

**Limitations:**
- Only 1 free web service at a time
- Backend sleeps when inactive

### Paid Plans (Optional):

**Starter ($7/month per service):**
- No sleep
- Always-on
- More resources

**Standard ($25/month per service):**
- More CPU/RAM
- Priority support
- Advanced features

### Recommended Free Setup:
1. Backend on Render Free
2. Frontend on Netlify/Vercel Free (more generous)
3. UptimeRobot to keep backend awake
4. **Total: $0/month**

---

## 🔄 Alternative: Deploy Frontend to Netlify (Better Free Tier)

If you prefer Netlify for frontend:

1. **Keep backend on Render** (as configured above)

2. **Deploy frontend to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect GitHub repo
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** `VITE_API_URL=https://blaupunkt-backend.onrender.com`

3. **Benefits:**
   - Unlimited bandwidth
   - Faster CDN
   - Better analytics
   - More free build minutes

---

## 📞 Support Resources

### Render Documentation
- [Render Docs](https://render.com/docs)
- [Node.js Deployment](https://render.com/docs/deploy-node-express-app)
- [Static Sites](https://render.com/docs/static-sites)

### Community Support
- [Render Community Forum](https://community.render.com)
- [Render Status Page](https://status.render.com)

### Your Project Docs
- `MAIL_SETUP_GUIDE.md` - Email configuration
- `KEEP_ALIVE_GUIDE.md` - Preventing backend sleep
- `backend/README.md` - Backend setup

---

## ✅ Quick Start Summary

**For the impatient:**

1. **Push code to GitHub**
2. **Create Render Web Service:**
   - Connect repo
   - Root directory: `backend`
   - Build: `npm install`
   - Start: `node mailserver.js`
   - Add SMTP environment variables
3. **Create Render Static Site:**
   - Connect same repo
   - Build: `npm install && npm run build`
   - Publish: `dist`
   - Set `VITE_API_URL` to backend URL
4. **Test and enjoy!**

---

## 🎉 Success Criteria

Your deployment is successful when:

✅ Backend health check responds: `https://YOUR-BACKEND.onrender.com/api/health`
✅ Frontend loads: `https://YOUR-FRONTEND.onrender.com`
✅ Contact form submits successfully
✅ Email arrives in inbox
✅ No console errors in browser
✅ All pages navigate correctly

---

**Questions?** Check the troubleshooting section or Render docs!

**Last Updated:** October 25, 2025
**Version:** 1.0.0
