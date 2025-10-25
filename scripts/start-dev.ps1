# Blaupunkt Development Server Startup Script
# This script starts both the backend and frontend servers

Write-Host "🚀 Starting Blaupunkt Development Servers..." -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists in backend
if (-not (Test-Path ".\backend\node_modules")) {
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
}

# Check if node_modules exists in root
if (-not (Test-Path ".\node_modules")) {
    Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "✅ Dependencies installed!" -ForegroundColor Green
Write-Host ""

# Start backend in new window
Write-Host "🔧 Starting Backend Server (Port 5000)..." -ForegroundColor Blue
Start-Process pwsh -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; node mailserver.js"

# Wait a bit for backend to start
Start-Sleep -Seconds 2

# Start frontend in current window
Write-Host "🎨 Starting Frontend Server (Vite)..." -ForegroundColor Magenta
Write-Host ""
npm run dev
