# 🚀 Quick Reference - Common Tasks

Fast reference for common development tasks in the Blaupunkt EV project.

## 🔄 Development Workflow

### Start Development Servers

```powershell
# Option 1: Both servers at once
.\scripts\start-dev.ps1

# Option 2: Separate terminals
# Terminal 1
cd backend
node mailserver.js

# Terminal 2
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Common Commands

### Frontend

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build
npm run build

# Lint code
npm run lint

# Preview build
npm run preview
```

### Backend

```bash
cd backend

# Install dependencies
npm install

# Start server
node mailserver.js

# Or using npm
npm start
```

## 🧪 Testing

### Test Backend Health

```powershell
Invoke-RestMethod -Uri 'http://localhost:5000/api/health'
```

### Test Contact Form

```powershell
$body = @{
    fullName = 'Test User'
    email = 'test@example.com'
    phone = '1234567890'
    message = 'Test message'
} | ConvertTo-Json

Invoke-RestMethod -Uri 'http://localhost:5000/api/contact' -Method Post -Body $body -ContentType 'application/json'
```

## 📂 Quick File Locations

| What | Where |
|------|-------|
| Components | `src/Components/` |
| Pages | `src/Pages/` |
| Product Data | `src/Data/` |
| Images | `src/assets/Images/` |
| PDFs | `src/assets/pdf/` |
| Backend | `backend/` |
| Documentation | `docs/` |
| Scripts | `scripts/` |

## 🔧 Configuration Quick Ref

### Environment Variables

**Frontend (`.env`):**
```env
VITE_API_URL=http://localhost:5000
NODE_ENV=development
```

**Backend (`backend/.env`):**
```env
NODE_ENV=development
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-password
DESTINATION_EMAIL=info@blaupunkt-ev.com
```

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | Vite will auto-select next port |
| Port 5000 in use | Kill process: `taskkill /PID <PID> /F` |
| Backend not responding | Check if server is running |
| Contact form fails | Verify SMTP credentials |
| Build fails | Clear `node_modules`, reinstall |
| Images not loading | Check file path and imports |

## 📚 Documentation Links

- **[Complete README](../README.md)** - Project overview
- **[Organization Guide](PROJECT_ORGANIZATION.md)** - Structure explained
- **[Mail Setup](setup/MAIL_SETUP_GUIDE.md)** - Email configuration
- **[Render Deployment](deployment/RENDER_DEPLOYMENT_GUIDE.md)** - Deploy guide
- **[Keep-Alive Setup](setup/GITHUB_ACTIONS_KEEPALIVE.md)** - GitHub Actions

## 🚀 Deployment Quick Links

### Render Deployment

1. Push to GitHub: `git push`
2. Create services on Render
3. See: `docs/deployment/RENDER_DEPLOYMENT_CHECKLIST.md`

### Environment Setup

- **Frontend:** Set `VITE_API_URL` to backend URL
- **Backend:** Set SMTP credentials in Render dashboard

## 📞 URLs

| Environment | Frontend | Backend Health |
|-------------|----------|----------------|
| **Local** | http://localhost:3000 | http://localhost:5000/api/health |
| **Production** | https://your-domain.com | https://backend.onrender.com/api/health |

## ⚡ Quick Tips

- ✅ Always test locally before deploying
- ✅ Commit `.env.example`, not `.env`
- ✅ Use descriptive commit messages
- ✅ Run `npm run lint` before committing
- ✅ Check health endpoint after deployment
- ✅ Monitor GitHub Actions for keep-alive status

---

**Last Updated:** October 25, 2025
