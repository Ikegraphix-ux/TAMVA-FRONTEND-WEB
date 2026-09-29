# TAMVA Public Website

The public-facing TAMVA website for product information, trust principles, resources and contact enquiries. It is separate from the authenticated TAMVA Admin App.

Built with Next.js App Router, TypeScript, React and Tailwind CSS.

## Local setup

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/Ikegraphix-ux/TAMVA-FRONTEND-WEB.git
cd TAMVA-FRONTEND-WEB
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000. On macOS or Linux, replace the PowerShell `Copy-Item` command with `cp .env.example .env.local`.

## Development commands

```bash
npm run dev      # local development server
npm run lint     # lint the application
npm run build    # create a production build
npm run start    # serve the production build locally
```

## Routes

- `/` — homepage
- `/about` — company overview and principles
- `/products` — product overview
- `/products/passport`
- `/products/risk-intelligence`
- `/products/verification`
- `/solutions` — solution overview
- `/solutions/organizations`
- `/solutions/businesses`
- `/solutions/investigators`
- `/solutions/individuals`
- `/trust` — trust and security principles
- `/resources` — searchable resource library
- `/resources/[slug]` — individual resource articles
- `/contact` — enquiry form

## Architecture

```
app/                    Next.js App Router pages and SEO routes
components/             Reusable UI components and page templates
lib/                    Types, site configuration and editorial content
services/               Backend API integration
```

The site uses Next.js App Router, React, TypeScript and Tailwind CSS. It is presentation-focused. Business rules, identity operations and risk evaluation belong in the TAMVA backend.

## Backend integration

Set the public backend URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://tamva.onrender.com
NEXT_PUBLIC_SITE_URL=https://www.tamva.com
```

The product service uses the local editorial catalog only when the API URL is not configured or a product endpoint returns 404. Other API failures are surfaced instead of being silently replaced with stale content.

The contact form requires the `/public/contact` backend endpoint. It never reports a successful submission when the request has not actually reached the backend.

Before production, confirm that the backend exposes the public endpoints used by this website and that CORS is configured for the deployed site.

## Content

Public copy is kept in `lib/content.ts`. The repository intentionally avoids inventing customer numbers, certifications, partner names, office details or other facts that have not been officially supplied.

Resource articles are stored as structured content and rendered through `app/resources/[slug]/page.tsx`.

## SEO and deployment

The website is hosted as a Next.js application. GitHub is the source repository; deployment is configured separately with the hosting provider.

Search indexing is disabled by default. In Vercel, keep previews and staging without `NEXT_PUBLIC_INDEXING_ENABLED=true`. To enable indexing, configure both `VERCEL_ENV=production`, `NEXT_PUBLIC_INDEXING_ENABLED=true`, and `NEXT_PUBLIC_SITE_URL` with the confirmed official HTTPS domain in the Production environment. The application then emits canonical URLs for that domain and includes the sitemap in `robots.txt`. A `.vercel.app` URL cannot enable indexing. The official domain has not yet been confirmed, so do not replace the example value until it is.

## Design system

Color, typography and spacing tokens live in `tailwind.config.ts` and `app/globals.css`.

- Primary: deep blackish-green
- Accent: emerald
- Secondary accent: warm gold
- Typeface: Plus Jakarta Sans

## Accessibility

- Semantic landmarks and skip-to-content navigation
- Keyboard-operable navigation and FAQ disclosures
- Visible focus states
- 44px minimum touch targets for primary interactive controls
- Form validation connected to fields with accessible error messaging
- Reduced-motion support

## Environment variables

Copy `.env.example` to `.env.local` and adjust local values as needed.

- `NEXT_PUBLIC_API_URL`: public API base URL. This must not include credentials.
- `NEXT_PUBLIC_SITE_URL`: confirmed official HTTPS domain, set in Production only.
- `NEXT_PUBLIC_INDEXING_ENABLED`: set to `true` only for the official production deployment.

Never commit secrets. Variables prefixed with `NEXT_PUBLIC_` are exposed to website visitors and must not contain credentials or private API keys.

## Testing and accessibility

The continuous integration workflow installs dependencies, runs lint, and creates a production build. Before opening a pull request, run `npm run lint` and `npm run build`.

The interface uses semantic landmarks, skip-to-content navigation, keyboard-operable controls, visible focus states, and accessible form errors. Review keyboard navigation and mobile layouts when changing interactive pages.

## Contributions and ownership

See [CONTRIBUTING.md](CONTRIBUTING.md) for the change workflow. Repository ownership and CODEOWNERS are not specified yet; maintainers should add confirmed owners before enforcing review requirements.
