# 🚀 Render Production Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] SMTP credentials verified locally (`Mail@Blaupunkt123`)
- [x] Local testing successful
- [x] `render.yaml` configured
- [ ] Environment variables set in Render Dashboard
- [ ] Service deployed and running
- [ ] Production testing complete

---

## 📋 Step 1: Update Render Environment Variables

### Option A: Using Render Dashboard (Recommended)

1. **Login to Render:**
   - Go to: https://dashboard.render.com/
   - Login with your account

2. **Navigate to Your Service:**
   - Click on **"blaupunkt-backend"** service
   - If it doesn't exist, see **Step 2** below

3. **Update Environment Variables:**
   - Click on **"Environment"** tab in the left sidebar
   - Update/Add these variables:

   ```bash
   NODE_ENV=production
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=info@blaupunkt-ev.com
   SMTP_PASS=Mail@Blaupunkt123
   DESTINATION_EMAIL=info@blaupunkt-ev.com
   PORT=5000
   VITE_DOMAIN=https://blaupunkt-ev.com
   ```

4. **Critical - Set SMTP_PASS:**
   - Find `SMTP_PASS` in the list
   - Click **"Edit"** or **"Add Environment Variable"**
   - Enter: `Mail@Blaupunkt123`
   - Click **"Save Changes"**

5. **Service Will Auto-Deploy:**
   - Wait 2-3 minutes for deployment to complete
   - Check **"Logs"** tab to verify it started successfully

### Option B: Using Blueprint Deployment

If service doesn't exist yet, deploy using the `render.yaml`:

1. Go to https://dashboard.render.com/
2. Click **"New +"** → **"Blueprint"**
3. Connect your repository: `AbinVarghexe/Blaupunkt`
4. Render will detect `render.yaml`
5. Click **"Apply"**
6. **IMMEDIATELY after creation:**
   - Go to the service → **Environment** tab
   - Add `SMTP_PASS=Mail@Blaupunkt123`
   - Click **"Save Changes"** (will trigger redeploy)

---

## 📋 Step 2: Verify Deployment

### Check Service Status

1. **In Render Dashboard:**
   - Service should show **"Live"** with green indicator
   - Check **"Events"** tab for deployment history
   - Check **"Logs"** tab for any errors

2. **Expected Log Output:**
   ```
   ✅ SMTP transporter verified successfully.
   🚀 Server running at http://localhost:5000
   📧 Email destination: info@blaupunkt-ev.com
   🌍 Environment: production
   ```

### Test Health Endpoint

```powershell
# Test if backend is alive
Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/health"
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

### Test Contact Endpoint

```powershell
# Test contact form submission
$body = @{
    fullName = "Production Test"
    email = "test@example.com"
    phone = "+1234567890"
    message = "Testing production deployment"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/contact" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

**Check Email:**
- Login to https://webmail.hostinger.com/
- Email: `info@blaupunkt-ev.com`
- Password: `Mail@Blaupunkt123`
- You should see the test email in your inbox!

---

## 📋 Step 3: Update Frontend Configuration

Your frontend is hosted on Hostinger and needs to point to the Render backend.

### Verify Frontend API Configuration

The frontend should already be configured to use the production backend:

**File:** `src/config/api.js`

Should contain:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? 'https://blaupunkt-backend.onrender.com'
    : 'http://localhost:5000');
```

### Test Frontend → Backend Connection

1. **Open your production website:**
   - Go to: https://blaupunkt-ev.com/contact

2. **Fill in the contact form:**
   - Enter test data
   - Click **"Submit"**

3. **Expected Behavior:**
   - Success message appears
   - Email arrives at `info@blaupunkt-ev.com`

---

## 🔧 Troubleshooting

### Issue: Service Won't Start

**Check Logs in Render Dashboard:**
```
Service → Logs tab
```

**Common Errors:**

1. **"Invalid login: 535 5.7.8"**
   - SMTP password is wrong
   - Fix: Update `SMTP_PASS` in Environment tab
   - Must be exactly: `Mail@Blaupunkt123`

2. **"MODULE_NOT_FOUND"**
   - Build failed or missing dependencies
   - Fix: Check `buildCommand` in render.yaml is `npm install`

3. **"Port already in use"**
   - Should not happen on Render
   - Fix: Restart service

### Issue: Health Check Passes but Contact Form Fails

**Debug with Environment Check:**
```powershell
Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/debug-env"
```

**Expected Output:**
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
    "VITE_DOMAIN": "✅ Set"
  }
}
```

**If any show ❌ Missing:**
- Go to Render Dashboard → Environment tab
- Add the missing variable
- Service will auto-redeploy

### Issue: CORS Errors

