# Backend-Only Deployment to Render

**Scenario:** Frontend is hosted on Hostinger, only backend needs to be deployed to Render for contact form functionality.

## 🎯 Quick Deployment Steps

### 1. Push Code to GitHub
```powershell
git add .
git commit -m "Update config for backend-only Render deployment"
git push
```

### 2. Deploy to Render

#### Option A: Using render.yaml (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository: `AbinVarghexe/Blaupunkt`
4. Render will detect `render.yaml` and create the backend service
5. Click **"Apply"**

#### Option B: Manual Setup
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `AbinVarghexe/Blaupunkt`
4. Configure:
   - **Name:** `blaupunkt-backend`
   - **Region:** Oregon (or closest to you)
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node mailserver.js`
   - **Plan:** Free

### 3. Set Environment Variables in Render

**CRITICAL:** Add these in Render Dashboard → Your Service → Environment tab:

```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=Blaupunkt@ev123
DESTINATION_EMAIL=info@blaupunkt-ev.com
PORT=5000
VITE_DOMAIN=https://blaupunkt-ev.com
```

### 4. Get Your Backend URL

After deployment completes, you'll get a URL like:
```
https://blaupunkt-backend.onrender.com
```

Test it:
```bash
https://blaupunkt-backend.onrender.com/api/health
```

### 5. Update Frontend on Hostinger

Update your frontend's API configuration to point to the Render backend:

**In your Hostinger frontend environment/config:**
```javascript
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

Or if you're building locally and uploading to Hostinger:
```powershell
# Update .env.production
VITE_API_URL=https://blaupunkt-backend.onrender.com

# Build with production config
npm run build

# Upload the 'dist' folder to Hostinger
```

### 6. Setup Keep-Alive (Prevent Sleep)

The GitHub Actions workflow will automatically keep your backend alive:
- File: `.github/workflows/keep-backend-alive.yml`
- Runs every 5 minutes
- Pings `/api/health` endpoint

**Optional:** Add `BACKEND_URL` secret in GitHub:
1. Go to GitHub Repository → Settings → Secrets and Variables → Actions
2. Add new secret:
   - Name: `BACKEND_URL`
   - Value: `https://blaupunkt-backend.onrender.com`

## 🧪 Testing

### Test Backend Health
```bash
curl https://blaupunkt-backend.onrender.com/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

### Test Contact Form
From your Hostinger frontend:
1. Open the contact form
2. Fill in details
3. Submit
4. Check `info@blaupunkt-ev.com` for the email

## 🔒 CORS Configuration

Your backend is already configured to accept requests from your Hostinger domain:

**In `backend/mailserver.js`:**
```javascript
app.use(cors({
  origin: process.env.VITE_DOMAIN || '*',
  credentials: true
}));
```

This will allow `https://blaupunkt-ev.com` to make API calls to the Render backend.

## 📊 Monitoring

### Render Dashboard
- View logs: Render Dashboard → blaupunkt-backend → Logs
- Check metrics: Dashboard → Metrics

### GitHub Actions
- View workflow runs: GitHub → Actions tab
- See keep-alive status and logs

## ⚠️ Important Notes

1. **Free Tier Limitations:**
   - Backend sleeps after 15 minutes of inactivity
   - GitHub Actions keeps it alive every 5 minutes
   - First request after sleep may take 30-60 seconds

2. **SMTP Credentials:**
   - Never commit credentials to Git
   - Set them only in Render Dashboard
   - Already configured for `info@blaupunkt-ev.com`

3. **CORS:**
   - Backend accepts requests from `https://blaupunkt-ev.com`
   - Update `VITE_DOMAIN` if your domain changes

## 🚀 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Environment variables set in Render Dashboard
- [ ] Backend URL obtained (e.g., `https://blaupunkt-backend.onrender.com`)
- [ ] Health check working (`/api/health` returns 200)
- [ ] Frontend updated with backend URL
- [ ] Contact form tested and working
- [ ] Email received at `info@blaupunkt-ev.com`
- [ ] GitHub Actions workflow running
- [ ] Backend stays alive (check after 20 minutes)

## 🆘 Troubleshooting

### Contact Form Not Working
1. Check browser console for errors
2. Verify API URL in frontend config
3. Check Render logs for errors
4. Test `/api/health` endpoint directly

### Email Not Sending
1. Check Render logs for SMTP errors
2. Verify SMTP credentials in Render Dashboard
3. Test with `/api/debug-env` endpoint (remove in production)
4. Check Hostinger email settings

### Backend Sleeping
1. Verify GitHub Actions workflow is running
2. Check workflow logs in GitHub Actions tab
3. Manually trigger workflow to test

## 📚 Related Documentation

- [Main Deployment Guide](./RENDER_DEPLOYMENT_GUIDE.md)
- [Mail Setup Guide](../setup/MAIL_SETUP_GUIDE.md)
- [Keep-Alive Guide](../setup/KEEP_ALIVE_GUIDE.md)
- [GitHub Actions Keep-Alive](../setup/GITHUB_ACTIONS_KEEPALIVE.md)
