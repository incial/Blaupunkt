# SSH Deployment Setup Script for Windows PowerShell
# This script helps automate the SSH key generation and setup process

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   SSH Deployment Setup for Hostinger" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Generate SSH Key
Write-Host "Step 1: Generate SSH Key" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

$sshDir = "$env:USERPROFILE\.ssh"
$keyPath = "$sshDir\hostinger_deploy"

# Create .ssh directory if it doesn't exist
if (-not (Test-Path $sshDir)) {
    Write-Host "Creating .ssh directory..." -ForegroundColor Green
    New-Item -ItemType Directory -Path $sshDir | Out-Null
}

# Check if key already exists
if (Test-Path $keyPath) {
    Write-Host "SSH key already exists at: $keyPath" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (y/N)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "Using existing key..." -ForegroundColor Green
    } else {
        Write-Host "Generating new SSH key..." -ForegroundColor Green
        ssh-keygen -t ed25519 -C "github-actions-deploy" -f $keyPath -N '""'
    }
} else {
    Write-Host "Generating new SSH key..." -ForegroundColor Green
    ssh-keygen -t ed25519 -C "github-actions-deploy" -f $keyPath -N '""'
}

Write-Host ""
Write-Host "✓ SSH key generated successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Display Public Key
Write-Host "Step 2: Public Key (Add to Hostinger)" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow
Write-Host ""
Write-Host "Your PUBLIC key (copy this to Hostinger):" -ForegroundColor Cyan
Write-Host ""
Get-Content "$keyPath.pub"
Write-Host ""
Write-Host "Public key has been copied to clipboard!" -ForegroundColor Green
Get-Content "$keyPath.pub" | Set-Clipboard

Write-Host ""
Write-Host "Next steps in Hostinger:" -ForegroundColor Yellow
Write-Host "1. Log in to Hostinger hPanel" -ForegroundColor White
Write-Host "2. Go to Advanced → SSH Access" -ForegroundColor White
Write-Host "3. Click 'Manage SSH Keys'" -ForegroundColor White
Write-Host "4. Paste the public key above" -ForegroundColor White
Write-Host ""

# Step 3: Get Hostinger Details
Write-Host "Step 3: Hostinger SSH Details" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow
Write-Host ""
Write-Host "Please enter your Hostinger SSH details:" -ForegroundColor Cyan
Write-Host ""

$sshHost = Read-Host "SSH Host (e.g., ssh.yourdomain.com)"
$sshPort = Read-Host "SSH Port (usually 65002)"
$sshUsername = Read-Host "SSH Username"
$sshTargetDir = Read-Host "Target Directory (e.g., /home/username/public_html)"

Write-Host ""

# Step 4: Test Connection
Write-Host "Step 4: Test SSH Connection" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow
Write-Host ""
$testConnection = Read-Host "Do you want to test the connection now? (Y/n)"

if ($testConnection -ne "n" -and $testConnection -ne "N") {
    Write-Host ""
    Write-Host "Testing SSH connection..." -ForegroundColor Green
    Write-Host "Command: ssh -p $sshPort -i `"$keyPath`" $sshUsername@$sshHost" -ForegroundColor Gray
    Write-Host ""
    Write-Host "If prompted, type 'yes' to accept the host key." -ForegroundColor Yellow
    Write-Host "Then type 'exit' to close the connection." -ForegroundColor Yellow
    Write-Host ""
    
    ssh -p $sshPort -i "$keyPath" "$sshUsername@$sshHost"
}

# Step 5: GitHub Secrets
Write-Host ""
Write-Host "Step 5: GitHub Secrets" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow
Write-Host ""
Write-Host "Add these secrets to GitHub:" -ForegroundColor Cyan
Write-Host ""
Write-Host "Go to: GitHub Repo → Settings → Secrets and variables → Actions" -ForegroundColor White
Write-Host ""

Write-Host "Secret Name: SSH_PRIVATE_KEY" -ForegroundColor Green
Write-Host "Value: (Private key will be copied to clipboard now)" -ForegroundColor Gray
Get-Content $keyPath -Raw | Set-Clipboard
Write-Host "✓ Private key copied to clipboard!" -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter after you've added SSH_PRIVATE_KEY to GitHub"

Write-Host ""
Write-Host "Secret Name: SSH_HOST" -ForegroundColor Green
Write-Host "Value: $sshHost" -ForegroundColor White
Set-Clipboard -Value $sshHost
Write-Host "✓ Copied to clipboard!" -ForegroundColor Green
Read-Host "Press Enter after you've added SSH_HOST to GitHub"

Write-Host ""
Write-Host "Secret Name: SSH_USERNAME" -ForegroundColor Green
Write-Host "Value: $sshUsername" -ForegroundColor White
Set-Clipboard -Value $sshUsername
Write-Host "✓ Copied to clipboard!" -ForegroundColor Green
Read-Host "Press Enter after you've added SSH_USERNAME to GitHub"

Write-Host ""
Write-Host "Secret Name: SSH_PORT" -ForegroundColor Green
Write-Host "Value: $sshPort" -ForegroundColor White
Set-Clipboard -Value $sshPort
Write-Host "✓ Copied to clipboard!" -ForegroundColor Green
Read-Host "Press Enter after you've added SSH_PORT to GitHub"

Write-Host ""
Write-Host "Secret Name: SSH_TARGET_DIR" -ForegroundColor Green
Write-Host "Value: $sshTargetDir" -ForegroundColor White
Set-Clipboard -Value $sshTargetDir
Write-Host "✓ Copied to clipboard!" -ForegroundColor Green
Read-Host "Press Enter after you've added SSH_TARGET_DIR to GitHub"

# Summary
Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   Setup Complete! 🎉" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Summary of your SSH deployment configuration:" -ForegroundColor Yellow
Write-Host ""
Write-Host "SSH Host:       $sshHost" -ForegroundColor White
Write-Host "SSH Port:       $sshPort" -ForegroundColor White
Write-Host "SSH Username:   $sshUsername" -ForegroundColor White
Write-Host "Target Dir:     $sshTargetDir" -ForegroundColor White
Write-Host "Private Key:    $keyPath" -ForegroundColor White
Write-Host "Public Key:     $keyPath.pub" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Make a code change" -ForegroundColor White
Write-Host "2. Commit and push to GitHub" -ForegroundColor White
Write-Host "3. Watch GitHub Actions deploy automatically!" -ForegroundColor White
Write-Host ""
Write-Host "Happy deploying! 🚀" -ForegroundColor Green
Write-Host ""
