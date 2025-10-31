# Automated Hostinger SSH Deployment Setup for Blaupunkt
# This script configures SSH deployment to Hostinger

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  🚀 Blaupunkt Hostinger SSH Setup" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Hostinger Configuration
$HOSTINGER_HOST = "145.79.209.167"
$HOSTINGER_USER = "u966003410"
$HOSTINGER_PORT = "65002"
$HOSTINGER_DIR = "/home/u966003410/domains/blaupunkt-ev.com/public_html"

# Step 1: Generate SSH key
Write-Host "📍 Step 1: Generating SSH Key..." -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray

$sshDir = "$env:USERPROFILE\.ssh"
$keyPath = "$sshDir\hostinger_blaupunkt"

if (-not (Test-Path $sshDir)) {
    Write-Host "Creating .ssh directory..." -ForegroundColor White
    New-Item -ItemType Directory -Path $sshDir | Out-Null
}

if (Test-Path $keyPath) {
    Write-Host ""
    Write-Host "⚠️  SSH key already exists at:" -ForegroundColor Yellow
    Write-Host "   $keyPath" -ForegroundColor Gray
    Write-Host ""
    $overwrite = Read-Host "Do you want to overwrite it? (y/N)"
    if ($overwrite -ne 'y' -and $overwrite -ne 'Y') {
        Write-Host "Using existing key..." -ForegroundColor Green
    } else {
        Write-Host "Generating new SSH key..." -ForegroundColor White
        ssh-keygen -t ed25519 -C "github-actions-blaupunkt" -f $keyPath -N '""'
    }
} else {
    Write-Host "Generating new SSH key..." -ForegroundColor White
    ssh-keygen -t ed25519 -C "github-actions-blaupunkt" -f $keyPath -N '""'
}

Write-Host ""
Write-Host "✅ SSH key ready!" -ForegroundColor Green
Write-Host ""

# Step 2: Show public key
Write-Host "📍 Step 2: Add Public Key to Hostinger" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "Copy this PUBLIC KEY:" -ForegroundColor Cyan
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Get-Content "$keyPath.pub"
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Copy to clipboard
try {
    Get-Content "$keyPath.pub" | Set-Clipboard
    Write-Host ""
    Write-Host "✅ Public key copied to clipboard!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "⚠️  Please copy the key above manually" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor White
Write-Host "   1. Go to: https://hpanel.hostinger.com/" -ForegroundColor Gray
Write-Host "   2. Navigate to: Advanced → SSH Access" -ForegroundColor Gray
Write-Host "   3. Click 'Manage SSH Keys' or 'Add SSH Key'" -ForegroundColor Gray
Write-Host "   4. Paste the key above and save" -ForegroundColor Gray
Write-Host ""

Read-Host "Press Enter when you've added the key to Hostinger"

# Step 3: Test SSH connection
Write-Host ""
Write-Host "📍 Step 3: Testing SSH Connection..." -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "Connecting to: ${HOSTINGER_USER}@${HOSTINGER_HOST}:${HOSTINGER_PORT}" -ForegroundColor Gray
Write-Host ""

$testCmd = "ssh -i `"$keyPath`" -p $HOSTINGER_PORT -o StrictHostKeyChecking=no -o ConnectTimeout=10 $HOSTINGER_USER@$HOSTINGER_HOST 'echo CONNECTION_SUCCESS && pwd'"

try {
    $result = Invoke-Expression $testCmd 2>&1
    if ($result -match "CONNECTION_SUCCESS") {
        Write-Host "✅ SSH connection successful!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Server home directory:" -ForegroundColor White
        $result | Where-Object { $_ -notmatch "CONNECTION_SUCCESS" -and $_ -notmatch "Warning" } | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
    } else {
        Write-Host "⚠️  Connection test inconclusive" -ForegroundColor Yellow
        Write-Host "Output: $result" -ForegroundColor Gray
    }
} catch {
    Write-Host "⚠️  Could not test connection automatically" -ForegroundColor Yellow
    Write-Host "Error: $_" -ForegroundColor Gray
    Write-Host ""
    Write-Host "You can test manually with:" -ForegroundColor White
    Write-Host "ssh -i `"$keyPath`" -p $HOSTINGER_PORT $HOSTINGER_USER@$HOSTINGER_HOST" -ForegroundColor Gray
}

Write-Host ""
Read-Host "Press Enter to continue to GitHub setup"

# Step 4: GitHub Secrets
Write-Host ""
Write-Host "📍 Step 4: Add GitHub Secrets" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Gray
Write-Host ""
Write-Host "Go to GitHub Repository Settings:" -ForegroundColor Cyan
Write-Host "https://github.com/AbinVarghexe/Blaupunkt/settings/secrets/actions" -ForegroundColor White
Write-Host ""
Write-Host "Click 'New repository secret' and add each of these:" -ForegroundColor White
Write-Host ""

