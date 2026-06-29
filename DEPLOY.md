# Deploying Week of Sports to Cloudflare Pages

This is a plain static site (HTML/CSS/JS + images) — no build step. Pick one way to publish, then connect weekofsports.com.

## Option A — Dashboard drag & drop (easiest, no tools)
1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project, e.g. `week-of-sports`.
3. Drag this whole project folder (the one containing `index.html`, `config.js`, `assets/`, `gear/`, etc.) into the upload box, then **Deploy**.
4. You get a live URL like `week-of-sports.pages.dev` — open it to check.

## Option B — Wrangler CLI (repeatable, run from this folder)
```
npx wrangler login            # opens your browser to authorize YOUR Cloudflare account
npx wrangler pages deploy . --project-name week-of-sports
```
Re-run the deploy command whenever you change content.

## Connect weekofsports.com
Your domain is already on Cloudflare, so this is quick:
1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `weekofsports.com` (repeat for `www.weekofsports.com`).
2. Cloudflare auto-creates the DNS records — this replaces the current "parked" state (error 1001) with the live site.
3. Wait a few minutes for the SSL certificate to issue.

## Updating the site later
Edit `config.js` (and drop new images into `assets/`), then re-deploy (drag-drop again, or re-run the wrangler command). Clean URLs like `/gear/` work automatically on Pages.

## Notes
- The hero background video streams from YouTube — nothing extra to host.
- `.claude/launch.json` is only for the local preview; harmless to leave or delete.
