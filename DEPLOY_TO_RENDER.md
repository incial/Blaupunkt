# 🚀 Quick Render Deployment Checklist

## Before Deploying

- [x] SMTP credentials tested locally
- [x] Password updated: `Mail@Blaupunkt123`
- [x] Local contact form working
- [ ] Changes committed to git
- [ ] Pushed to GitHub

## Deployment Steps

### 1. Commit & Push Changes
```powershell
git add .
git commit -m "chore: update SMTP credentials for production"
git push origin master
```

### 2. Set Environment Variables in Render

**Go to:** https://dashboard.render.com/ → blaupunkt-backend → Environment

**Add/Update:**
```
SMTP_PASS=Mail@Blaupunkt123
```

**All Required Variables:**
- `NODE_ENV=production` ✅
- `SMTP_HOST=smtp.hostinger.com` ✅
- `SMTP_PORT=465` ✅
- `SMTP_USER=info@blaupunkt-ev.com` ✅
- `SMTP_PASS=Mail@Blaupunkt123` ⚠️ **SET THIS MANUALLY**
- `DESTINATION_EMAIL=info@blaupunkt-ev.com` ✅
- `PORT=5000` ✅
- `VITE_DOMAIN=https://blaupunkt-ev.com` ✅

### 3. Deploy

**Option A: Auto-Deploy (if enabled)**
- Service deploys automatically on git push
- Wait 2-3 minutes

**Option B: Manual Deploy**
- Dashboard → blaupunkt-backend → Manual Deploy
- Click "Deploy latest commit"
- Wait 2-3 minutes

### 4. Test Production

```powershell
.\scripts\test-production-backend.ps1
```

**Or test manually:**
```powershell
# Health check
Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/health"

# Contact form test
$body = @{
    fullName = "Test"
    email = "test@example.com"
    phone = "+1234567890"
    message = "Test"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/contact" `
    -Method POST -ContentType "application/json" -Body $body
```

### 5. Verify Email Received

- Go to: https://webmail.hostinger.com/
- Login: `info@blaupunkt-ev.com` / `Mail@Blaupunkt123`
- Check inbox for test email

## Success Indicators

✅ Service status: **Live** (green)
✅ Health endpoint: Returns `{"status":"ok"}`
✅ Contact endpoint: Returns `{"success":true}`
✅ Test email received in inbox
✅ No errors in logs

## Troubleshooting

**If 500 error:**
- Check SMTP_PASS is exactly: `Mail@Blaupunkt123`
- Verify in Render Dashboard → Environment tab

**If service sleeping:**
- Free tier sleeps after 15 minutes
- First request wakes it up (may take 30 seconds)
- Use GitHub Actions keep-alive (already configured)

**If CORS error:**
- Verify VITE_DOMAIN is `https://blaupunkt-ev.com`
- Check frontend is making requests to correct URL

## Resources

📖 **Full Guide:** `docs/deployment/RENDER_PRODUCTION_DEPLOYMENT.md`
📖 **Troubleshooting:** `docs/FIX_500_ERROR_SMTP.md`
🔧 **Test Script:** `scripts/test-production-backend.ps1`

---

**Ready to deploy!** Follow steps 1-5 above. 🚀
