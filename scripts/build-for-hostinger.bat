@echo off
REM Build script for Hostinger deployment
REM This builds the frontend with production settings pointing to Render backend

echo.
echo ====================================
echo  Building for Hostinger Deployment
echo ====================================
echo.
echo Backend URL: https://blaupunkt-backend.onrender.com
echo Frontend Domain: https://blaupunkt-ev.com
echo.

REM Build with production environment
echo [1/2] Building production bundle...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ❌ Build failed! Please check errors above.
    pause
    exit /b 1
)

echo.
echo ✅ Build complete!
echo.
echo ====================================
echo  Next Steps:
echo ====================================
echo.
echo 1. The 'dist' folder is ready for upload
echo 2. Upload contents of 'dist' folder to Hostinger:
echo    - Using File Manager or FTP
echo    - Upload to your public_html or domain folder
echo.
echo 3. Test the contact form after upload:
echo    - Visit: https://blaupunkt-ev.com
echo    - Submit a test contact form
echo    - Check email: info@blaupunkt-ev.com
echo.
echo ====================================

pause
