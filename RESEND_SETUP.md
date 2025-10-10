# Email Setup with Resend

This guide covers setting up email functionality for the Mint Clinic contact form using Resend.

## Why Resend?

- **Simple**: Just an API key, no complex Worker setup needed
- **Free tier**: 3,000 emails/month (perfect for contact forms)
- **Better deliverability**: Professional email service with DKIM/SPF
- **Works anywhere**: Next.js API routes, Vercel, Cloudflare Pages, etc.
- **No beta access needed**: Unlike Cloudflare Email Service

## Email Flows

### 1. Contact Form Submission

```
User fills form → POST /api/contact
    ↓
Validation (Zod)
    ↓
Resend sends 2 emails:
    ├─→ Notification to doc.aleksov+mintclinic@gmail.com
    │   (CC: ivetadoganova1+mintclinic@gmail.com)
    └─→ Confirmation to user from info@mintclinic.com
    ↓
Success response
```

### 2. Direct Email to info@mintclinic.com (Optional)

Configure Cloudflare Email Routing to forward:

- `info@mintclinic.com` → both Gmail addresses
- `*@mintclinic.com` (catchall) → both Gmail addresses

## Setup Steps

### 1. Create Resend Account

1. Go to https://resend.com/signup
2. Sign up with your email
3. Verify your email address

### 2. Add and Verify Domain

1. Go to **Domains** → **Add Domain**
2. Enter: `mintclinic.com`
3. Add the DNS records shown (if domain is on Cloudflare, this is easy):
   - **SPF** (TXT record)
   - **DKIM** (TXT record)
   - **DMARC** (TXT record) - optional but recommended

**Cloudflare DNS Configuration:**

- Navigate to Cloudflare Dashboard → DNS
- Add each record exactly as shown in Resend
- Wait 5-10 minutes for verification

4. Click **Verify Domain** in Resend dashboard

### 3. Get API Key

1. Go to **API Keys** → **Create API Key**
2. Name: `Mint Clinic Production`
3. Permission: **Sending access**
4. Domain: `mintclinic.com`
5. Copy the API key (starts with `re_`)

⚠️ **Important**: Save this key immediately - you won't see it again!

### 4. Configure Environment Variables

**Local Development (.env.local):**

```bash
RESEND_API_KEY="re_your_actual_api_key_here"
CONTACT_EMAIL_TO="doc.aleksov+mintclinic@gmail.com"
CONTACT_EMAIL_CC="ivetadoganova1+mintclinic@gmail.com"
CONTACT_EMAIL_FROM="info@mintclinic.com"
```

**Cloudflare Pages (Dashboard):**

1. Go to Pages → mintclinic → Settings → Environment variables
2. Add production variables:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL_TO=doc.aleksov+mintclinic@gmail.com
   CONTACT_EMAIL_CC=ivetadoganova1+mintclinic@gmail.com
   CONTACT_EMAIL_FROM=info@mintclinic.com
   ```

**Vercel (if deploying there):**

```bash
vercel env add RESEND_API_KEY
# Paste your key when prompted
```

### 5. Test Locally

```bash
# Create .env.local file
echo 'RESEND_API_KEY="re_your_key"' > .env.local

# Start development server
pnpm dev

# Visit http://localhost:3000/contacts
# Fill and submit the form
```

Check your Gmail for:

1. Notification email at both addresses
2. Confirmation email at the user's email

### 6. Deploy to Production

**Option A: Cloudflare Pages**

```bash
pnpm build
wrangler pages deploy .open-next
```

**Option B: Vercel** (simpler, alternative)

```bash
vercel --prod
```

## Email Routing (Optional - For Receiving)

If you want `info@mintclinic.com` to receive emails:

### Cloudflare Email Routing

1. Cloudflare Dashboard → Email → Email Routing
2. Enable Email Routing for `mintclinic.com`
3. Add routing rules:
   - `info@mintclinic.com` → `doc.aleksov+mintclinic@gmail.com`, `ivetadoganova1+mintclinic@gmail.com`
   - `*@mintclinic.com` → same addresses (catchall)
4. Verify both Gmail addresses

**Cost**: FREE (unlimited)

## Testing Checklist

- [ ] Domain verified in Resend dashboard (green checkmark)
- [ ] API key created and saved
- [ ] Environment variables set (local and production)
- [ ] Test form submission (Bulgarian version)
- [ ] Test form submission (English version)
- [ ] Verify notification arrives at both Gmail addresses
- [ ] Verify confirmation arrives at user's email
- [ ] Check spam folders if emails don't arrive
- [ ] Optional: Send test email to info@mintclinic.com

## Troubleshooting

### Domain Verification Fails

- Wait 10-15 minutes after adding DNS records
- Use `dig` or https://dnschecker.org to verify DNS propagation
- Ensure no trailing dots in DNS records
- DKIM record might be very long - copy entire value

### API Key Invalid

- Check you copied the entire key (starts with `re_`)
- Verify environment variable is set correctly
- Restart dev server after changing .env.local
- For production, redeploy after changing env vars

### Emails Not Sending

- Check Resend dashboard → Logs for error messages
- Verify `CONTACT_EMAIL_FROM` uses verified domain
- Check rate limits (3,000 emails/month on free tier)
- Look at server logs: `wrangler pages deployment tail`

### Emails Going to Spam

- Make sure domain is fully verified in Resend
- Add DMARC record (improves deliverability)
- Warm up your domain by sending gradually more emails
- Ask recipients to mark as "Not Spam"

### TypeScript Errors

```bash
npx tsc --noEmit
```

Should show no errors. If errors appear, check:

- Resend package is installed: `pnpm add resend`
- Imports are correct in `app/api/contact/route.ts`

## Resend Dashboard

Monitor your emails:

- **Logs**: See all sent emails and their status
- **Analytics**: Track delivery rates
- **Domains**: Manage domain verification
- **API Keys**: Rotate keys if compromised

## Cost

- **Free tier**: 3,000 emails/month
- **Pro plan**: $20/month for 50,000 emails
- **Enterprise**: Custom pricing

For a contact form, free tier is more than enough!

## Migration from Cloudflare Email Workers

✅ Already done! The implementation now uses Resend instead of:

- Cloudflare Email Workers (required beta access)
- Email Worker bindings
- Service bindings

Much simpler setup! 🎉

## Files Structure

```
app/api/contact/route.ts       # API endpoint using Resend
lib/email-templates.ts          # Plain text email templates (BG/EN)
components/ContactFormSection.tsx  # Form component
.env.example                    # Environment variables template
```

## Support Links

- Resend Docs: https://resend.com/docs
- Resend Status: https://status.resend.com
- Domain Verification: https://resend.com/docs/dashboard/domains/introduction
- API Reference: https://resend.com/docs/api-reference/emails/send-email
