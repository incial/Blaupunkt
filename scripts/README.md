# 📜 Scripts Directory

This folder contains helpful scripts for testing, building, and deploying the Blaupunkt EV website.

---

## 🧪 Testing Scripts

### Test Hostinger SMTP Configuration

**Before deploying to Render**, test your Hostinger email credentials locally:

#### Option 1: PowerShell (Recommended)
```powershell
.\scripts\test-hostinger-smtp.ps1
```

#### Option 2: Double-Click (Windows)
```
Double-click: scripts\test-hostinger-smtp.bat
```

#### Option 3: Node.js Directly
```powershell
cd backend
node test-hostinger-smtp.js
```

**What it does:**
- ✅ Verifies backend/.env file exists
- ✅ Checks all environment variables are set
- ✅ Tests SMTP connection to Hostinger
- ✅ Sends a test email to verify credentials
- ✅ Provides troubleshooting tips if errors occur

**When to use:**
- Before deploying backend to Render
- After changing email passwords
- When troubleshooting email issues
- To verify SMTP credentials

---

## 🏗️ Build Scripts

### Build for Hostinger Production

**PowerShell:**
```powershell
.\scripts\build-for-hostinger.ps1
```

**Batch (Windows):**
```
.\scripts\build-for-hostinger.bat
```

**What it does:**
- Loads production environment variables
- Builds frontend with Vite
- Creates optimized `dist` folder
- Ready to upload to Hostinger

---

## 🚀 Development Scripts

### Start Development Environment

**PowerShell:**
```powershell
.\scripts\start-dev.ps1
```

**What it does:**
- Starts backend server (port 5000)
- Starts frontend dev server (port 5173)
- Opens browser automatically
- Watches for file changes

---

## 🔧 Backend Scripts

### Start Backend Only

**PowerShell:**
```powershell
.\scripts\start-backend.bat
```

**What it does:**
- Starts Express server
- Listens on port 5000
- Loads environment variables from backend/.env

### Test Backend

**PowerShell:**
```powershell
.\scripts\test-backend.ps1
```

**What it does:**
- Starts backend server
- Runs health check
- Tests API endpoints
- Verifies SMTP configuration

### Test Production Backend

**PowerShell:**
```powershell
.\scripts\test-production-backend.ps1
```

**What it does:**
- Sets NODE_ENV=production
- Starts backend with production settings
- Tests against production SMTP server

---

## 📧 Email Scripts

### Test Webmail

**Batch:**
```
.\scripts\test-webmail.bat
```

**What it does:**
- Opens Hostinger webmail in browser
- Useful for checking received emails
- Quick access to email inbox

---

## 🔍 Script Details

### test-hostinger-smtp.ps1
| Property | Value |
|----------|-------|
| **Purpose** | Test Hostinger SMTP configuration |
| **Requirements** | backend/.env with SMTP credentials |
| **Output** | Success/failure with troubleshooting tips |
| **Duration** | ~30 seconds |

### build-for-hostinger.ps1
| Property | Value |
|----------|-------|
| **Purpose** | Build production-ready frontend |
| **Requirements** | .env.production file |
| **Output** | dist/ folder ready for upload |
| **Duration** | ~1-2 minutes |

### start-dev.ps1
| Property | Value |
|----------|-------|
| **Purpose** | Start full development environment |
| **Requirements** | backend/.env and .env files |
| **Output** | Backend + Frontend running |
| **Ports** | 5000 (backend), 5173 (frontend) |

---

## 📋 Common Workflows

### First Time Setup
```powershell
# 1. Create environment files
Copy backend\.env.example backend\.env
Copy .env.example .env

# 2. Edit backend\.env with Hostinger credentials
notepad backend\.env

# 3. Test SMTP
.\scripts\test-hostinger-smtp.ps1

# 4. Start development
.\scripts\start-dev.ps1
```

### Deploying to Production
```powershell
# 1. Test SMTP works locally
.\scripts\test-hostinger-smtp.ps1

# 2. Deploy backend to Render
# (Use Render Dashboard, see HOSTINGER_EMAIL_SETUP.md)

# 3. Update .env.production with Render URL
notepad .env.production

# 4. Build frontend
.\scripts\build-for-hostinger.ps1

# 5. Upload dist/ to Hostinger
# (Use Hostinger File Manager or FTP)
```

### Troubleshooting Email Issues
```powershell
# 1. Test locally first
.\scripts\test-hostinger-smtp.ps1

# 2. If local works, test production backend
.\scripts\test-production-backend.ps1

# 3. Check Render logs
# (Render Dashboard → Your Service → Logs)
```

---

## 🛠️ Creating New Scripts

### PowerShell Script Template
```powershell
# Script description
Write-Host "🚀 Script Name" -ForegroundColor Cyan
Write-Host "=" * 40 -ForegroundColor Cyan

# Check prerequisites
if (-Not (Test-Path ".\something")) {
    Write-Host "❌ Error: Prerequisites not met" -ForegroundColor Red
    exit 1
}

# Main logic
try {
    Write-Host "✅ Task completed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
    exit 1
}
```

### Batch Script Template
```batch
@echo off
echo ========================================
echo   Script Name
echo ========================================
echo.

REM Main logic
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Something went wrong
    pause
    exit /b 1
)

echo SUCCESS!
pause
```

---

## 📚 Related Documentation

- **Email Setup**: `../HOSTINGER_EMAIL_SETUP.md`
- **Quick Start**: `../QUICK_START_EMAIL.md`
- **Architecture**: `../EMAIL_ARCHITECTURE.md`
- **Deployment**: `../docs/deployment/HOSTINGER_FRONTEND.md`
- **Troubleshooting**: `../docs/TROUBLESHOOTING_500_ERROR.md`

---

## 🆘 Getting Help

If scripts are not working:

1. **Check prerequisites**:
   - Node.js installed (v18+)
   - PowerShell available
   - Environment files exist

2. **Check permissions**:
   ```powershell
   # If PowerShell execution policy blocks scripts:
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Run manually**:
   ```powershell
   # Instead of scripts, run commands directly:
   cd backend
   npm install
   node mailserver.js
   ```

4. **Check documentation**:
   - Read error messages carefully
   - Check relevant .md files in docs/
   - Review HOSTINGER_EMAIL_SETUP.md

---

## 📝 Script Maintenance

When updating scripts:

- ✅ Test on both PowerShell and Command Prompt
- ✅ Add error handling and clear messages
- ✅ Update this README with changes
- ✅ Use color coding (Green=success, Red=error, Yellow=warning)
- ✅ Provide troubleshooting tips in error messages

---

Last Updated: October 2025
