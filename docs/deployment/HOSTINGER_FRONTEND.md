# Frontend Deployment to Hostinger

**Your Setup:**
- ✅ Frontend: Hostinger (https://blaupunkt-ev.com)
- ✅ Backend: Render (https://blaupunkt-backend.onrender.com)

## 🚀 Quick Deployment

### Option 1: Using Build Script (Recommended)

**Windows (PowerShell):**
```powershell
.\scripts\build-for-hostinger.ps1
```

**Windows (Command Prompt):**
```cmd
.\scripts\build-for-hostinger.bat
```

This will:
1. Build the frontend with production settings
2. Configure API URL to point to Render backend
3. Generate the `dist` folder ready for upload

### Option 2: Manual Build

```powershell
# Build with production environment
npm run build
```

This uses `.env.production` which already points to:
- Backend: `https://blaupunkt-backend.onrender.com`
- Domain: `https://blaupunkt-ev.com`

## 📤 Upload to Hostinger

### Method 1: File Manager (Easiest)

1. **Login to Hostinger:**
   - Go to [Hostinger hPanel](https://hpanel.hostinger.com/)
   - Login with your credentials

2. **Open File Manager:**
   - Click on **File Manager** in hPanel
   - Navigate to your domain folder (usually `public_html` or `domains/blaupunkt-ev.com`)

3. **Upload Files:**
   - Upload ALL contents of the `dist` folder
   - **Important:** Upload the contents, NOT the dist folder itself
   - Files to upload:
     - `index.html`
     - `assets/` folder
     - `images/` folder (if any)
     - Any other files in `dist`

4. **Set Permissions:**
   - Ensure files have correct permissions (644 for files, 755 for folders)
   - File Manager usually sets these automatically

### Method 2: FTP (Advanced)

1. **Get FTP Credentials:**
   - Hostinger hPanel → **FTP Accounts**
   - Note: Hostname, Username, Password

2. **Connect with FTP Client** (e.g., FileZilla):
   - Host: Your FTP hostname (e.g., `ftp.blaupunkt-ev.com`)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)

3. **Upload:**
   - Navigate to your domain folder
   - Upload all contents from the `dist` folder
   - Overwrite existing files when prompted

### Method 3: Git Deployment (Advanced)

If Hostinger supports Git deployment:
```bash
# In your Hostinger terminal
git pull origin master
npm install
npm run build
# Copy dist files to public_html
```

## ⚙️ Configuration

### API URL Configuration

The production build automatically uses:
```javascript
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

**To verify after upload:**
1. Open browser console on your site
2. Check network tab when submitting contact form
3. API calls should go to `https://blaupunkt-backend.onrender.com/api/contact`

### Domain Configuration

Your `.env.production` is configured for:
```bash
VITE_DOMAIN=https://blaupunkt-ev.com
```

This ensures:
- CORS accepts requests from your domain
- Contact form works properly
- Backend recognizes your frontend

## 🧪 Testing After Deployment

### 1. Basic Site Test
```bash
# Visit your site
https://blaupunkt-ev.com
```

**Check:**
- ✅ Site loads properly
- ✅ Images display
- ✅ Navigation works
- ✅ No console errors

### 2. Contact Form Test

**Steps:**
1. Go to Contact page: `https://blaupunkt-ev.com/contact`
2. Fill in the form:
   - Full Name: Test User
   - Email: your-test@email.com
   - Phone: +1234567890
   - Message: Test message from Hostinger frontend

3. Submit and verify:
   - ✅ Success message appears
   - ✅ Check `info@blaupunkt-ev.com` for email
   - ✅ No errors in browser console

### 3. Backend Connection Test

**Browser Console:**
```javascript
// Test API endpoint
fetch('https://blaupunkt-backend.onrender.com/api/health')
  .then(r => r.json())
  .then(console.log)
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-25T...",
  "message": "Backend is alive!"
}
```

### 4. Network Inspection

**Open Browser DevTools → Network Tab:**
1. Submit contact form
2. Look for request to `/api/contact`
3. Verify:
   - URL: `https://blaupunkt-backend.onrender.com/api/contact`
   - Method: POST
   - Status: 200 OK
   - Response: `{"success": true, "message": "..."}`

## 🔧 Troubleshooting

### Contact Form Not Working

**Issue:** Form submission fails

**Solutions:**
1. **Check Console Errors:**
   ```
   F12 → Console tab → Look for errors
   ```

2. **Verify API URL:**
   - Check Network tab
   - Ensure requests go to `https://blaupunkt-backend.onrender.com`
   - Not `http://localhost:5000`

3. **Rebuild if needed:**
   ```powershell
   # Delete dist folder
   Remove-Item dist -Recurse -Force
   
   # Rebuild
   npm run build
   
   # Re-upload to Hostinger
   ```

4. **Check CORS:**
   - Backend must allow `https://blaupunkt-ev.com`
   - Already configured in `backend/mailserver.js`

### CORS Errors

**Issue:** "Access to fetch blocked by CORS policy"

**Solution:**
1. Ensure backend has correct VITE_DOMAIN in Render:
   ```
   VITE_DOMAIN=https://blaupunkt-ev.com
   ```

2. Check `backend/mailserver.js` includes your domain:
   ```javascript
   const allowedOrigins = [
       'https://blaupunkt-ev.com',
       // ...
   ];
   ```

3. Restart backend service in Render if changed

### Email Not Received

**Issue:** Form submits successfully but email not received

**Check:**
1. **Render Backend Logs:**
   - Render Dashboard → blaupunkt-backend → Logs
   - Look for email sending confirmation or errors

2. **SMTP Credentials:**
   - Verify in Render Dashboard → Environment
   - `SMTP_USER=info@blaupunkt-ev.com`
   - `SMTP_PASS=Blaupunkt@ev123`

3. **Spam Folder:**
   - Check spam/junk folder in `info@blaupunkt-ev.com`

4. **Hostinger Email Settings:**
   - Login to Hostinger
   - Check email account is active
   - Verify SMTP settings match backend config

### Backend Sleeping

**Issue:** First request takes 30+ seconds

**Solution:**
- GitHub Actions should keep it alive
- Check: GitHub → Actions → Keep Render Backend Alive
- Workflow runs every 5 minutes automatically

### Wrong API URL in Production

**Issue:** Production build still uses localhost

**Cause:** `.env.production` not being used

**Solution:**
```powershell
# Ensure .env.production exists and has:
VITE_API_URL=https://blaupunkt-backend.onrender.com

# Clear cache and rebuild
Remove-Item .vite -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item dist -Recurse -Force -ErrorAction SilentlyContinue
npm run build

# Verify in dist/index.html or built files
# Should NOT contain localhost
```

## 📁 File Structure on Hostinger

After upload, your Hostinger folder should look like:
```
public_html/  (or domains/blaupunkt-ev.com/)
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
├── images/  (if applicable)
└── other static assets
```

## 🔄 Update Workflow

When you make changes to the frontend:

1. **Make Changes Locally**
   ```powershell
   # Edit files in src/
   ```

2. **Test Locally**
   ```powershell
   npm run dev
   # Test at http://localhost:3000
   ```

3. **Build for Production**
   ```powershell
   .\scripts\build-for-hostinger.ps1
   # Or: npm run build
   ```

4. **Upload to Hostinger**
   - Use File Manager or FTP
   - Upload all contents from `dist` folder
   - Overwrite existing files

5. **Test Production**
   - Visit `https://blaupunkt-ev.com`
   - Test contact form
   - Verify changes are live

## 📊 Performance Tips

### Enable Caching in Hostinger

Add `.htaccess` to your Hostinger folder:
```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Enable CDN (Optional)

Hostinger offers free Cloudflare CDN:
1. Go to hPanel → Website → Manage
2. Enable Cloudflare CDN
3. Faster global load times

## 📚 Related Documentation

- [Backend Deployment Guide](./BACKEND_ONLY_RENDER.md)
- [Mail Setup Guide](../setup/MAIL_SETUP_GUIDE.md)
- [Project Organization](../PROJECT_ORGANIZATION.md)

## ✅ Deployment Checklist

Before deploying:
- [ ] Code tested locally (`npm run dev`)
- [ ] Production build successful (`npm run build`)
- [ ] `.env.production` has correct backend URL
- [ ] `dist` folder generated
- [ ] Backend deployed to Render
- [ ] Backend environment variables set

During deployment:
- [ ] All files uploaded to Hostinger
- [ ] File permissions correct (644/755)
- [ ] `.htaccess` configured (if needed)

After deployment:
- [ ] Site loads at `https://blaupunkt-ev.com`
- [ ] No console errors
- [ ] Contact form works
- [ ] Email received at `info@blaupunkt-ev.com`
- [ ] Backend connection verified
- [ ] HTTPS enabled

## 🆘 Support

If you encounter issues:

1. **Check Browser Console** (F12 → Console)
2. **Check Network Tab** (F12 → Network)
3. **Check Render Logs** (Render Dashboard)
4. **Test Backend Directly:**
   ```bash
   curl https://blaupunkt-backend.onrender.com/api/health
   ```

Your frontend is now configured and ready for Hostinger deployment! 🚀
