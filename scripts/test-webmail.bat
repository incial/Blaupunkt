@echo off
echo.
echo ============================================
echo   Quick SMTP Password Test
echo ============================================
echo.
echo Opening Hostinger Webmail...
echo.
echo Try logging in with:
echo   Email: info@blaupunkt-ev.com
echo   Password: [Your password from .env file]
echo.
echo If login FAILS = Password is wrong (reset it)
echo If login SUCCEEDS = Check other settings
echo.
start https://webmail.hostinger.com/
echo.
pause
