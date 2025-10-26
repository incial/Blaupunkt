# 📊 Email System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    Blaupunkt EV Contact Form                    │
│                         Email Flow                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│                 │         │                  │         │                 │
│   FRONTEND      │────────▶│     BACKEND      │────────▶│  HOSTINGER      │
│  (Hostinger)    │         │    (Render)      │         │     EMAIL       │
│                 │         │                  │         │                 │
└─────────────────┘         └──────────────────┘         └─────────────────┘
        │                            │                            │
        │                            │                            │
        ▼                            ▼                            ▼
  
1. User fills form        2. Receives POST          3. Sends email via
   on website                request, validates        SMTP to inbox
                             data
   
   blaupunkt-ev.com         blaupunkt-backend         info@blaupunkt-ev.com
                            .onrender.com
```

---

## Detailed Component Breakdown

### 1. Frontend (Hosted on Hostinger)

**Location**: `https://blaupunkt-ev.com`

**Files**:
- `src/Components/ContactUs.jsx` - Contact form component
- `src/config/api.js` - API configuration
- `.env.production` - Environment variables

**Key Configuration**:
```javascript
// .env.production
VITE_API_URL=https://blaupunkt-backend.onrender.com
```

**Flow**:
```javascript
User fills form
    ↓
Submits (onClick)
    ↓
fetch(`${VITE_API_URL}/api/contact`, {
    method: 'POST',
    body: JSON.stringify({
        fullName, email, phone, message
    })
})
    ↓
Waits for response
    ↓
Shows success/error message
```

---

### 2. Backend (Hosted on Render)

**Location**: `https://blaupunkt-backend.onrender.com`

**Files**:
- `backend/mailserver.js` - Express server
- `backend/config.js` - SMTP configuration
- `backend/template.js` - Email HTML template

**Environment Variables** (Set in Render Dashboard):
```bash
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@blaupunkt-ev.com
SMTP_PASS=your-password
DESTINATION_EMAIL=info@blaupunkt-ev.com
VITE_DOMAIN=https://blaupunkt-ev.com
```

**Flow**:
```
Receives POST /api/contact
    ↓
Validates required fields (fullName, email, message)
    ↓
Creates nodemailer transporter
    ↓
Generates HTML email template
    ↓
Sends email via SMTP
    ↓
Returns success/error response
```

---

### 3. Email Service (Hostinger)

**Location**: Hostinger Email Server

**Configuration**:
```
SMTP Server: smtp.hostinger.com
Port: 465 (SSL) or 587 (TLS)
Authentication: Required
Username: info@blaupunkt-ev.com
Password: [Your email password]
```

**Flow**:
```
Receives SMTP connection from Render
    ↓
Authenticates credentials
    ↓
Accepts email for delivery
    ↓
Delivers to recipient inbox
```

---

## Request/Response Flow

### Successful Submission

```
┌──────────┐                ┌──────────┐                ┌──────────┐
│ Frontend │                │ Backend  │                │  Email   │
└─────┬────┘                └────┬─────┘                └────┬─────┘
      │                          │                           │
      │  POST /api/contact       │                           │
      │──────────────────────────▶                           │
      │  {fullName, email, ...}  │                           │
      │                          │                           │
      │                          │  SMTP Connection          │
      │                          │───────────────────────────▶
      │                          │  AUTH info@blaupunkt...   │
      │                          │                           │
      │                          │  MAIL FROM, RCPT TO       │
      │                          │───────────────────────────▶
      │                          │                           │
      │                          │  DATA (email content)     │
      │                          │───────────────────────────▶
      │                          │                           │
      │                          │  250 OK                   │
      │                          │◀───────────────────────────
      │                          │                           │
      │  200 OK                  │                           │
      │◀──────────────────────────                           │
      │  {success: true}         │                           │
      │                          │                           │
      │  Show success toast      │                           │
      │                          │                           │
      │                          │                      Deliver
      │                          │                      to inbox
      │                          │                           │
```

### Failed Submission (Authentication Error)

```
┌──────────┐                ┌──────────┐                ┌──────────┐
│ Frontend │                │ Backend  │                │  Email   │
└─────┬────┘                └────┬─────┘                └────┬─────┘
      │                          │                           │
      │  POST /api/contact       │                           │
      │──────────────────────────▶                           │
      │                          │                           │
      │                          │  SMTP Connection          │
      │                          │───────────────────────────▶
      │                          │  AUTH info@blaupunkt...   │
      │                          │                           │
      │                          │  535 Authentication Failed│
      │                          │◀───────────────────────────
      │                          │                           │
      │  500 Internal Error      │                           │
      │◀──────────────────────────                           │
      │  {success: false}        │                           │
      │                          │                           │
      │  Show error toast        │                           │
      │                          │                           │
```

---

## Security & Configuration

### CORS Configuration

**Backend allows requests from**:
```javascript
// backend/mailserver.js
const allowedOrigins = [
    'https://blaupunkt-ev.com',        // Production
    'http://localhost:5173',            // Development
]
```

### Email Security

