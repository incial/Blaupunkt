#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import process from 'process'

console.log('🚀 Initializing Blaupunkt Data Manager...\n');

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Check if server directory exists
const serverDir = path.join(process.cwd(), 'server');
if (!fs.existsSync(serverDir)) {
  console.error('❌ Error: server directory not found. Please ensure the data manager is properly set up.');
  process.exit(1);
}

try {
  console.log('📦 Installing server dependencies...');
  execSync('npm install', { 
    cwd: serverDir, 
    stdio: 'inherit' 
  });

  console.log('\n✅ Dependencies installed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Start the development server:');
  console.log('   cd server && npm run dev');
  console.log('\n2. Access the Data Manager:');
  console.log('   Navigate to /admin in your React application');
  console.log('\n3. The server will run on: http://localhost:3001');
  console.log('\n📚 For detailed instructions, see DATA_MANAGER_README.md');

} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
  console.log('\n🔧 Manual setup:');
  console.log('1. cd server');
  console.log('2. npm install');
  console.log('3. npm run dev');
  process.exit(1);
}
