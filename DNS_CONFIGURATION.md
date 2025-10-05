# DNS Configuration for Blaupunkt-EV.com

## Domain Connection Instructions

Please follow these instructions to connect your custom domain to the Hostinger hosting.

---

## 📋 Your Hosting Details

```
Server IP Address: 153.92.9.132
FTP Host: ftp://153.92.9.132
Hosting Provider: Hostinger
```

---

## 🌐 DNS Configuration Options

You have two options to connect your domain. Choose the one that best fits your needs.

---

## ✅ Option 1: Update Nameservers (RECOMMENDED)

This is the simplest method and gives Hostinger full control over DNS.

### Instructions for Your Domain Registrar:

1. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. Find the **"Nameservers"** or **"DNS Settings"** section
3. Change nameservers to:

```
Primary Nameserver:   ns1.dns-parking.com
Secondary Nameserver: ns2.dns-parking.com
```

### Benefits:
- ✅ Automatic SSL certificate
- ✅ Email routing handled by Hostinger
- ✅ Easier to manage from Hostinger hPanel
- ✅ Automatic DNS updates

### Propagation Time:
- **Typical:** 2-6 hours
- **Maximum:** 24-48 hours

---

## ✅ Option 2: Update A Records Only

Use this if you want to keep your current nameservers (e.g., for existing email setup).

### Instructions for Your Domain Registrar:

1. Log in to your domain registrar
2. Find **"DNS Management"** or **"DNS Zone Editor"**
3. Add or update the following **A Records**:

#### Record 1: Root Domain
```
Type:  A
Name:  @ (or leave blank, or enter "blaupunkt-ev.com")
Value: 153.92.9.132
TTL:   14400 (or Auto/Automatic)
```

#### Record 2: WWW Subdomain
```
Type:  A
Name:  www
Value: 153.92.9.132
TTL:   14400 (or Auto/Automatic)
```

### Optional: CNAME for www (Alternative to www A Record)
```
Type:   CNAME
Name:   www
Target: blaupunkt-ev.com
TTL:    14400
```

### Benefits:
- ✅ Keep existing nameservers
- ✅ Maintain current email MX records
- ✅ More control over individual DNS records

### Important Notes:
- Your existing MX records (email) will NOT be affected
- You may need to manually configure SSL in Hostinger hPanel
- Other DNS records remain unchanged

### Propagation Time:
- **Typical:** 30 minutes - 2 hours
- **Maximum:** 24-48 hours

---

## 📧 Email Configuration (If Applicable)

If you have email addresses using this domain (e.g., info@blaupunkt-ev.com), ensure these MX records remain in place:

### Typical MX Records to Preserve:
```
Type:     MX
Priority: 10
Value:    [Your email provider's server]
TTL:      Auto
```

**Note:** If using Option 1 (Nameservers), configure email in Hostinger hPanel.

---

## 🔍 Verify DNS Propagation

After updating DNS settings, check propagation status:

### Online Tools:
1. **WhatsMyDNS.net**: https://www.whatsmydns.net/
2. **DNSChecker.org**: https://dnschecker.org/

### Command Line (Windows PowerShell):
```powershell
# Check A record for root domain
nslookup blaupunkt-ev.com

# Check A record for www
nslookup www.blaupunkt-ev.com
```

### Expected Result:
```
Name:    blaupunkt-ev.com
Address: 153.92.9.132
```

---

## 🔒 SSL Certificate Setup

Once DNS is fully propagated:

### Automatic SSL (Recommended):
1. Log in to **Hostinger hPanel**
2. Go to **Security → SSL**
3. Select **blaupunkt-ev.com**
4. Click **"Install SSL"**
5. Wait 10-20 minutes for activation

### SSL Provider:
- Free Let's Encrypt SSL certificate
- Automatically renews every 90 days

### Verify SSL:
Visit: https://www.sslshopper.com/ssl-checker.html
Enter: blaupunkt-ev.com

---

## ✅ Verification Checklist

After DNS configuration, verify these items:

### Basic Connectivity:
- [ ] http://blaupunkt-ev.com loads website
- [ ] http://www.blaupunkt-ev.com loads website
- [ ] Both redirect to HTTPS (after SSL installed)