```javascript
// backend/config.js
transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,                       // SSL encryption
    auth: {
        user: process.env.SMTP_USER,    // From env variable
        pass: process.env.SMTP_PASS     // Secured in Render
    },
    tls: {
        rejectUnauthorized: false       // For compatibility
    }
})
```

### Environment Variables Security

| Variable | Stored In | Visibility |
|----------|-----------|------------|
| `SMTP_PASS` | Render Dashboard | Hidden (encrypted) |
| `SMTP_USER` | Render Dashboard | Visible |
| `VITE_API_URL` | Frontend build | Public (in JS bundle) |

---

## Monitoring & Debugging

### Health Check Endpoint

```bash
GET https://blaupunkt-backend.onrender.com/api/health

Response:
{
    "status": "ok",
    "timestamp": "2025-10-26T10:30:00.000Z",
    "message": "Backend is alive!"
}
```

### Debug Endpoint (Remove in production!)

```bash
GET https://blaupunkt-backend.onrender.com/api/debug-env

Response:
{
    "message": "Environment Variables Status",
    "status": {
        "SMTP_HOST": "✅ Set",
        "SMTP_PORT": "✅ Set",
        "SMTP_USER": "✅ Set",
        "SMTP_PASS": "✅ Set (hidden)",
        "DESTINATION_EMAIL": "✅ Set",
        "NODE_ENV": "production"
    }
}
```

### Render Logs

```bash
# View in Render Dashboard
Your Service → Logs tab

# Example successful log:
✅ SMTP transporter verified successfully.
🚀 Server running at http://localhost:5000
📧 Email destination: info@blaupunkt-ev.com
🌍 Environment: production

# Example error log:
⚠️ SMTP transporter verification failed
Error: Invalid login: 535 Authentication failed
```

---

## Performance Considerations

### Render Free Tier Behavior

```
┌────────────────────────────────────────┐
│  Activity       │  Backend Status      │
├─────────────────┼─────────────────────┤
│  0-15 min idle  │  Running ✅          │
│  15+ min idle   │  Sleeping 😴         │
│  New request    │  Waking up... ⏳     │
│                 │  (30-60 seconds)     │
│  After wake     │  Running ✅          │
└────────────────────────────────────────┘
```

**Solution**: Set up GitHub Actions keep-alive (see `docs/setup/KEEP_ALIVE_GUIDE.md`)

---

## Troubleshooting Decision Tree

```
Email not sending?
    │
    ├─▶ Is backend responding? (/api/health)
    │   ├─▶ NO → Check Render deployment status
    │   │         Check Render logs for errors
    │   │
    │   └─▶ YES → Are env variables set? (/api/debug-env)
    │       ├─▶ NO → Add missing variables in Render
    │       │
    │       └─▶ YES → SMTP authentication working?
    │           ├─▶ NO → Check Hostinger credentials
    │           │         Try alternative SMTP settings
    │           │         Test with email client
    │           │
    │           └─▶ YES → Check destination email
    │                     Check spam folder
    │                     Verify email quota
```

---

## Testing Strategy

### 1. Local Testing (Before Deploy)
```powershell
.\scripts\test-hostinger-smtp.ps1
```

### 2. Backend Testing (After Render Deploy)
```bash
# Health check
curl https://blaupunkt-backend.onrender.com/api/health

# Environment check
curl https://blaupunkt-backend.onrender.com/api/debug-env

# Email test
curl -X POST https://blaupunkt-backend.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@test.com","message":"Hi"}'
```

### 3. Frontend Testing (After Hostinger Deploy)
```
1. Visit https://blaupunkt-ev.com/contact
2. Fill form completely
3. Submit
4. Check for success message
5. Verify email in inbox
```

---

## Deployment Checklist

- [ ] **Hostinger Email**: Account created and credentials obtained
- [ ] **Local Test**: SMTP test passes locally
- [ ] **Render Backend**: Service deployed with all env variables
- [ ] **Backend Health**: `/api/health` returns 200 OK
- [ ] **Env Check**: `/api/debug-env` shows all ✅
- [ ] **Frontend Build**: Built with production API URL
- [ ] **Hostinger Upload**: Files uploaded to public_html
- [ ] **Frontend Live**: Website accessible at domain
- [ ] **Form Test**: Contact form submits successfully
- [ ] **Email Received**: Test email arrives in inbox
- [ ] **Cleanup**: `/api/debug-env` endpoint removed/secured

---

## Summary

```
User Form Input → Frontend Validation → Backend API
                                          ↓
                                    SMTP Connection
                                          ↓
                                   Hostinger Email
                                          ↓
                                   Inbox Delivery
```

**Total latency**: ~2-5 seconds (first request after sleep: ~30-60 seconds)

**Success rate**: 99%+ with correct configuration

**Cost**: $0 (using free tiers of Render + Hostinger email)

---

For more details, see:
- Setup Guide: `HOSTINGER_EMAIL_SETUP.md`
- Quick Start: `QUICK_START_EMAIL.md`
- Troubleshooting: `docs/TROUBLESHOOTING_500_ERROR.md`