# Secret 1: SSH_HOST
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "Secret 1 of 5:" -ForegroundColor Cyan
Write-Host "Name: " -NoNewline -ForegroundColor White
Write-Host "SSH_HOST" -ForegroundColor Green
Write-Host "Value: " -NoNewline -ForegroundColor White
Write-Host "$HOSTINGER_HOST" -ForegroundColor Yellow
Set-Clipboard -Value $HOSTINGER_HOST
Write-Host "✓ Copied to clipboard" -ForegroundColor DarkGray
Read-Host "Press Enter after adding SSH_HOST to GitHub"

# Secret 2: SSH_USERNAME
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "Secret 2 of 5:" -ForegroundColor Cyan
Write-Host "Name: " -NoNewline -ForegroundColor White
Write-Host "SSH_USERNAME" -ForegroundColor Green
Write-Host "Value: " -NoNewline -ForegroundColor White
Write-Host "$HOSTINGER_USER" -ForegroundColor Yellow
Set-Clipboard -Value $HOSTINGER_USER
Write-Host "✓ Copied to clipboard" -ForegroundColor DarkGray
Read-Host "Press Enter after adding SSH_USERNAME to GitHub"

# Secret 3: SSH_PORT
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "Secret 3 of 5:" -ForegroundColor Cyan
Write-Host "Name: " -NoNewline -ForegroundColor White
Write-Host "SSH_PORT" -ForegroundColor Green
Write-Host "Value: " -NoNewline -ForegroundColor White
Write-Host "$HOSTINGER_PORT" -ForegroundColor Yellow
Set-Clipboard -Value $HOSTINGER_PORT
Write-Host "✓ Copied to clipboard" -ForegroundColor DarkGray
Read-Host "Press Enter after adding SSH_PORT to GitHub"

# Secret 4: SSH_TARGET_DIR
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "Secret 4 of 5:" -ForegroundColor Cyan
Write-Host "Name: " -NoNewline -ForegroundColor White
Write-Host "SSH_TARGET_DIR" -ForegroundColor Green
Write-Host "Value: " -NoNewline -ForegroundColor White
Write-Host "$HOSTINGER_DIR" -ForegroundColor Yellow
Set-Clipboard -Value $HOSTINGER_DIR
Write-Host "✓ Copied to clipboard" -ForegroundColor DarkGray
Read-Host "Press Enter after adding SSH_TARGET_DIR to GitHub"

# Secret 5: SSH_PRIVATE_KEY
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "Secret 5 of 5:" -ForegroundColor Cyan
Write-Host "Name: " -NoNewline -ForegroundColor White
Write-Host "SSH_PRIVATE_KEY" -ForegroundColor Green
Write-Host "Value: " -NoNewline -ForegroundColor White
Write-Host "(entire private key below)" -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANT: Copy the ENTIRE key including the header and footer!" -ForegroundColor Red
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Get-Content $keyPath -Raw
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

try {
    Get-Content $keyPath -Raw | Set-Clipboard
    Write-Host ""
    Write-Host "✓ Private key copied to clipboard" -ForegroundColor DarkGray
} catch {
    Write-Host ""
    Write-Host "⚠️  Please copy the key above manually" -ForegroundColor Yellow
}

Read-Host "`nPress Enter after adding SSH_PRIVATE_KEY to GitHub"

# Summary
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  ✅ Setup Complete!" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Configuration Summary:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  SSH Host:       $HOSTINGER_HOST" -ForegroundColor White
Write-Host "  SSH Port:       $HOSTINGER_PORT" -ForegroundColor White
Write-Host "  SSH User:       $HOSTINGER_USER" -ForegroundColor White
Write-Host "  Target Dir:     $HOSTINGER_DIR" -ForegroundColor White
Write-Host "  Private Key:    $keyPath" -ForegroundColor White
Write-Host "  Public Key:     $keyPath.pub" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Ensure all 5 secrets are added to GitHub" -ForegroundColor White
Write-Host "  2. Commit and push your code:" -ForegroundColor White
Write-Host ""
Write-Host "     git add ." -ForegroundColor Gray
Write-Host "     git commit -m `"feat: Enable SSH deployment`"" -ForegroundColor Gray
Write-Host "     git push origin hostinger-deployment" -ForegroundColor Gray
Write-Host ""
Write-Host "  3. GitHub Actions will automatically deploy!" -ForegroundColor White
Write-Host "  4. Check: https://github.com/AbinVarghexe/Blaupunkt/actions" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Your site will be live at: https://blaupunkt-ev.com" -ForegroundColor Green
Write-Host ""
Write-Host "Happy deploying! 🎉" -ForegroundColor Cyan
Write-Host ""
