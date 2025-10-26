# Test Hostinger SMTP Configuration
# This script helps you test your Hostinger email settings before deploying

Write-Host "🧪 Hostinger SMTP Configuration Test" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-Not (Test-Path ".\backend\test-hostinger-smtp.js")) {
    Write-Host "❌ Error: Please run this script from the project root directory" -ForegroundColor Red
    Write-Host "Current directory: $PWD" -ForegroundColor Yellow
    exit 1
}

# Check if backend/.env exists
if (-Not (Test-Path ".\backend\.env")) {
    Write-Host "⚠️  Warning: backend/.env file not found!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Creating backend/.env from template..." -ForegroundColor Cyan
    
    # Create .env from example
    if (Test-Path ".\backend\.env.example") {
        Copy-Item ".\backend\.env.example" ".\backend\.env"
        Write-Host "✅ Created backend/.env file" -ForegroundColor Green
        Write-Host ""
        Write-Host "📝 IMPORTANT: Edit backend/.env and add your Hostinger email credentials:" -ForegroundColor Yellow
        Write-Host "   1. SMTP_USER=your-email@blaupunkt-ev.com" -ForegroundColor White
        Write-Host "   2. SMTP_PASS=your-email-password" -ForegroundColor White
        Write-Host "   3. SMTP_HOST=smtp.hostinger.com (or mail.blaupunkt-ev.com)" -ForegroundColor White
        Write-Host "   4. SMTP_PORT=465 (or 587)" -ForegroundColor White
        Write-Host ""
        
        # Open .env in default editor
        $response = Read-Host "Open .env file now? (y/n)"
        if ($response -eq 'y' -or $response -eq 'Y') {
            Start-Process ".\backend\.env"
            Write-Host ""
            Write-Host "✏️  Waiting for you to edit the file..." -ForegroundColor Cyan
            Read-Host "Press Enter after saving your changes"
        }
    } else {
        Write-Host "❌ Error: backend/.env.example not found!" -ForegroundColor Red
        Write-Host "Please create backend/.env manually with these variables:" -ForegroundColor Yellow
        Write-Host "  SMTP_HOST=smtp.hostinger.com" -ForegroundColor White
        Write-Host "  SMTP_PORT=465" -ForegroundColor White
        Write-Host "  SMTP_USER=info@blaupunkt-ev.com" -ForegroundColor White
        Write-Host "  SMTP_PASS=your-password-here" -ForegroundColor White
        Write-Host "  DESTINATION_EMAIL=info@blaupunkt-ev.com" -ForegroundColor White
        exit 1
    }
}

Write-Host ""
Write-Host "🔍 Step 1: Checking Node.js and dependencies..." -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

# Navigate to backend directory
Set-Location -Path ".\backend"

# Check if node_modules exists
if (-Not (Test-Path ".\node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        Set-Location -Path ".."
        exit 1
    }
    Write-Host "✅ Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "🧪 Step 2: Running SMTP test..." -ForegroundColor Cyan
Write-Host ""

# Run the test script
node test-hostinger-smtp.js

# Store the exit code
$testResult = $LASTEXITCODE

# Return to root directory
Set-Location -Path ".."

Write-Host ""
if ($testResult -eq 0) {
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "✅ SUCCESS! Your SMTP configuration is working!" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next Steps:" -ForegroundColor Cyan
    Write-Host "  1. Deploy your backend to Render" -ForegroundColor White
    Write-Host "  2. Add these same environment variables in Render Dashboard" -ForegroundColor White
    Write-Host "  3. Test the deployed backend using:" -ForegroundColor White
    Write-Host "     https://your-backend.onrender.com/api/health" -ForegroundColor Yellow
    Write-Host "  4. Build and upload frontend to Hostinger" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 For detailed deployment steps, see:" -ForegroundColor Cyan
    Write-Host "  .\HOSTINGER_EMAIL_SETUP.md" -ForegroundColor Yellow
} else {
    Write-Host "================================================" -ForegroundColor Red
    Write-Host "❌ SMTP Test Failed" -ForegroundColor Red
    Write-Host "================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 Troubleshooting Steps:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Verify your Hostinger email credentials:" -ForegroundColor White
    Write-Host "   • Login to Hostinger hPanel" -ForegroundColor Gray
    Write-Host "   • Go to Emails → Email Accounts" -ForegroundColor Gray
    Write-Host "   • Click 'Configure Email Client' for your email" -ForegroundColor Gray
    Write-Host "   • Double-check Host, Port, Username, and Password" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Common SMTP settings to try:" -ForegroundColor White
    Write-Host "   Option A: SMTP_HOST=smtp.hostinger.com, SMTP_PORT=465" -ForegroundColor Gray
    Write-Host "   Option B: SMTP_HOST=mail.blaupunkt-ev.com, SMTP_PORT=465" -ForegroundColor Gray
    Write-Host "   Option C: SMTP_HOST=smtp.hostinger.com, SMTP_PORT=587" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Check your backend/.env file:" -ForegroundColor White
    Write-Host "   • Username should be full email: info@blaupunkt-ev.com" -ForegroundColor Gray
    Write-Host "   • Password should be correct (no extra spaces)" -ForegroundColor Gray
    Write-Host "   • Try resetting password in Hostinger if needed" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. Test email account in email client (Outlook/Thunderbird)" -ForegroundColor White
    Write-Host "   to verify credentials work outside of this script" -ForegroundColor Gray
    Write-Host ""
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
