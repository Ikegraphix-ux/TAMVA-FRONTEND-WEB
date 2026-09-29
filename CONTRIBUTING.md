# Contributing

## Before you start

Check the issue or pull request discussion for the intended scope. For substantial changes, describe the approach before implementation so maintainers can align on the work.

## Local development

1. Install Node.js 20 or newer.
2. Run `npm ci`.
3. Copy `.env.example` to `.env.local` and configure only the public values required for your work.
4. Run `npm run dev`.

## Before opening a pull request

Run:

```bash
npm run lint
npm run build
```

Keep changes focused. Include a clear summary, user-visible impact, and screenshots for visual changes. Do not include secrets, unconfirmed company details, invented integrations, or unverified security and compliance claims.

## Review

A maintainer should review and approve changes before merging. The repository does not yet identify formal code owners.
