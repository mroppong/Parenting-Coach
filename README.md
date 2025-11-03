# Parenting Coach – UI scaffolding

This folder contains a small single‑page app (SPA) shell that loads HTML partials for each screen. It’s designed so you can paste the HTML exported from Google Stitch directly into the corresponding files.

## Structure

- index.html – App shell and mounting point (#app)
- router.js – Hash‑based client router
- styles.css – Global theme and components (cards, buttons, chat bubble, drawer)
- screens/
  - splash.html
  - onboarding-create-account.html
  - onboarding-parent-profile.html
  - onboarding-child-count.html
  - onboarding-child-profiles-1.html
  - onboarding-child-profiles-2.html
  - main-chat-interface.html
  - app-menu-slideout.html

## How to use with Stitch exports

1. In Stitch, export each screen’s HTML.
2. Open the matching file in `public/screens/` and replace only the inner markup inside the `<!-- Paste Stitch markup here -->` comment, or the `.stitch-root` container.
3. Keep the outer `<section class="screen ...">` wrapper so the router and global styles continue to work.
4. Navigation
   - To link to another screen, add `data-nav="route"` to a button or link, e.g. `<button data-nav="onboarding/create-account">Continue</button>`.
   - Supported routes are shown in `public/router.js`.

## Running locally

Open `public/index.html` directly in a browser or serve the `public/` folder with any static server.

If you later wire Firestore, switch the Firebase scripts in `index.html` to the `*-compat` variants or update `app.js` to the v9 modular API.
