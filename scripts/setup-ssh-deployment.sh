#!/bin/bash
# SSH Deployment Setup Script for Mac/Linux
# This script helps automate the SSH key generation and setup process

echo "=================================================="
echo "   SSH Deployment Setup for Hostinger"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

# Step 1: Generate SSH Key
echo -e "${YELLOW}Step 1: Generate SSH Key${NC}"
echo "----------------------------------------"

SSH_DIR="$HOME/.ssh"
KEY_PATH="$SSH_DIR/hostinger_deploy"

# Create .ssh directory if it doesn't exist
if [ ! -d "$SSH_DIR" ]; then
    echo -e "${GREEN}Creating .ssh directory...${NC}"
    mkdir -p "$SSH_DIR"
    chmod 700 "$SSH_DIR"
fi

# Check if key already exists
if [ -f "$KEY_PATH" ]; then
    echo -e "${YELLOW}SSH key already exists at: $KEY_PATH${NC}"
    read -p "Do you want to overwrite it? (y/N): " overwrite
    if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
        echo -e "${GREEN}Using existing key...${NC}"
    else
        echo -e "${GREEN}Generating new SSH key...${NC}"
        ssh-keygen -t ed25519 -C "github-actions-deploy" -f "$KEY_PATH" -N ""
    fi
else
    echo -e "${GREEN}Generating new SSH key...${NC}"
    ssh-keygen -t ed25519 -C "github-actions-deploy" -f "$KEY_PATH" -N ""
fi

echo ""
echo -e "${GREEN}✓ SSH key generated successfully!${NC}"
echo ""

# Step 2: Display Public Key
echo -e "${YELLOW}Step 2: Public Key (Add to Hostinger)${NC}"
echo "----------------------------------------"
echo ""
echo -e "${CYAN}Your PUBLIC key (copy this to Hostinger):${NC}"
echo ""
cat "$KEY_PATH.pub"
echo ""

# Copy to clipboard (if available)
if command -v pbcopy &> /dev/null; then
    cat "$KEY_PATH.pub" | pbcopy
    echo -e "${GREEN}Public key has been copied to clipboard!${NC}"
elif command -v xclip &> /dev/null; then
    cat "$KEY_PATH.pub" | xclip -selection clipboard
    echo -e "${GREEN}Public key has been copied to clipboard!${NC}"
else
    echo -e "${YELLOW}Please copy the public key above manually.${NC}"
fi

echo ""
echo -e "${YELLOW}Next steps in Hostinger:${NC}"
echo "1. Log in to Hostinger hPanel"
echo "2. Go to Advanced → SSH Access"
echo "3. Click 'Manage SSH Keys'"
echo "4. Paste the public key above"
echo ""

# Step 3: Get Hostinger Details
echo -e "${YELLOW}Step 3: Hostinger SSH Details${NC}"
echo "----------------------------------------"
echo ""
echo -e "${CYAN}Please enter your Hostinger SSH details:${NC}"
echo ""

read -p "SSH Host (e.g., ssh.yourdomain.com): " SSH_HOST
read -p "SSH Port (usually 65002): " SSH_PORT
read -p "SSH Username: " SSH_USERNAME
read -p "Target Directory (e.g., /home/username/public_html): " SSH_TARGET_DIR

echo ""

# Step 4: Test Connection
echo -e "${YELLOW}Step 4: Test SSH Connection${NC}"
echo "----------------------------------------"
echo ""
read -p "Do you want to test the connection now? (Y/n): " test_connection

if [ "$test_connection" != "n" ] && [ "$test_connection" != "N" ]; then
    echo ""
    echo -e "${GREEN}Testing SSH connection...${NC}"
    echo -e "${GRAY}Command: ssh -p $SSH_PORT -i \"$KEY_PATH\" $SSH_USERNAME@$SSH_HOST${NC}"
    echo ""
    echo -e "${YELLOW}If prompted, type 'yes' to accept the host key.${NC}"
    echo -e "${YELLOW}Then type 'exit' to close the connection.${NC}"
    echo ""
    
    ssh -p "$SSH_PORT" -i "$KEY_PATH" "$SSH_USERNAME@$SSH_HOST"
fi

# Step 5: GitHub Secrets
echo ""
echo -e "${YELLOW}Step 5: GitHub Secrets${NC}"
echo "----------------------------------------"
echo ""
echo -e "${CYAN}Add these secrets to GitHub:${NC}"
echo ""
echo "Go to: GitHub Repo → Settings → Secrets and variables → Actions"
echo ""

echo -e "${GREEN}Secret Name: SSH_PRIVATE_KEY${NC}"
echo -e "${GRAY}Value: (Private key content below)${NC}"
echo ""
cat "$KEY_PATH"
echo ""
if command -v pbcopy &> /dev/null; then
    cat "$KEY_PATH" | pbcopy
    echo -e "${GREEN}✓ Private key copied to clipboard!${NC}"
elif command -v xclip &> /dev/null; then
    cat "$KEY_PATH" | xclip -selection clipboard
    echo -e "${GREEN}✓ Private key copied to clipboard!${NC}"
fi
read -p "Press Enter after you've added SSH_PRIVATE_KEY to GitHub..."

echo ""
echo -e "${GREEN}Secret Name: SSH_HOST${NC}"
echo "Value: $SSH_HOST"
echo "$SSH_HOST" | pbcopy 2>/dev/null || echo "$SSH_HOST" | xclip -selection clipboard 2>/dev/null
read -p "Press Enter after you've added SSH_HOST to GitHub..."

echo ""
echo -e "${GREEN}Secret Name: SSH_USERNAME${NC}"
echo "Value: $SSH_USERNAME"
echo "$SSH_USERNAME" | pbcopy 2>/dev/null || echo "$SSH_USERNAME" | xclip -selection clipboard 2>/dev/null
read -p "Press Enter after you've added SSH_USERNAME to GitHub..."

echo ""
echo -e "${GREEN}Secret Name: SSH_PORT${NC}"
echo "Value: $SSH_PORT"
echo "$SSH_PORT" | pbcopy 2>/dev/null || echo "$SSH_PORT" | xclip -selection clipboard 2>/dev/null
read -p "Press Enter after you've added SSH_PORT to GitHub..."

echo ""
echo -e "${GREEN}Secret Name: SSH_TARGET_DIR${NC}"
echo "Value: $SSH_TARGET_DIR"
echo "$SSH_TARGET_DIR" | pbcopy 2>/dev/null || echo "$SSH_TARGET_DIR" | xclip -selection clipboard 2>/dev/null
read -p "Press Enter after you've added SSH_TARGET_DIR to GitHub..."

# Summary
echo ""
echo "=================================================="
echo "   Setup Complete! 🎉"
echo "=================================================="
echo ""
echo -e "${YELLOW}Summary of your SSH deployment configuration:${NC}"
echo ""
echo "SSH Host:       $SSH_HOST"
echo "SSH Port:       $SSH_PORT"
echo "SSH Username:   $SSH_USERNAME"
echo "Target Dir:     $SSH_TARGET_DIR"
echo "Private Key:    $KEY_PATH"
echo "Public Key:     $KEY_PATH.pub"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Make a code change"
echo "2. Commit and push to GitHub"
echo "3. Watch GitHub Actions deploy automatically!"
echo ""
echo -e "${GREEN}Happy deploying! 🚀${NC}"
echo ""
