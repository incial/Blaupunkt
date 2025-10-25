@echo off
cd /d "%~dp0..\backend"
echo Starting Backend Server...
node mailserver.js
pause
