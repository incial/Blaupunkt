# Deploy Backend to Railway (SMTP-Friendly Alternative)

## Why Railway?

**Problem with Render:** Blocks SMTP ports (465, 587)  
**Solution: Railway** - No SMTP restrictions!

### Benefits:
- ✅ **Free tier** - $5 credit/month (backend uses ~$1-2)
- ✅ **SMTP works** - No port blocking
- ✅ **No sleep time** - Always on
- ✅ **GitHub integration** - Auto-deploy on push
- ✅ **Same code** - No changes needed
- ✅ **Fast deployment** - 2-3 minutes
- ✅ **Keep Hostinger SMTP** - Works perfectly!

## 🚀 Deployment Steps (10 Minutes)

### Step 1: Sign Up for Railway (2 minutes)

1. Go to [Railway.app](https://railway.app/)
2. Click **"Start a New Project"** or **"Login with GitHub"**
3. Authorize Railway to access your GitHub
4. No credit card required for free tier!

### Step 2: Create New Project (3 minutes)

1. Click **"+ New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose repository: **`AbinVarghexe/Blaupunkt`**
4. Railway will detect it's a Node.js project

### Step 3: Configure Service (2 minutes)

1. After project is created, click on the service
2. Go to **"Settings"** tab
3. Configure:
   - **Service Name:** `blaupunkt-backend`
   - **Root Directory:** `backend`
   - **Start Command:** `node mailserver.js`
   - **Build Command:** `npm install`

4. Click **"Save"**

### Step 4: Set Environment Variables (3 minutes)

1. Go to **"Variables"** tab
2. Click **"+ New Variable"**
3. Add these **one by one**:

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

**Important:** Add each variable separately:
- Click **"+ New Variable"**
- Enter **Variable Name** (e.g., `SMTP_HOST`)
- Enter **Value** (e.g., `smtp.hostinger.com`)
- Click **"Add"**
- Repeat for all 8 variables

4. Railway will automatically redeploy after adding variables

### Step 5: Get Your Railway URL (1 minute)

1. Go to **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. You'll get a URL like:
   ```
   https://blaupunkt-backend-production.up.railway.app
   ```
5. **Copy this URL** - you'll need it for frontend

### Step 6: Test the Backend

**Test health endpoint:**
```powershell
Invoke-RestMethod -Uri "https://your-railway-url.up.railway.app/api/health"
```

**Test contact endpoint:**
```powershell
$body = @{
    fullName = "Test User"
    email = "test@example.com"
    phone = "+1234567890"
    message = "Test from Railway"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://your-railway-url.up.railway.app/api/contact" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

**Expected:** Email should be sent successfully! ✅

### Step 7: Update Frontend API URL

**Update `.env.production`:**
```bash
VITE_API_URL=https://your-railway-url.up.railway.app
```

**Rebuild frontend:**
```powershell
npm run build
```

**Upload to Hostinger:**
- Upload all contents of `dist/` folder
- Contact form will now use Railway backend

## 🔧 Railway Configuration File (Optional)

Create `railway.json` in backend folder for better control:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install"
  },
  "deploy": {
    "startCommand": "node mailserver.js",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## 📊 Monitoring & Logs

### View Logs
1. Go to Railway project
2. Click on **blaupunkt-backend** service  
3. Click **"Logs"** tab
4. See real-time logs

### Check Metrics
1. Go to **"Metrics"** tab
2. View:
   - CPU usage
   - Memory usage
   - Network traffic
   - Deployment history

## 💰 Cost Breakdown

**Free Tier:**
- $5 credit per month
- Backend typically uses: $1-2/month
- **Plenty for your contact form!**

**Usage estimate:**
- Always-on backend: ~$1.50/month
- You have $3.50 left for other projects
- No credit card required

**If you exceed:**
- Add $5 for 1000 execution hours
- Backend will keep running

## 🎯 Advantages Over Render

| Feature | Railway | Render (Free) |
|---------|---------|---------------|
| SMTP Support | ✅ Full support | ❌ Blocked |
| Sleep Time | ❌ None | ✅ After 15 min |
| Monthly Credit | $5 | 750 hours |
| Auto-deploy | ✅ Yes | ✅ Yes |
| Custom Domain | ✅ Yes | ✅ Yes |
| Logs | ✅ Real-time | ✅ Real-time |

## 🔄 Auto-Deploy from GitHub

Railway automatically deploys when you push to GitHub:

1. Make changes to backend code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update backend"
   git push
   ```
3. Railway automatically detects and deploys
4. Takes 2-3 minutes

## 🆘 Troubleshooting

### Deployment Failed
- Check **Logs** tab for errors
- Ensure all environment variables are set
- Verify `backend` folder exists in repo

### SMTP Still Not Working
- Double-check SMTP credentials in Variables tab
- Test SMTP settings in Hostinger hPanel
- Check Railway logs for specific error

### Port Issues
- Railway automatically assigns port
- Backend reads from `process.env.PORT`
- Don't hardcode port 5000

### Domain Not Working
- Click "Generate Domain" in Settings → Networking
- Wait 30 seconds for DNS propagation
- Use HTTPS (not HTTP)

## ✅ Final Checklist

After deployment:

- [ ] Railway project created
- [ ] Backend service deployed
- [ ] All 8 environment variables set
- [ ] Domain generated
- [ ] Health endpoint returns 200
- [ ] Contact endpoint sends email
- [ ] Email received at info@blaupunkt-ev.com
- [ ] Frontend `.env.production` updated
- [ ] Frontend rebuilt (`npm run build`)
- [ ] Frontend uploaded to Hostinger
- [ ] Contact form tested on live site

## 🎉 Success!

Once all tests pass:
1. Your backend is on Railway (SMTP works!)
2. Your frontend is on Hostinger
3. Contact form delivers emails perfectly
4. No more SMTP timeout errors
5. No sleep time - always responsive

## 🔗 Useful Links

- [Railway Dashboard](https://railway.app/dashboard)
- [Railway Docs](https://docs.railway.app/)
- [Pricing](https://railway.app/pricing)
- [Status Page](https://status.railway.app/)

## 📝 Notes

- Railway has been very reliable for SMTP
- Free tier is generous for small projects
- Can add custom domain later if needed
- Supports environment branching (preview deployments)
- Great for Node.js applications

---

**Estimated Time:** 10-15 minutes total  
**Difficulty:** Easy (if you've used Render, it's the same!)  
**Result:** Working contact form with SMTP! 🎊
