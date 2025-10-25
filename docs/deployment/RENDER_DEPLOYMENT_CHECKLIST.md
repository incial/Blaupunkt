# 🚀 Render Deployment - Quick Checklist

## ✅ Pre-Deployment

- [ ] Code is working locally (test contact form)
- [ ] All changes committed to Git
- [ ] Code pushed to GitHub repository
- [ ] SMTP email credentials ready (from Hostinger)

## 🔧 Backend Deployment (5-10 min)

1. **Create Render Account**
   - [ ] Sign up at [render.com](https://render.com) (free)
   - [ ] Connect your GitHub account

2. **Create Web Service**
   - [ ] Click "New +" → "Web Service"
   - [ ] Select your GitHub repo
   - [ ] Name: `blaupunkt-backend`
   - [ ] Runtime: `Node`
   - [ ] Root Directory: `backend`
   - [ ] Build Command: `npm install`
   - [ ] Start Command: `node mailserver.js`
   - [ ] Plan: `Free`

3. **Add Environment Variables**
   ```
   NODE_ENV=production
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=info@blaupunkt-ev.com
   SMTP_PASS=[your-password-here]
   DESTINATION_EMAIL=info@blaupunkt-ev.com
   PORT=5000
   VITE_DOMAIN=https://blaupunkt-ev.com
   ```
   - [ ] All environment variables added
   - [ ] SMTP password is correct

4. **Deploy & Test**
   - [ ] Click "Create Web Service"
   - [ ] Wait for deployment (2-5 minutes)
   - [ ] Copy your backend URL (e.g., `https://blaupunkt-backend.onrender.com`)
   - [ ] Test health endpoint: Visit `YOUR_URL/api/health`
   - [ ] Should see: `{"status":"ok",...}`

## 🎨 Frontend Deployment (5-10 min)

1. **Update Production Config**
   - [ ] Edit `.env.production`
   - [ ] Set `VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com`
   - [ ] Commit and push changes

2. **Create Static Site**
   - [ ] Click "New +" → "Static Site"
   - [ ] Select same GitHub repo
   - [ ] Name: `blaupunkt-frontend`
   - [ ] Build Command: `npm install && npm run build`
   - [ ] Publish Directory: `dist`
   - [ ] Plan: `Free`

3. **Add Environment Variables** (optional)
   ```
   VITE_API_URL=https://blaupunkt-backend.onrender.com
   ```
   - [ ] Environment variable added (if needed)

4. **Deploy & Test**
   - [ ] Click "Create Static Site"
   - [ ] Wait for build (3-5 minutes)
   - [ ] Copy your frontend URL
   - [ ] Visit the URL - website should load!

## 🧪 Testing (5 min)

- [ ] **Backend health check works**
  ```powershell
  Invoke-RestMethod -Uri 'https://YOUR-BACKEND.onrender.com/api/health'
  ```

- [ ] **Frontend loads correctly**
  - All pages accessible
  - Images load
  - No console errors

- [ ] **Contact form works end-to-end**
  - Fill out form on Contact page
  - Submit successfully
  - Success message appears
  - Email received in inbox

## 🔄 Keep Backend Awake (Optional but Recommended)

- [ ] Sign up at [uptimerobot.com](https://uptimerobot.com) (free)
- [ ] Create new monitor
- [ ] URL: `https://YOUR-BACKEND.onrender.com/api/health`
- [ ] Interval: Every 5 minutes
- [ ] This prevents backend from sleeping!

## 🌐 Custom Domain (Optional)

**For Backend:**
- [ ] In Render: Settings → Custom Domains
- [ ] Add: `api.blaupunkt-ev.com`
- [ ] Update DNS in Hostinger with CNAME record

**For Frontend:**
- [ ] In Render: Settings → Custom Domains
- [ ] Add: `www.blaupunkt-ev.com` and `blaupunkt-ev.com`
- [ ] Update DNS in Hostinger with A/CNAME records
- [ ] Wait for SSL certificate (5-10 minutes)

## 📊 Post-Deployment

- [ ] Monitor logs in Render dashboard
- [ ] Test from different devices
- [ ] Verify emails are not going to spam
- [ ] Share URL with team/client

## 🐛 Troubleshooting

**Backend won't start:**
- Check logs in Render dashboard
- Verify all environment variables are set
- Check `node mailserver.js` command works locally

**Frontend shows blank page:**
- Check browser console for errors
- Verify build completed successfully in Render logs
- Check `VITE_API_URL` points to correct backend

**Contact form not working:**
- Check backend logs for errors
- Verify SMTP credentials are correct
- Test backend endpoint directly with curl/PowerShell

**Backend sleeps/slow:**
- Set up UptimeRobot monitor
- Or upgrade to paid plan ($7/month)

## 📝 Your URLs

After deployment, note these down:

```
Backend:  https://blaupunkt-backend.onrender.com
Frontend: https://blaupunkt-frontend.onrender.com
Health:   https://blaupunkt-backend.onrender.com/api/health
Contact:  https://blaupunkt-backend.onrender.com/api/contact
```

## 💡 Cost

- **Total: $0/month** (using free tier)
- Free tier includes:
  - 750 hours/month per service
  - Automatic HTTPS
  - Auto-deploy from GitHub
  - Global CDN (for static sites)

**Limitations:**
- Backend spins down after 15 min inactivity
- 30-60s cold start when waking up
- 1 free web service at a time

**Upgrade to $7/month for:**
- Always-on backend
- No cold starts
- Better performance

---

## ✅ Deployment Complete!

Once all checkboxes are ticked, your Blaupunkt EV website is live on Render! 🎉

**Next Steps:**
1. Share the URL
2. Monitor for issues
3. Consider custom domain
4. Set up keep-alive monitoring

**Need help?** See `RENDER_DEPLOYMENT_GUIDE.md` for detailed instructions.

---

**Last Updated:** October 25, 2025
