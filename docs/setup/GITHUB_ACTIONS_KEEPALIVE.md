# 🤖 GitHub Actions Keep-Alive Setup Guide

## 🎯 What This Does

Uses GitHub Actions to automatically ping your Render backend every 5 minutes, keeping it awake 24/7 **completely free** without any external services!

## ✅ Why GitHub Actions > UptimeRobot?

| Feature | GitHub Actions | UptimeRobot |
|---------|---------------|-------------|
| **Cost** | 100% Free (2000 min/month) | Free tier available |
| **Setup** | Already in your repo | Separate account needed |
| **Customization** | Full control over checks | Limited options |
| **Notifications** | Built-in (email, issues) | Email only (free) |
| **Privacy** | Your own infrastructure | Third-party service |
| **Integration** | Native Git workflow | External service |

## 📦 What's Included

I've created 2 workflows for you:

1. **`keep-backend-alive.yml`** - Simple, lightweight (Recommended)
2. **`keep-alive-advanced.yml`** - Advanced with monitoring & logging

Both are ready to use! Pick one or use both.

## 🚀 Quick Setup (3 Steps)

### Step 1: Commit and Push the Workflows

```powershell
git add .github/workflows/
git commit -m "Add GitHub Actions keep-alive workflows"
git push
```

### Step 2: Set Backend URL (Optional but Recommended)

After deploying to Render, update the backend URL:

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add:
   ```
   Name: BACKEND_URL
   Value: https://blaupunkt-backend.onrender.com
   ```
   (Replace with your actual Render URL)

**Why?** This lets you change the URL without modifying the workflow file.

### Step 3: Verify It's Working

1. Go to your repo → **Actions** tab
2. You'll see "Keep Render Backend Alive" workflow
3. It will run automatically every 5 minutes
4. You can also click **"Run workflow"** to test it immediately

✅ **Done!** Your backend will stay alive 24/7!

## 📊 How It Works

```
Every 5 minutes:
  ├─ GitHub Actions triggers workflow
  ├─ Pings https://your-backend.onrender.com/api/health
  ├─ Checks if response is HTTP 200
  ├─ Optionally tests /api/contact endpoint
  └─ Logs success or failure
```

**Result:** Render never puts your backend to sleep!

## ⚙️ Customization Options

### Change Ping Frequency

Edit `.github/workflows/keep-backend-alive.yml`:

```yaml
schedule:
  # Every 5 minutes (minimum GitHub allows)
  - cron: '*/5 * * * *'
  
  # Every 10 minutes
  - cron: '*/10 * * * *'
  
  # Every 14 minutes (optimal for free tier)
  - cron: '*/14 * * * *'
```

**Note:** GitHub Actions minimum is 5 minutes. Render free tier sleeps after 15 minutes of inactivity, so any interval under 15 minutes works!

### Add Notifications on Failure

Add to the workflow after the ping step:

```yaml
- name: Notify on Failure
  if: failure()
  run: |
    # Send to Discord webhook
    curl -X POST "${{ secrets.DISCORD_WEBHOOK }}" \
      -H "Content-Type: application/json" \
      -d '{"content":"🚨 Backend health check failed!"}'
```

### Add Multiple Endpoints

Test more than just `/api/health`:

```yaml
- name: Ping Multiple Endpoints
  run: |
    endpoints=("/api/health" "/api/contact")
    for endpoint in "${endpoints[@]}"; do
      curl "$BACKEND_URL$endpoint"
    done
```

## 📈 Monitor Your Workflow

### View Workflow Runs

1. Go to **Actions** tab in your GitHub repo
2. Click on "Keep Render Backend Alive"
3. See all past runs with timestamps and status

### Check Logs

1. Click on any workflow run
2. Click "keep-alive" job
3. Expand steps to see detailed logs
4. See response times and status codes

### Example Log Output

```
🏓 Pinging backend to keep it alive...
✅ Backend is alive! (HTTP 200)
🏓 Testing contact endpoint...
📧 Contact endpoint responded with HTTP 200
⏰ Last ping: 2025-10-25 14:35:00
🌍 Keeping backend warm and ready!
```

## 🎛️ Advanced Features

### Use the Advanced Workflow

The `keep-alive-advanced.yml` includes:

- ✅ Response time tracking
- ✅ Detailed health check parsing
- ✅ Automatic failure reporting
- ✅ Structured logging
- ✅ Easy to add notifications

To use it:

```powershell
# Rename or delete the simple one if you prefer advanced
git mv .github/workflows/keep-backend-alive.yml .github/workflows/keep-backend-alive.yml.backup
git commit -m "Switch to advanced keep-alive workflow"
git push
```

### Add Health Check Dashboard

Create a GitHub Issue on failure:

