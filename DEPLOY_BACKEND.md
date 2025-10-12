# Blaupunkt Backend Deployment Guide

## ✅ Pre-Deployment Checklist

- [x] Backend code configured for `info@blaupunkt-ev.com`
- [x] Environment variables ready
- [ ] Get `info@blaupunkt-ev.com` email password from Hostinger
- [ ] Choose deployment platform
- [ ] Deploy backend
- [ ] Update frontend to use backend URL

---

## 🚀 Step-by-Step Deployment (Render - Recommended)

### Prerequisites
1. **GitHub Account** - To deploy from your repo
2. **Hostinger Email Password** - For `info@blaupunkt-ev.com`
3. **Render Account** - Sign up free at [render.com](https://render.com)

### Step 1: Get Hostinger SMTP Settings

1. Login to **Hostinger hPanel**
2. Go to **Emails** → **Email Accounts**
3. Find `info@blaupunkt-ev.com` (or create it if it doesn't exist)
4. Click **⋮** (three dots) → **Configure Email Client**
5. Note these settings:
   ```
   Outgoing Server (SMTP): smtp.hostinger.com OR mail.blaupunkt-ev.com
   Port: 465 (SSL) or 587 (TLS)
   Username: info@blaupunkt-ev.com
   Password: [copy this - you'll need it]
   ```

### Step 2: Prepare Your Repository

```powershell
# Make sure you're in the project root
cd d:\DEV\Incial\Blaupunkt

# Commit the backend configuration
git add backend/
git add render.yaml
git commit -m "Configure backend for deployment"
git push origin master
```

### Step 3: Deploy to Render

1. **Go to [render.com](https://render.com)** and sign in with GitHub
2. Click **New** → **Blueprint**
3. Connect your **Blaupunkt** repository
4. Render will detect `render.yaml` automatically
5. Click **Apply**
6. **Add Environment Variables** (click the service → Environment):
   - `SMTP_HOST` = `smtp.hostinger.com` (or `mail.blaupunkt-ev.com`)
   - `SMTP_USER` = `info@blaupunkt-ev.com`
   - `SMTP_PASS` = `[paste the password from Hostinger]`
   - `VITE_DOMAIN` = `https://blaupunkt-ev.com`
7. Click **Save Changes**
8. Wait for deployment (2-3 minutes)
9. **Copy your backend URL**: `https://blaupunkt-backend.onrender.com`

### Step 4: Test the Backend

```powershell
# Test the deployed backend
curl -X POST https://blaupunkt-backend.onrender.com/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Testing deployment"
  }'
```

Expected response:
```json
{"success": true, "message": "Message sent successfully."}
```

Check `info@blaupunkt-ev.com` for the test email!

### Step 5: Update Frontend

Update your frontend contact form to use the deployed backend:

**Option A: Update Environment Variable**
```env
# In your .env or .env.production
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

**Option B: Update Contact Component Directly**
Find where your contact form makes the API call and update:
```javascript
// Instead of:
const response = await fetch('/api/contact', { ... });

// Use:
const response = await fetch('https://blaupunkt-backend.onrender.com/api/contact', { ... });
```

### Step 6: Rebuild & Redeploy Frontend

```powershell
# Build frontend with new backend URL
npm run build

# Deploy to Hostinger (upload dist/ folder via FTP or File Manager)
```

---

## 🔄 Alternative: Deploy to Railway

Railway is faster and easier but has limited free tier.

### Quick Railway Deployment

1. **Go to [railway.app](https://railway.app)**
2. Click **Start a New Project** → **Deploy from GitHub repo**
3. Select **Blaupunkt** repository
4. Click **Add variables** and add:
   ```
   NODE_ENV=production
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=info@blaupunkt-ev.com
   SMTP_PASS=[your-password]
   DESTINATION_EMAIL=info@blaupunkt-ev.com
   ```
5. In **Settings** → **Build & Deploy**:
   - **Root Directory:** `backend`
   - **Start Command:** `npm start`
6. Deploy!
7. Copy your Railway URL from **Settings** → **Domains**

---

## 🧪 Local Testing Before Deployment

### Test SMTP Connection
```powershell
cd backend

# Install dependencies
npm install

# Update .env with real password
# (Edit backend/.env and replace 'your-email-password-here')

# Test SMTP
npm test
```

Expected output:
```
✅ Env SMTP (smtp.hostinger.com:465) - WORKS!
```

### Run Server Locally
```powershell
cd backend
npm start
```

Should see:
```
SMTP transporter verified successfully.
🚀 Server running at http://localhost:5000
```

### Test Contact Endpoint
```powershell
curl -X POST http://localhost:5000/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "message": "Hello from local test"
  }'
```

Check `info@blaupunkt-ev.com` inbox!

---

## 📋 Quick Reference

### Hostinger SMTP Settings
```
Host: smtp.hostinger.com (or mail.blaupunkt-ev.com)
Port: 465 (SSL) or 587 (TLS)
Username: info@blaupunkt-ev.com
Password: [from Hostinger]
```

### Environment Variables Required
```env
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=[secret]
DESTINATION_EMAIL=info@blaupunkt-ev.com
VITE_DOMAIN=https://blaupunkt-ev.com
```

### Deployment URLs
- **Render Blueprint:** Uses `render.yaml` (automated)
- **Railway:** Manual setup, faster deployment
- **Fly.io:** Run `fly launch` in backend folder

---

## 🆘 Troubleshooting

### "Authentication failed" when testing
- ✅ Double-check password from Hostinger
- ✅ Verify username is full email: `info@blaupunkt-ev.com`
- ✅ Try alternate SMTP host: `mail.blaupunkt-ev.com`
- ✅ Try port 587 instead of 465

### Deployment fails on Render
- ✅ Check build logs for errors
- ✅ Verify `render.yaml` is in repository root
- ✅ Ensure all environment variables are set

### Emails not arriving
- ✅ Check spam folder
- ✅ Verify `DESTINATION_EMAIL=info@blaupunkt-ev.com` is set
- ✅ Check Render/Railway logs for errors

### CORS errors from frontend
- ✅ Update `VITE_DOMAIN` in backend environment variables
- ✅ Ensure frontend is using correct backend URL

---

## ✅ Post-Deployment Checklist

- [ ] Backend deployed and running
- [ ] Test email sent successfully to `info@blaupunkt-ev.com`
- [ ] Frontend updated with backend URL
- [ ] Frontend rebuilt and deployed to Hostinger
- [ ] Contact form tested from live website
- [ ] Email received at `info@blaupunkt-ev.com`

---

## 📞 Need Help?

**Common Issues:**
- SMTP Settings: [Hostinger Email Setup](https://support.hostinger.com/en/articles/1583286)
- Render Docs: [Render Web Services](https://render.com/docs/web-services)
- Railway Docs: [Railway Deployments](https://docs.railway.app/deploy/deployments)

**Files to Check:**
- `backend/.env` - Your local environment variables
- `backend/README.md` - Complete technical documentation
- `render.yaml` - Render deployment configuration
