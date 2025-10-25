# Keep Render Backend Alive

## Problem
Render's free tier puts services to sleep after 15 minutes of inactivity. The first request after sleep takes 30+ seconds to wake up.

## Solution
We've implemented **two options** to keep your backend alive:

---

## Option 1: GitHub Actions (Automated) ✅ RECOMMENDED

**Already Set Up!** A GitHub Action automatically pings your backend every 5-12 minutes.

### How It Works
- Runs every 5-12 minutes automatically
- Pings the health check endpoint (`/api/health`)
- Keeps Render awake 24/7
- Completely free (uses GitHub's free tier)
- No external services needed!

### Quick Start
1. Workflows are already in `.github/workflows/`
2. Just commit and push:
   ```powershell
   git add .github/workflows/
   git commit -m "Add keep-alive workflows"
   git push
   ```
3. Go to GitHub → **Actions** tab to verify it's running

### File Locations
- **Simple:** `.github/workflows/keep-backend-alive.yml`
- **Advanced:** `.github/workflows/keep-alive-advanced.yml` (with monitoring)

### Configuration
After deploying to Render, optionally add your backend URL as a secret:
1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Add secret:
   - Name: `BACKEND_URL`
   - Value: `https://blaupunkt-backend.onrender.com`

📚 **Detailed Guide:** See `GITHUB_ACTIONS_KEEPALIVE.md` for full documentation!

### Manual Trigger
Test it anytime:
1. Go to your GitHub repository
2. Click **Actions** tab
3. Select **Keep Render Backend Alive**
4. Click **Run workflow**

---

## Option 2: UptimeRobot (External Service)

**Alternative free option** if you prefer external monitoring.

### Setup (5 minutes)

1. **Sign up at [UptimeRobot](https://uptimerobot.com)** (Free account)

2. **Add New Monitor:**
   - Monitor Type: **HTTP(s)**
   - Friendly Name: `Blaupunkt Backend`
   - URL: `https://your-render-url.onrender.com/api/health`
   - Monitoring Interval: **5 minutes** (free tier)

3. **Enable Alerts (Optional):**
   - Add your email
   - Get notified if backend goes down

### Benefits
- More frequent checks (every 5 minutes)
- Email alerts if backend is down
- Status page you can share
- Mobile app available

---

## Health Check Endpoint

We've added a health check endpoint to your backend:

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-12T10:30:00.000Z",
  "message": "Backend is alive!"
}
```

**Test it locally:**
```powershell
curl http://localhost:5000/api/health
```

**Test after deployment:**
```powershell
curl https://your-render-url.onrender.com/api/health
```

---

## Comparison

| Feature | GitHub Actions | UptimeRobot |
|---------|---------------|-------------|
| **Cost** | Free | Free |
| **Interval** | 12 minutes | 5 minutes (free tier) |
| **Setup** | ✅ Already done! | 5 minutes |
| **Alerts** | No | Yes (email/SMS) |
| **Status Page** | No | Yes |
| **Reliability** | GitHub's infrastructure | Dedicated monitoring service |

---

## Which Should You Use?

**Use GitHub Actions (Option 1)** if:
- ✅ You want zero setup (already configured!)
- ✅ You don't need instant alerts
- ✅ 12-minute intervals are acceptable

**Use UptimeRobot (Option 2)** if:
- ✅ You want more frequent checks (5 min)
- ✅ You want email alerts if backend goes down
- ✅ You want a public status page
- ✅ You want mobile app notifications

**Use Both** for maximum reliability! 🚀

---

## After Deployment

### Step 1: Update GitHub Action URL
Edit `.github/workflows/keep-alive.yml` and replace:
```yaml
https://blaupunkt-backend.onrender.com/api/health
```
With your actual Render URL.

### Step 2: Commit and Push
```powershell
git add .github/workflows/keep-alive.yml
git commit -m "Update backend URL in keep-alive workflow"
git push
```

### Step 3: Verify It's Working
1. Go to GitHub → **Actions** tab
2. Wait for the next scheduled run (max 12 minutes)
3. Check the logs to confirm successful pings

---

## Monitoring

### Check GitHub Actions
```
GitHub Repo → Actions → Keep Render Backend Alive
```

You'll see:
- ✅ Green checkmarks = Backend is responding
- ❌ Red X = Backend is down (investigate)
- Timestamp of each ping

### Check Render Logs
```
Render Dashboard → Your Service → Logs
```

You'll see health check requests every 12 minutes:
```
GET /api/health 200
```

---

## Disable Keep-Alive (If Needed)

### Disable GitHub Action
Edit `.github/workflows/keep-alive.yml` and comment out the schedule:
```yaml
on:
  # schedule:
  #   - cron: '*/12 * * * *'
  workflow_dispatch:
```

Or delete the file entirely.

### Disable UptimeRobot
- Login to UptimeRobot
- Pause or delete the monitor

---

## Cost Analysis

### Free Tier Limits

**GitHub Actions (Free):**
- 2,000 minutes/month for public repos
- Unlimited for public repos (our case)
- Each ping takes ~5 seconds
- Total usage: ~30 minutes/month
- ✅ Well within free limits

**Render Free Tier:**
- 750 hours/month (31 days × 24 hours = 744 hours)
- Keep-alive keeps it running 24/7
- ✅ Stays within free tier

**UptimeRobot:**
- 50 monitors (free tier)
- 5-minute interval
- Email alerts
- ✅ Completely free

---

## Troubleshooting

### GitHub Action Not Running
- Check GitHub → **Actions** tab for errors
- Verify YAML syntax is correct
- Ensure repository has Actions enabled

### Backend Still Sleeping
- Check if GitHub Action is actually running
- Verify the backend URL is correct
- Try reducing interval to `*/10 * * * *` (every 10 min)

### Too Many Requests
- Render free tier has no request limits
- GitHub Actions has generous free tier
- No issues expected

---

## Summary

✅ **GitHub Action created** - Pings every 12 minutes
✅ **Health endpoint added** - `/api/health`
✅ **UptimeRobot option** - Available as alternative
✅ **Zero cost** - Both options are free
✅ **24/7 uptime** - Backend stays awake

Your Render backend will now stay alive and respond instantly to contact form submissions! 🎉