```yaml
- name: Create Issue on Failure
  if: failure()
  uses: actions/github-script@v6
  with:
    script: |
      github.rest.issues.create({
        owner: context.repo.owner,
        repo: context.repo.repo,
        title: '🚨 Backend Health Check Failed',
        body: 'Backend is not responding. Check Render logs.'
      })
```

## 💰 GitHub Actions Free Tier Limits

**Free for public repositories:** Unlimited minutes
**Free for private repositories:** 2,000 minutes/month

**How much does keep-alive use?**
- Each run: ~30 seconds
- Frequency: Every 5 minutes = 12 runs/hour = 288 runs/day
- Daily usage: 288 × 0.5 min = 144 minutes/day
- Monthly usage: ~4,320 minutes/month

⚠️ **This exceeds free tier for private repos!**

**Solutions:**
1. Make your repo public (unlimited)
2. Use every 14 minutes instead: `cron: '*/14 * * * *'`
   - Daily: ~103 runs × 0.5 min = ~52 minutes/day
   - Monthly: ~1,560 minutes/month ✅ Within free tier!
3. Upgrade to paid GitHub ($4/month for 3,000 minutes)

## 🔄 Comparison: Different Keep-Alive Methods

### Option 1: GitHub Actions (Current Setup)

**Pros:**
- ✅ Free (for public repos)
- ✅ Integrated with your codebase
- ✅ Full customization
- ✅ Easy to monitor

**Cons:**
- ⚠️ Limited minutes for private repos
- ⚠️ Minimum 5-minute interval

### Option 2: UptimeRobot

**Pros:**
- ✅ Free tier available
- ✅ 5-minute checks
- ✅ Email notifications
- ✅ Uptime monitoring dashboard

**Cons:**
- ⚠️ External service
- ⚠️ Limited free monitors (50)
- ⚠️ Less customization

### Option 3: Render Cron Job (Paid)

**Pros:**
- ✅ Native Render feature
- ✅ Reliable
- ✅ Can run complex tasks

**Cons:**
- ❌ Not available on free tier
- ❌ Requires paid plan

### Option 4: Netlify Functions / Vercel Cron (If using these for frontend)

**Pros:**
- ✅ Serverless
- ✅ Integrated with frontend hosting
- ✅ Free tier available

**Cons:**
- ⚠️ Only if you use Netlify/Vercel for frontend
- ⚠️ Limited free invocations

## 📝 Recommended Setup

**For Public Repositories:**
```yaml
✅ Use: keep-backend-alive.yml
✅ Frequency: */5 (every 5 minutes)
✅ Cost: $0/month
```

**For Private Repositories:**
```yaml
✅ Use: keep-backend-alive.yml
✅ Frequency: */14 (every 14 minutes)
✅ Cost: $0/month (within free tier)
```

**For Production/Critical Apps:**
```yaml
✅ Use: keep-alive-advanced.yml
✅ Frequency: */5 (every 5 minutes)
✅ Add: Notifications (Discord/Slack/Email)
✅ Consider: Paid monitoring service for redundancy
✅ Cost: $0-4/month (depending on setup)
```

## 🐛 Troubleshooting

### Workflow Not Running

**Check:**
1. Workflows are in `.github/workflows/` folder
2. YAML syntax is valid
3. You've pushed to `master` branch
4. Actions are enabled in repo settings

### Workflow Failing

**Common Issues:**
1. Backend URL incorrect → Update `BACKEND_URL` secret
2. Backend is actually down → Check Render logs
3. Network timeout → Increase curl timeout in workflow

### How to Disable

Temporarily disable without deleting:

1. Go to **Actions** tab
2. Click workflow name
3. Click **"..."** menu
4. Select **"Disable workflow"**

Or delete the file:
```powershell
git rm .github/workflows/keep-backend-alive.yml
git commit -m "Disable keep-alive workflow"
git push
```

## ✅ Verification Checklist

- [ ] Workflow files committed and pushed
- [ ] Can see workflows in GitHub Actions tab
- [ ] `BACKEND_URL` secret added (optional but recommended)
- [ ] Workflow runs successfully (check Actions tab)
- [ ] Backend stays alive (no cold starts)
- [ ] Monitor workflow runs for first 24 hours

## 🎉 Next Steps

1. **Deploy to Render** (see `RENDER_DEPLOYMENT_GUIDE.md`)
2. **Update `BACKEND_URL` secret** with your Render URL
3. **Enable workflow** and verify it runs
4. **Monitor for 24 hours** to ensure everything works
5. **Optional:** Add notifications for failures

## 📞 Need Help?

- GitHub Actions Docs: https://docs.github.com/en/actions
- Cron Syntax: https://crontab.guru/
- Your deployment guide: `RENDER_DEPLOYMENT_GUIDE.md`

---

**Status:** ✅ GitHub Actions keep-alive ready!
**Cost:** $0/month (free tier)
**Maintenance:** Zero - runs automatically!

**Last Updated:** October 25, 2025
