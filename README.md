# portalx-lite-test
PortalX LITE web app testing repository

# PortalX LITE — dev snapshot

Small Vite + Reown AppKit project for testing WalletConnect (Lobstr / Stellar).

## Quick start (for any dev)
1. Clone repo:
git clone https://github.com/legacygold/portalx-lite.git
cd portalx-lite

2. Create a local environment file:
- Copy `.env.local.example` to `.env.local` (or create `.env.local`) and set:
  ```
  VITE_PROJECT_ID=YOUR_REOWN_PROJECT_ID
  ```
3. Install & run:
npm install
npm run dev

4. Open browser: `http://localhost:5173` and open Developer Console (F12) to see errors.

## Reown / AppKit notes
- Reown projectId used for this project: `<paste-your-reown-project-id-here>`  
- We used `@reown/appkit` and `@reown/appkit-universal-connector` in a Vite environment.

## Current problem state
- First console error we see:
GET https://legacygold.github.io/src/main.js net::ERR_ABORTED 404 (Not Found)

## What to check first
- Confirm `appKit` config uses `networks` vs `caipNetworks` and that `chains` contain proper **network objects** (not strings) or the exact structure expected by AppKit v1.8.14.
- Confirm `metadata.url` matches local dev URL when testing (http://localhost:5173).

## Notes for contributor
- Please make a small PR that:
- Logs the `universalConnector` and `appKit` objects to console after init (so we can confirm shape).
- Validates the `networks` config shape.
- If helpful, add a tiny demo page that prints the generated WalletConnect URI (no signing).

## Contacts
- Owner: Debi / legacygold (GitHub)
- Context: empowering a Stellar SDEX demo flow for PortalX LITE.