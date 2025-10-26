@echo off
REM Quick SMTP Test Launcher for Windows
REM Double-click this file to test your Hostinger email configuration

echo.
echo ========================================
echo   Hostinger SMTP Test Launcher
echo ========================================
echo.

REM Check if PowerShell is available
where powershell >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: PowerShell not found!
    echo Please ensure PowerShell is installed.
    pause
    exit /b 1
)

REM Run the PowerShell script
powershell.exe -ExecutionPolicy Bypass -File "%~dp0test-hostinger-smtp.ps1"

REM Keep window open
pause
