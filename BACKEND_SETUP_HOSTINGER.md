# Hostinger Backend Email Setup - Quick Guide

## ✅ What I've Done

1. **Fixed Backend Code**
   - Fixed `nodemailer.createTransport()` typo in `config.js`
   - Added SMTP verification on server startup (fails fast if misconfigured)
   - Updated `smtp-test.js` to use environment variables

2. **Created Configuration Files**
   - `.env` - Your production environment variables (update passwords!)
   - `.env.example` - Template for deployment
   - `README.md` - Complete documentation

## 🚀 Next Steps (Choose Your Path)

### Path 1: Using Hostinger Email (Recommended if you have Hostinger email accounts)

**Step 1: Create Email Accounts**
1. Login to Hostinger hPanel
2. Go to **Emails** → **Email Accounts**
3. Create: `noreply@blaupunkt-ev.com` (for sending)
4. Create: `info@blaupunkt-ev.com` (for receiving contact forms)

**Step 2: Get SMTP Settings**
1. Click **Configure Email Client** next to `noreply@blaupunkt-ev.com`
2. Copy the settings (example):
   ```
   Incoming Server: mail.blaupunkt-ev.com
   Outgoing Server (SMTP): mail.blaupunkt-ev.com
   Port: 465 (SSL) or 587 (TLS)
   Username: noreply@blaupunkt-ev.com
   Password: [the password you set]
   ```

**Step 3: Update backend/.env**
Open `backend/.env` and replace:
```env
SMTP_HOST=mail.blaupunkt-ev.com
SMTP_PORT=465
SMTP_USER=noreply@blaupunkt-ev.com
SMTP_PASS=your-actual-password-here  # ← CHANGE THIS!
DESTINATION_EMAIL=info@blaupunkt-ev.com
```

**Step 4: Test Connection**
```powershell
cd backend
node smtp-test.js
```

Expected output:
```
✅ Env SMTP (mail.blaupunkt-ev.com:465) - WORKS!
```

**Step 5: Deploy Backend**

Since Hostinger shared hosting typically **doesn't support Node.js**, deploy the backend separately:

#### Option A: Deploy to Render (Free, Easy)
1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Configure:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && node mailserver.js`
   - **Environment Variables:** Add all vars from `.env`
5. Deploy!
6. Copy your Render URL (e.g., `https://blaupunkt-backend.onrender.com`)

#### Option B: Deploy to Railway (Free, Fast)
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repo
4. Add environment variables from `.env`
5. Deploy!

**Step 6: Update Frontend**
Update your frontend to point to the deployed backend:
- If using Vite, update `VITE_API_URL` or hardcode the backend URL
- The contact form should POST to: `https://your-backend.onrender.com/api/contact`

---

### Path 2: Use External Email Service (Better Deliverability)

Services like SendGrid, Mailgun, or Postmark offer better deliverability and free tiers.

**SendGrid Example (100 emails/day free):**

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Update `backend/.env`:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=SG.your-actual-api-key-here
   DESTINATION_EMAIL=info@blaupunkt-ev.com
   ```
4. Test and deploy (same as Path 1, steps 4-6)

---

## 🧪 Testing Locally

**Test SMTP:**
```powershell
cd backend
node smtp-test.js
```

**Start Server Locally:**
```powershell
cd backend
node mailserver.js
```

**Test Contact Form:**
```powershell
curl -X POST http://localhost:5000/api/contact `
  -H "Content-Type: application/json" `
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test message"
  }'
```

---

## 📝 Current Status

✅ Backend code fixed and ready
✅ Environment configuration created
✅ SMTP test script working
✅ Documentation complete

⚠️ **Action Required:**
1. Update `backend/.env` with real email password
2. Test SMTP connection
3. Deploy backend to Node.js host (Render/Railway/etc.)
4. Update frontend to use deployed backend URL

---

## 🆘 Troubleshooting

| Error | Solution |
|-------|----------|
| `Authentication failed` | Wrong password in `.env` |
| `ECONNREFUSED` | Wrong SMTP host/port |
| Server won't start | SMTP verification failing - check credentials |
| Emails go to spam | Set up SPF/DKIM in Hostinger DNS or use SendGrid |

---

## 📚 Resources

- Full backend docs: `backend/README.md`
- Hostinger SMTP docs: https://support.hostinger.com/en/articles/1583286
- Render deployment: https://render.com/docs
- Railway deployment: https://docs.railway.app

---

**Need help?** Check `backend/README.md` for detailed troubleshooting and deployment guides.
