# 🚗 Blaupunkt EV Systems - Official Website# Blaupunkt



Modern, responsive website for Blaupunkt EV charging solutions built with React, Vite, and Tailwind CSS.Site under development.

## 📁 Project Structure

```
blaupunkt/
├── 📄 README.md                    # This file - project overview
├── 📄 package.json                 # Frontend dependencies
├── 📄 vite.config.js              # Vite configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 render.yaml                 # Render deployment configuration
│
├── 📁 src/                        # Frontend source code
│   ├── 📁 Components/             # React components
│   │   ├── 📁 Common/            # Reusable components (Navbar, Footer, etc.)
│   │   ├── 📁 CommonPages/       # Shared page components
│   │   ├── 📁 Products/          # Product listing components
│   │   ├── 📁 Admin/             # Admin panel components
│   │   └── 📁 Loading/           # Loading states
│   │
│   ├── 📁 Pages/                 # Page components (routes)
│   ├── 📁 Data/                  # Product data & configurations
│   ├── 📁 assets/                # Static assets (images, PDFs, videos)
│   ├── 📁 config/                # Configuration files
│   ├── 📁 hooks/                 # Custom React hooks
│   ├── 📁 lib/                   # Utility libraries
│   └── 📁 utils/                 # Utility functions
│
├── 📁 backend/                    # Email service backend
│   ├── mailserver.js             # Express server
│   ├── config.js                 # SMTP configuration
│   ├── template.js               # Email templates
│   └── package.json              # Backend dependencies
│
├── 📁 docs/                       # Documentation
│   ├── 📁 deployment/            # Deployment guides
│   └── 📁 setup/                 # Setup & configuration guides
│
├── 📁 scripts/                    # Development scripts
│   ├── start-backend.bat         # Start backend (Windows)
│   └── start-dev.ps1             # Start both servers (PowerShell)
│
└── 📁 .github/workflows/          # GitHub Actions (keep-alive)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Development

**Option 1: PowerShell Script (Recommended)**
```powershell
.\scripts\start-dev.ps1
```

**Option 2: Manual**
```bash
# Terminal 1 - Backend
cd backend
npm install
node mailserver.js

# Terminal 2 - Frontend
npm install
npm run dev
```

Open http://localhost:3000

## 📖 Documentation

### Setup
- **[Mail Setup](docs/setup/MAIL_SETUP_GUIDE.md)** - Email configuration
- **[Keep-Alive](docs/setup/KEEP_ALIVE_GUIDE.md)** - Prevent backend sleep
- **[GitHub Actions](docs/setup/GITHUB_ACTIONS_KEEPALIVE.md)** - Automated monitoring

### Deployment
- **[Render Guide](docs/deployment/RENDER_DEPLOYMENT_GUIDE.md)** - Deploy to Render
- **[Quick Checklist](docs/deployment/RENDER_DEPLOYMENT_CHECKLIST.md)** - Deployment steps
- **[Other Options](docs/deployment/DEPLOYMENT_GUIDE.md)** - Alternative hosts

## 🛠️ Tech Stack

**Frontend:** React 19, Vite 6, Tailwind CSS 4, React Router 7
**Backend:** Node.js, Express 5, Nodemailer
**Deployment:** Render, GitHub Actions

## 🌐 Deploy to Render

1. Push to GitHub
2. Create Render services (Web + Static)
3. Set environment variables
4. Deploy!

**Full guide:** [docs/deployment/RENDER_DEPLOYMENT_GUIDE.md](docs/deployment/RENDER_DEPLOYMENT_GUIDE.md)

## 📞 Contact

**Website:** https://blaupunkt-ev.com
**Email:** info@blaupunkt-ev.com
**Repository:** https://github.com/AbinVarghexe/Blaupunkt

---

**Version 1.0.0** | Last Updated: October 25, 2025
