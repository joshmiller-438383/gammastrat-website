# GammaStrat.com — Vercel Deployment Guide

## Overview

This is a **Next.js 14** project with **Sanity CMS** integration. It deploys to Vercel as a server-rendered application. The `patches/` directory contains a `patch-package` fix for a known Next.js 14 bug with styled-components; it is applied automatically via the `postinstall` script.

---

## Step 1 — Push to GitHub

```bash
cd /path/to/gammastrat-next
git init
git add .
git commit -m "Initial GammaStrat.com production build"
gh repo create gammastrat-com --private --source=. --push
```

Or push to an existing repository:

```bash
git remote add origin https://github.com/YOUR_ORG/gammastrat-com.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Create Vercel Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Root directory: `.` (leave as default)
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)

---

## Step 3 — Environment Variables

In Vercel → Project Settings → **Environment Variables**, add the following. Set all three environments (Production, Preview, Development).

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `fa41e7wa` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Your Sanity dataset |
| `SANITY_API_TOKEN` | `skZGzfOABMUzaLcCeB0eDlXGLzsQitEMbTVNUoVNZHmtApxqJkUOMdK6gCw8KADvgSpTZMR7NliSXp9szgqCRKGskXnRzx0KeOGiHNu0K9TDHpps6favikjGyXTZH1nn3GFjc4W9V3BwlbM441FTKLWQuD3envHyfXkR2KALeRPsjNlUQPLf` | Editor token — keep secret |
| `NEXT_PUBLIC_SITE_URL` | `https://gammastrat.com` | Used for SEO/OG tags |

> **Security note:** `SANITY_API_TOKEN` is a server-side variable (no `NEXT_PUBLIC_` prefix). It is never exposed to the browser.

---

## Step 4 — Add Custom Domain

1. Vercel → Project → **Domains**
2. Add `gammastrat.com` and `www.gammastrat.com`
3. Vercel will show you DNS records to add

### DNS Records (add at your registrar)

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> If you use Cloudflare, set proxy status to **DNS only** (grey cloud) for the A record initially, then enable proxy after confirming deployment works.

---

## Step 5 — Sanity CORS Configuration

The Sanity Studio (`/studio`) and the API calls need your production domain whitelisted.

1. Go to [sanity.io/manage](https://sanity.io/manage) → Project **gammastrat.com** → **API** → **CORS Origins**
2. Add the following origins (with credentials enabled):

| Origin | Allow Credentials |
|---|---|
| `https://gammastrat.com` | ✅ Yes |
| `https://www.gammastrat.com` | ✅ Yes |
| `https://*.vercel.app` | ✅ Yes |

---

## Step 6 — Sanity Studio Access

The embedded Sanity Studio is available at:

```
https://gammastrat.com/studio
```

To log in, you need to be added as a member of the Sanity project:

1. Go to [sanity.io/manage](https://sanity.io/manage) → Project **gammastrat.com** → **Members**
2. Invite team members by email
3. They can log in at `/studio` using Google or GitHub

---

## Step 7 — Deploy

Click **Deploy** in Vercel. The first deploy takes ~2 minutes.

After deploy, verify:
- [ ] Homepage loads at `https://gammastrat.com`
- [ ] Plans page loads at `https://gammastrat.com/plans`
- [ ] Studio loads at `https://gammastrat.com/studio`
- [ ] Sanity content appears (plans, FAQs, testimonials)

---

## Content Management

All website content is managed through Sanity CMS at `/studio`:

| Section | Schema | Fields |
|---|---|---|
| Hero | `hero` | Headline, subheadline, CTA button text/URL, video URL |
| Pricing Plans | `plan` | Name, price, billing period, features, CTA, highlight flag |
| Testimonials | `testimonial` | Name, role, company, quote, avatar |
| Blog Posts | `post` | Title, slug, excerpt, body (rich text), cover image, author |
| FAQ | `faq` | Question, answer, order |
| Site Settings | `siteSettings` | Contact email, phone, address, social links |

---

## Troubleshooting

### Build fails with "patch-package" error
Ensure `patch-package` is in `devDependencies` and the `patches/` directory is committed to git. The `postinstall` script applies the patches automatically.

### Sanity content not loading
Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set correctly in Vercel environment variables. Also verify the CORS origins include your production domain.

### Studio shows "Unauthorized"
Add your production domain to Sanity CORS origins (Step 5 above) with credentials enabled.

### Images not loading
Images are served from Sanity's CDN (`cdn.sanity.io`). No additional configuration needed.

---

## Architecture Notes

- **Framework:** Next.js 14.2.5 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **CMS:** Sanity v3 (embedded studio at `/studio`)
- **Fonts:** Geist Sans + Geist Mono (via `next/font`)
- **Deployment:** Vercel (serverless functions for dynamic pages)
- **Patch:** `patches/next+14.2.5.patch` — fixes a Next.js 14 bug where internal error pages fail to prerender due to styled-components SSR conflict. Applied automatically via `postinstall`.
