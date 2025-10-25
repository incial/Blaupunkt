# Build script for Hostinger deployment
# This builds the frontend with production settings pointing to Render backend

Write-Host "`n" -NoNewline
Write-Host "====================================" -ForegroundColor Cyan
Write-Host " Building for Hostinger Deployment" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "`n" -NoNewline

Write-Host "Backend URL: " -NoNewline
Write-Host "https://blaupunkt-backend.onrender.com" -ForegroundColor Green
Write-Host "Frontend Domain: " -NoNewline
Write-Host "https://blaupunkt-ev.com" -ForegroundColor Green
Write-Host "`n" -NoNewline

# Build with production environment
Write-Host "[1/2] Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n" -NoNewline
    Write-Host "❌ Build failed! Please check errors above." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "`n" -NoNewline
Write-Host "✅ Build complete!" -ForegroundColor Green
Write-Host "`n" -NoNewline

Write-Host "====================================" -ForegroundColor Cyan
Write-Host " Next Steps:" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "`n" -NoNewline

Write-Host "1. The 'dist' folder is ready for upload" -ForegroundColor White
Write-Host "`n" -NoNewline

Write-Host "2. Upload contents of 'dist' folder to Hostinger:" -ForegroundColor White
Write-Host "   - Using File Manager or FTP" -ForegroundColor Gray
Write-Host "   - Upload to your public_html or domain folder" -ForegroundColor Gray
Write-Host "`n" -NoNewline

Write-Host "3. Test the contact form after upload:" -ForegroundColor White
Write-Host "   - Visit: " -NoNewline -ForegroundColor Gray
Write-Host "https://blaupunkt-ev.com" -ForegroundColor Green
Write-Host "   - Submit a test contact form" -ForegroundColor Gray
Write-Host "   - Check email: " -NoNewline -ForegroundColor Gray
Write-Host "info@blaupunkt-ev.com" -ForegroundColor Green
Write-Host "`n" -NoNewline

Write-Host "====================================" -ForegroundColor Cyan
Write-Host "`n" -NoNewline

Read-Host "Press Enter to exit"
