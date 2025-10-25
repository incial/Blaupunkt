# 📂 Project Organization Guide

This document explains the organization and structure of the Blaupunkt EV Systems codebase.

## 🎯 Organization Principles

1. **Separation of Concerns** - Frontend, backend, docs, and scripts are clearly separated
2. **Modularity** - Components and data are organized by feature/category
3. **Discoverability** - Clear naming and logical folder structure
4. **Documentation** - Guides are organized by purpose (setup vs deployment)
5. **Maintainability** - Related files are grouped together

## 📁 Top-Level Structure

```
blaupunkt/
├── src/              # Frontend application code
├── backend/          # Email service backend
├── docs/             # All documentation
├── scripts/          # Development & build scripts
├── public/           # Static public assets
├── .github/          # GitHub configuration (Actions, etc.)
└── config files      # Project configuration (vite, tailwind, etc.)
```

## 🎨 Frontend Structure (`src/`)

### Components Organization

```
src/Components/
├── Common/           # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Breadcrumb.jsx
│   ├── Card.jsx
│   └── Overview/    # Overview-specific components
│
├── CommonPages/      # Shared page components
│   ├── HeroSection.jsx
│   ├── Specifications.jsx
│   └── Models.jsx
│
├── Products/         # Product catalog components
│   ├── ProductGrid.jsx
│   ├── Pagination.jsx
│   ├── FilterDropdown.jsx
│   └── productsData.js
│
├── Admin/            # Admin panel components
│
└── Loading/          # Loading states & skeletons
```

**Naming Convention:**
- PascalCase for component files (e.g., `ProductCard.jsx`)
- camelCase for utility files (e.g., `filterUtils.js`)
- Descriptive names that indicate purpose

### Pages Organization

```
src/Pages/
├── HomePage.jsx                    # Landing page
├── Products.jsx                    # All products listing
├── Contact.jsx                     # Contact form
├── Company.jsx                     # About company
├── Services.jsx                    # Services page
│
├── ChargingStations.jsx            # AC Charging Stations
├── ChargingCables.jsx              # EV Cables
├── DCChargingStation.jsx           # DC Chargers
├── DCFastChargingStation.jsx       # DC Fast Chargers
├── DCSuperFastChargingStation.jsx  # DC Super Fast
├── PortableEVCharging.jsx          # Portable chargers
│
└── NotFound.jsx                    # 404 page
```

**Routing Pattern:**
- One file per route
- Named to match the route path
- Use React Router for navigation

### Data Organization

```
src/Data/
├── index.js                    # Central export point
│
├── Common/                     # Shared utilities
│   └── utilities.js
│
├── ChargingStations/           # AC Charging station data
│   ├── index.js               # Export all
│   ├── data.js                # Product data
│   └── assets.js              # Image imports
│
├── ChargingCables/             # Cable products
├── DCChargingStation/          # DC charger data
├── DCSuperFastChargingStation/ # Super fast DC
└── PortableEVCharging/         # Portable products
```

**Data Pattern:**
- Each product category has its own folder
- `index.js` - Main export
- `data.js` - Product specifications
- `assets.js` - Image/asset imports
- Modular and reusable structure

### Assets Organization

```
src/assets/
├── Images/
│   ├── CatImages/              # Category images
│   ├── ChargingStations/       # Product images
│   ├── companyPage/            # Company images
│   ├── DCchargingStation/
│   ├── EvCables/
│   └── ...
│
├── pdf/
│   ├── Cables/                 # Cable datasheets
│   ├── Stations/               # Station datasheets
│   └── ...
│
└── Videos/                      # Video assets
```

**Asset Guidelines:**
- Use descriptive folder names
- Group by category/product type
- Optimize images before committing
- Use WebP format when possible

## 🔧 Backend Structure (`backend/`)

```
backend/
├── mailserver.js       # Express server & API endpoints
├── config.js           # SMTP & app configuration
├── template.js         # Email HTML templates
├── package.json        # Backend dependencies
├── .env               # Environment variables (gitignored)
└── .env.example       # Example configuration
```

**Purpose:**
- Handles contact form submissions
- Sends emails via SMTP
- Health check endpoint for monitoring
- Stateless and minimal

## 📚 Documentation Structure (`docs/`)

### Deployment Guides

```
docs/deployment/
├── RENDER_DEPLOYMENT_GUIDE.md        # Comprehensive Render guide
├── RENDER_DEPLOYMENT_CHECKLIST.md    # Quick deployment steps
├── DEPLOYMENT_GUIDE.md               # General deployment (Hostinger)
└── README_DEPLOYMENT.md              # Additional deployment info
```

**When to use:**
- Deploying to production
- Setting up hosting
- Configuring custom domains

### Setup Guides

```
docs/setup/
├── MAIL_SETUP_GUIDE.md              # Email configuration
├── MAIL_SETUP_COMPLETE.md           # Email setup summary
├── KEEP_ALIVE_GUIDE.md              # Keep backend awake
└── GITHUB_ACTIONS_KEEPALIVE.md      # GitHub Actions setup
```

**When to use:**
- Initial project setup
- Configuring features
- Troubleshooting

