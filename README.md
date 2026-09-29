# TAMVA Public Website

## Project purpose

This repository contains TAMVA's public-facing website for product and solution information, company content, trust information, developer resources, and contact enquiries. It is separate from the authenticated TAMVA Admin App.

## Technology stack

- Next.js 14 with the App Router
- React 18
- TypeScript
- Tailwind CSS
- ESLint with the Next.js configuration

## Architecture

```text
app/          App Router pages, layouts, metadata, sitemap and robots routes
components/   Shared interface components and page templates
lib/          Site configuration, types and editorial content
services/     Client-side API integration for products and contact enquiries
```

The site is presentation-focused. Backend services own business rules, identity operations and risk evaluation. Shared public copy is maintained in `lib/content.ts`; resource articles use structured content rendered by `app/resources/[slug]/page.tsx`.

## Local setup

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/Ikegraphix-ux/TAMVA-FRONTEND-WEB.git
cd TAMVA-FRONTEND-WEB
npm ci
```

Create a local environment file, then start the development server:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

On macOS or Linux, use `cp .env.example .env.local` in place of `Copy-Item`. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set local values in `.env.local`. The tracked `.env.example` lists the supported variables.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Public API base URL. Do not include credentials. |
| `NEXT_PUBLIC_SITE_URL` | Confirmed official HTTPS website domain, for the production environment only. |
| `NEXT_PUBLIC_INDEXING_ENABLED` | Set to `true` only for the official production deployment. |

Variables prefixed with `NEXT_PUBLIC_` are included in browser code. Never put secrets, credentials or private API keys in them or commit them to Git.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run lint` | Run the configured Next.js lint command. |
| `npm run build` | Create the production build. |
| `npm run start` | Serve a previously created production build locally. |

## Testing

There is no separate test script in `package.json` at present. The GitHub Actions CI workflow installs dependencies, runs `npm run lint`, and runs `npm run build`. Before opening a pull request, run both commands locally and review the changed routes.

## Accessibility

The interface includes semantic landmarks, skip-to-content navigation, keyboard-operable navigation and FAQ disclosures, visible focus states, accessible form validation messages, reduced-motion support, and minimum touch targets for primary controls. When changing interactive pages, review keyboard navigation and mobile layouts.

## SEO

Metadata, sitemap and robots routes are implemented with the Next.js App Router. Indexing is disabled by default. For the official production domain, configure all of the following in the Production environment:

- `VERCEL_ENV=production`
- `NEXT_PUBLIC_INDEXING_ENABLED=true`
- `NEXT_PUBLIC_SITE_URL` set to the confirmed official HTTPS domain

Previews and staging must remain non-indexable. Do not configure the temporary `.vercel.app` deployment as the canonical public identity. The official domain has not yet been confirmed; leave `NEXT_PUBLIC_SITE_URL` unset until it is.

## API integration

The API base URL comes from `NEXT_PUBLIC_API_URL`. The product service uses its local editorial catalog only when the API URL is unset or a product endpoint returns 404. Other API failures are surfaced instead of silently replacing content. The contact form requires the backend `/public/contact` endpoint and does not report success unless the backend accepts the request.

Before deployment, confirm the public endpoints against the current backend contract, and configure CORS for the deployed website origin. Do not document or advertise API capabilities that are not present in the backend contract.

## Deployment

The site is a Next.js application. GitHub is the source repository; the hosting provider and deployment settings are managed separately. Deployments should use the provider's production environment for the confirmed official domain, and preview/staging environments should keep indexing disabled.

Before production deployment:

1. Configure the backend URL and verify required public endpoints and CORS.
2. Set the official HTTPS domain and production indexing variables only after the domain is confirmed.
3. Run lint and build checks.
4. Review SEO output, content claims, contact form behavior, and accessibility on the deployed preview.

## Contribution workflow

See [CONTRIBUTING.md](CONTRIBUTING.md) for the change and review workflow. Before submitting a pull request, run lint and build, complete the pull request checklist, and update public copy only in line with [CONTENT_GOVERNANCE.md](CONTENT_GOVERNANCE.md) and [CONTENT_CLAIMS.md](CONTENT_CLAIMS.md).

## Ownership

No confirmed repository owners or `CODEOWNERS` file are currently recorded. Maintainers should add approved GitHub owners and a `.github/CODEOWNERS` file before requiring code-owner review. Do not infer company or security contacts from personal repository account details.

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
- `/resources` — general articles and insights (no articles are currently published)
- `/resources/[slug]` — resource article route
- `/developers` — developer documentation landing page
- `/careers` — careers information
- `/contact` — enquiry form

## Content governance

The repository avoids inventing customer numbers, certifications, partner names, office details or other unverified facts. See [CONTENT_GOVERNANCE.md](CONTENT_GOVERNANCE.md) for evidence requirements and [CONTENT_CLAIMS.md](CONTENT_CLAIMS.md) for the central record of approved public claims.