### Website Functionality:
- [ ] Home page loads correctly
- [ ] All internal links work
- [ ] Images and assets load properly
- [ ] Contact form works
- [ ] All product pages accessible
- [ ] No 404 errors on routes

### SSL Certificate:
- [ ] https://blaupunkt-ev.com shows secure padlock
- [ ] Certificate is valid (green padlock icon)
- [ ] No mixed content warnings
- [ ] Certificate issued by Let's Encrypt

---

## 🕐 Timeline

### Immediate (0-5 minutes):
- DNS records updated in registrar

### Short-term (30 minutes - 2 hours):
- DNS propagation begins
- Some locations see new records

### Medium-term (2-6 hours):
- Most locations propagated
- Domain likely accessible

### Long-term (24-48 hours):
- Full global propagation
- All locations updated
- SSL can be installed

---

## 🐛 Troubleshooting

### Issue: Domain not resolving after 48 hours

**Check:**
1. Verify A records are correct: `153.92.9.132`
2. Check TTL values (lower is faster, e.g., 300-14400)
3. Clear local DNS cache:
   ```powershell
   ipconfig /flushdns
   ```

**Solution:**
Contact your domain registrar support for assistance.

---

### Issue: Website shows "DNS_PROBE_FINISHED_NXDOMAIN"

**Possible Causes:**
- A records not configured correctly
- DNS not yet propagated
- Typo in domain name

**Solution:**
1. Double-check A record values
2. Wait additional 12-24 hours
3. Use incognito/private browsing mode

---

### Issue: Mixed content warnings (HTTP/HTTPS)

**Cause:**
Some resources loading over HTTP instead of HTTPS

**Solution:**
1. Ensure all assets use relative URLs
2. Check `.htaccess` forces HTTPS redirect
3. Update hardcoded HTTP links to HTTPS

---

### Issue: SSL certificate not installing

**Possible Causes:**
- DNS not fully propagated
- Domain not pointing to correct IP
- CAA records blocking Let's Encrypt

**Solution:**
1. Wait 24-48 hours for full DNS propagation
2. Verify A records point to `153.92.9.132`
3. Check CAA records allow Let's Encrypt:
   ```
   blaupunkt-ev.com. CAA 0 issue "letsencrypt.org"
   ```

---

## 📞 Support Contacts

### Hostinger Support:
- **Live Chat:** Available 24/7 in hPanel
- **Email:** support@hostinger.com
- **Knowledge Base:** https://support.hostinger.com/

### Domain Registrar:
Contact your registrar's support if DNS changes don't save or propagate.

---

## 📊 DNS Records Summary

### For Quick Reference:

| Type | Name | Value | TTL | Priority |
|------|------|-------|-----|----------|
| A | @ | 153.92.9.132 | 14400 | - |
| A | www | 153.92.9.132 | 14400 | - |
| MX | @ | [Your mail server] | Auto | 10 |

**Or Nameservers:**
- ns1.dns-parking.com
- ns2.dns-parking.com

---

## 🎯 Next Steps

1. **Choose your DNS configuration method** (Option 1 or 2)
2. **Update DNS records** at your domain registrar
3. **Wait for propagation** (24-48 hours)
4. **Install SSL certificate** in Hostinger hPanel
5. **Verify website** is accessible via domain
6. **Test all functionality**

---

## ✉️ Email Template for Domain Registrar Support

If you need help from your registrar, use this template:

```
Subject: DNS Configuration Assistance for blaupunkt-ev.com

Hello,

I need to update the DNS records for my domain blaupunkt-ev.com to point to my hosting server.

Please help me update:

Option 1: Nameservers
- Primary: ns1.dns-parking.com
- Secondary: ns2.dns-parking.com

OR

Option 2: A Records
- @ (root): 153.92.9.132
- www: 153.92.9.132

Please preserve any existing MX records for email.

Thank you!
```

---

**Questions?** Contact your web developer or Hostinger support for assistance.

---

*Configuration Date: October 6, 2025*
*Server IP: 153.92.9.132*
*Hosting: Hostinger Single Web Hosting*