## 🛠️ Scripts Structure (`scripts/`)

```
scripts/
├── start-dev.ps1           # Start both frontend & backend (PowerShell)
└── start-backend.bat       # Start backend only (Windows)
```

**Purpose:**
- Simplify development workflows
- Automate common tasks
- Platform-specific scripts

## ⚙️ Configuration Files

### Root Level Configs

```
blaupunkt/
├── vite.config.js          # Vite bundler configuration
├── tailwind.config.js      # Tailwind CSS customization
├── eslint.config.js        # Code linting rules
├── render.yaml             # Render deployment config
├── netlify.toml            # Netlify config (alternative)
├── package.json            # Frontend dependencies & scripts
├── .gitignore              # Git ignore patterns
└── .env                    # Environment variables (gitignored)
```

### Environment Files

```
.env                    # Local development (gitignored)
.env.example            # Example template (committed)
.env.production         # Production values (committed, no secrets)
backend/.env            # Backend config (gitignored)
backend/.env.example    # Backend template (committed)
```

**Security:**
- Never commit actual `.env` files
- Use `.env.example` as templates
- Set real values in hosting platform

## 🤖 GitHub Configuration (`.github/`)

```
.github/
└── workflows/
    ├── keep-backend-alive.yml      # Simple keep-alive
    └── keep-alive-advanced.yml     # Advanced with monitoring
```

**Purpose:**
- Automated backend monitoring
- CI/CD workflows
- Keep Render free tier awake

## 🗂️ Additional Folders

### Public Folder

```
public/
├── assets/             # Publicly accessible assets
└── images/             # Public images
```

**Note:** Some assets duplicated between `src/assets` and `public/` - consider consolidating.

### Build Output

```
dist/                   # Vite build output (gitignored)
```

## 📋 File Naming Conventions

### Components
- **PascalCase:** `NavBar.jsx`, `ProductCard.jsx`
- **Descriptive:** Name indicates purpose
- **Extension:** `.jsx` for React components

### Utilities & Functions
- **camelCase:** `filterUtils.js`, `errorHandling.js`
- **Descriptive:** Clear indication of functionality
- **Extension:** `.js` for pure JavaScript

### Data Files
- **camelCase:** `data.js`, `assets.js`, `productsData.js`
- **Consistent:** Same pattern across all data folders

### Documentation
- **UPPERCASE:** `README.md`, `DEPLOYMENT_GUIDE.md`
- **Descriptive:** Clear purpose from filename
- **Markdown:** `.md` extension

## 🧹 Cleanup Checklist

### ✅ Completed
- [x] Organized documentation into `docs/` folder
- [x] Moved scripts to `scripts/` folder
- [x] Removed example/test files (`EXAMPLE_USAGE.js`)
- [x] Updated `.gitignore` with comprehensive patterns
- [x] Created comprehensive README
- [x] Organized GitHub Actions workflows

### 🔄 Optional Future Improvements

- [ ] Consolidate `public/assets` and `src/assets`
- [ ] Remove duplicate image folders (`images/` vs `assets/images/`)
- [ ] Add TypeScript for better type safety
- [ ] Create component documentation (Storybook)
- [ ] Add unit tests structure
- [ ] Set up pre-commit hooks (Husky)
- [ ] Add automated dependency updates (Dependabot)

## 📊 Folder Size Guidelines

- Keep component files under 300 lines
- Split large components into smaller ones
- Extract repeated logic into hooks
- Move constants to separate files
- Keep data files focused and modular

## 🔍 Finding Things Quickly

### By Feature
```
Product Category Pages → src/Pages/
Product Data → src/Data/[CategoryName]/
Product Images → src/assets/Images/[CategoryName]/
Product PDFs → src/assets/pdf/[CategoryName]/
```

### By Type
```
Components → src/Components/
Pages → src/Pages/
Data → src/Data/
Utils → src/utils/
Config → src/config/
```

### By Purpose
```
Development → scripts/
Deployment → docs/deployment/
Setup → docs/setup/
Backend → backend/
CI/CD → .github/workflows/
```

## 🚀 Best Practices

### When Adding New Features

1. **Components:** Add to appropriate `src/Components/` subfolder
2. **Pages:** Add to `src/Pages/` and update routing
3. **Data:** Create new category folder in `src/Data/`
4. **Assets:** Organize by category in `src/assets/`
5. **Documentation:** Add setup guide to `docs/setup/`

### When Deploying

1. Check all environment variables
2. Run build locally first
3. Test thoroughly
4. Follow deployment checklist
5. Monitor logs after deployment

### When Troubleshooting

1. Check appropriate guide in `docs/`
2. Review logs (browser console, backend terminal)
3. Verify environment variables
4. Check deployment status
5. Review error boundaries

## 📞 Need Help?

- **Setup Issues:** See `docs/setup/`
- **Deployment Issues:** See `docs/deployment/`
- **Code Questions:** Check component/file comments
- **General:** See main `README.md`

---

**Maintained by:** Blaupunkt EV Development Team
**Last Updated:** October 25, 2025
**Version:** 1.0.0
