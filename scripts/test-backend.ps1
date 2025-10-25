# Quick Backend Diagnostic Script
# Tests the Render backend and provides detailed error information

Write-Host "`n==================================" -ForegroundColor Cyan
Write-Host "  Backend Diagnostic Tool" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Test 1: Health Check
Write-Host "`n[Test 1] Testing Health Endpoint..." -ForegroundColor Yellow
try {
    $health = Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/health"
    Write-Host "✅ Health Check PASSED" -ForegroundColor Green
    Write-Host "   Status: $($health.status)" -ForegroundColor Gray
    Write-Host "   Message: $($health.message)" -ForegroundColor Gray
    Write-Host "   Timestamp: $($health.timestamp)" -ForegroundColor Gray
} catch {
    Write-Host "❌ Health Check FAILED" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Test 2: Environment Variables Check
Write-Host "`n[Test 2] Checking Environment Variables..." -ForegroundColor Yellow
try {
    $env = Invoke-RestMethod -Uri "https://blaupunkt-backend.onrender.com/api/debug-env"
    Write-Host "✅ Environment Check PASSED" -ForegroundColor Green
    Write-Host "   Environment Variables Status:" -ForegroundColor Gray
    $env.status.PSObject.Properties | ForEach-Object {
        $status = if ($_.Value -like "*✅*") { "✅" } else { "❌" }
        $color = if ($_.Value -like "*✅*") { "Green" } else { "Red" }
        Write-Host "   $status $($_.Name): $($_.Value)" -ForegroundColor $color
    }
    
    # Check for missing variables
    $missing = $env.status.PSObject.Properties | Where-Object { $_.Value -like "*❌*" }
    if ($missing.Count -gt 0) {
        Write-Host "`n⚠️  WARNING: $($missing.Count) environment variable(s) missing!" -ForegroundColor Yellow
        Write-Host "   Missing variables will cause email sending to fail." -ForegroundColor Yellow
        Write-Host "   Add them in Render Dashboard → Environment tab" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Environment Check FAILED" -ForegroundColor Red
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 3: Contact Endpoint
Write-Host "`n[Test 3] Testing Contact Endpoint..." -ForegroundColor Yellow
$body = @{
    fullName = "Diagnostic Test"
    email = "diagnostic@test.com"
    phone = "+1234567890"
    message = "Automated diagnostic test from PowerShell"
} | ConvertTo-Json

try {
    $response = Invoke-WebRequest -Uri "https://blaupunkt-backend.onrender.com/api/contact" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -ErrorAction Stop
    
    $data = $response.Content | ConvertFrom-Json
    
    if ($data.success) {
        Write-Host "✅ Contact Endpoint PASSED" -ForegroundColor Green
        Write-Host "   Message: $($data.message)" -ForegroundColor Gray
        Write-Host "   Email should be sent to info@blaupunkt-ev.com" -ForegroundColor Gray
    } else {
        Write-Host "⚠️  Contact Endpoint responded but reported failure" -ForegroundColor Yellow
        Write-Host "   Message: $($data.message)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Contact Endpoint FAILED" -ForegroundColor Red
    Write-Host "   HTTP Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    
    # Try to get error details from response
    try {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        $reader.Close()
        
        # Try to parse as JSON
        try {
            $errorData = $responseBody | ConvertFrom-Json
            Write-Host "   Error Message: $($errorData.message)" -ForegroundColor Yellow
            if ($errorData.error) {
                Write-Host "   Error Details: $($errorData.error)" -ForegroundColor Yellow
            }
        } catch {
            # Not JSON, show raw response
            Write-Host "   Response: $($responseBody.Substring(0, [Math]::Min(200, $responseBody.Length)))" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "   Could not retrieve error details" -ForegroundColor Yellow
    }
}

# Summary
Write-Host "`n==================================" -ForegroundColor Cyan
Write-Host "  Diagnostic Summary" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "`nIf contact endpoint failed with 500 error:" -ForegroundColor White
Write-Host "1. Check Render Dashboard → blaupunkt-backend → Logs" -ForegroundColor Gray
Write-Host "2. Verify all environment variables are set (see Test 2 above)" -ForegroundColor Gray
Write-Host "3. Ensure SMTP credentials match Hostinger email" -ForegroundColor Gray
Write-Host "`nMost common issue: Missing SMTP environment variables" -ForegroundColor Yellow
Write-Host "Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, DESTINATION_EMAIL" -ForegroundColor Yellow
Write-Host "`n==================================" -ForegroundColor Cyan
