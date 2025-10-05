# Quick Reference - Hostinger Deployment

## 🔑 FTP Credentials

```
FTP Host:     ftp://153.92.9.132
Username:     u966003410
Port:         21
Directory:    public_html
Password:     [Set in Hostinger hPanel]
```

## 🌐 Server Information

```
Server IP:    153.92.9.132
Nameservers:  ns1.dns-parking.com
              ns2.dns-parking.com
```

## 🚀 GitHub Actions Secrets Required

Add these in GitHub Repository → Settings → Secrets and variables → Actions:

```
FTP_SERVER              = ftp://153.92.9.132
FTP_USERNAME            = u966003410
FTP_PASSWORD            = [Your FTP password]
VITE_WHATSAPP_NUMBER    = 971558882595
VITE_WHATSAPP_MESSAGE   = Hello! I would like to know more about your products.
```

## 📝 DNS Records for Custom Domain

### Option 1: Nameservers (Recommended)
```
ns1.dns-parking.com
ns2.dns-parking.com
```

### Option 2: A Records
```
Type: A    Name: @      Value: 153.92.9.132    TTL: 14400
Type: A    Name: www    Value: 153.92.9.132    TTL: 14400
```

## 🔄 Git Commands

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/blaupunkt-ev.git
git push -u origin master

# Daily workflow
git add .
git commit -m "Update: Your message here"
git push origin master
```

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🔍 Verify Deployment

### Check GitHub Actions
1. Go to repository → Actions tab
2. Watch workflow run
3. Should complete in 2-4 minutes

### Check Website
- By IP: http://153.92.9.132
- By domain: https://blaupunkt-ev.com

## 🐛 Quick Troubleshooting

### Deployment fails?
- Check GitHub Secrets are added correctly
- Verify FTP password is correct
- Check GitHub Actions logs for errors

### Website not updating?
- Clear browser cache (Ctrl+Shift+R)
- Wait 2-3 minutes for server cache
- Check Hostinger File Manager

### Routes showing 404?
- Ensure .htaccess is in public folder
- Rebuild and redeploy

## 📞 Support Links

- Hostinger hPanel: https://hpanel.hostinger.com
- GitHub Actions Docs: https://docs.github.com/actions
- Check DNS Propagation: https://www.whatsmydns.net

## ⚡ Emergency Rollback

```bash
# If deployment breaks site
git revert HEAD
git push origin master

# Or deploy specific commit
git checkout COMMIT_HASH
git push -f origin master
```

---

*Keep this file handy for quick reference during deployment tasks.*