**Error Message:**
```
Access to fetch at 'https://blaupunkt-backend.onrender.com/api/contact' 
from origin 'https://blaupunkt-ev.com' has been blocked by CORS policy
```

**Fix:**
1. Check `VITE_DOMAIN` is set to `https://blaupunkt-ev.com`
2. Verify `backend/mailserver.js` includes your domain in `allowedOrigins`
3. Redeploy service

---

## 🎯 Production Deployment Commands

### Quick Deploy (If Service Exists)

1. **Commit Changes:**
   ```powershell
   git add .
   git commit -m "chore: update SMTP credentials for production"
   git push origin master
   ```

2. **Render Auto-Deploys:**
   - Service automatically deploys on git push
   - Or manually trigger: Dashboard → Service → Manual Deploy

### Fresh Deployment (New Service)

```powershell
# 1. Commit all changes
git add .
git commit -m "feat: production-ready backend with SMTP"
git push origin master

# 2. Deploy to Render via Dashboard
# Go to: https://dashboard.render.com/
# Click: New + → Blueprint
# Select: AbinVarghexe/Blaupunkt repository
# Apply Blueprint

# 3. Set SMTP password
# Dashboard → blaupunkt-backend → Environment
# Add: SMTP_PASS=Mail@Blaupunkt123
# Save (triggers redeploy)

# 4. Wait 2-3 minutes for deployment

# 5. Test
.\scripts\test-production-backend.ps1
```

---

## 📝 Environment Variables Summary

| Variable | Value | Security |
|----------|-------|----------|
| `NODE_ENV` | `production` | Public |
| `SMTP_HOST` | `smtp.hostinger.com` | Public |
| `SMTP_PORT` | `465` | Public |
| `SMTP_USER` | `info@blaupunkt-ev.com` | Public |
| `SMTP_PASS` | `Mail@Blaupunkt123` | **SECRET** ⚠️ |
| `DESTINATION_EMAIL` | `info@blaupunkt-ev.com` | Public |
| `PORT` | `5000` | Public |
| `VITE_DOMAIN` | `https://blaupunkt-ev.com` | Public |

⚠️ **SECURITY NOTE:** Never commit `SMTP_PASS` to git! Always set it manually in Render Dashboard.

---

## ✅ Post-Deployment Checklist

After deployment is complete:

- [ ] Health check endpoint responds: `https://blaupunkt-backend.onrender.com/api/health`
- [ ] Debug endpoint shows all env vars set: `https://blaupunkt-backend.onrender.com/api/debug-env`
- [ ] Contact form test returns success
- [ ] Test email received at `info@blaupunkt-ev.com`
- [ ] Frontend can submit contact forms successfully
- [ ] No CORS errors in browser console
- [ ] Service shows "Live" status in Render Dashboard
- [ ] Logs show no errors

---

## 🔄 Keeping Service Alive (Free Tier)

Render free tier services sleep after 15 minutes of inactivity.

### Option 1: GitHub Actions (Recommended)

Already configured in `.github/workflows/keep-render-alive.yml`:
- Pings backend every 10 minutes
- Keeps service awake 24/7
- See: `docs/setup/GITHUB_ACTIONS_KEEPALIVE.md`

### Option 2: Uptime Monitor

Use external services like:
- UptimeRobot.com
- Cron-job.org
- Configure to ping: `https://blaupunkt-backend.onrender.com/api/health` every 10 minutes

---

## 🎉 Success Indicators

You'll know deployment is successful when:

1. ✅ Render Dashboard shows service as **"Live"**
2. ✅ Health endpoint responds with 200 OK
3. ✅ Contact form submission works from production website
4. ✅ Test emails arrive in inbox
5. ✅ No errors in Render logs
6. ✅ Frontend shows success message after form submission

---

## 📞 Support

**If you encounter issues:**

1. **Check Render Logs:**
   - Dashboard → blaupunkt-backend → Logs
   - Look for error messages

2. **Verify SMTP Credentials:**
   - Login to webmail: https://webmail.hostinger.com/
   - If login fails → password is wrong

3. **Review Documentation:**
   - `docs/FIX_500_ERROR_SMTP.md`
   - `docs/TROUBLESHOOTING_500_ERROR.md`
   - `docs/deployment/RENDER_DEPLOYMENT_GUIDE.md`

**Render Support:**
- https://render.com/docs
- https://community.render.com/

**Hostinger Support:**
- https://support.hostinger.com/

---

## 🚀 You're Ready!

Your backend is production-ready with:
- ✅ Working SMTP configuration
- ✅ Proper environment variables
- ✅ Health check endpoint
- ✅ CORS configured for your domain
- ✅ Error handling and logging
- ✅ Auto-deploy on git push

**Next:** Follow Step 1 to deploy to Render! 🎊
