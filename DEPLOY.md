# Deploying Week of Sports

This is a plain static site (HTML/CSS/JS + images) — no build step, nothing to compile.

## How it actually works today

**The site is hosted on GitHub Pages**, served straight from the `main` branch of
`github.com/athomas-2022/week-of-sports`. The `CNAME` file in this folder is what points
`weekofsports.com` at it — don't delete that file.

To publish a change:

```bash
git add -A && git commit -m "describe the change" && git push
```

That's it. GitHub rebuilds and the change is live in about 1–2 minutes. There is no deploy
dashboard to visit and no command to run afterwards.

To check it worked, open https://weekofsports.com in a private/incognito window (a normal
window may show you a copy cached up to 10 minutes old — see Caching below).

## Updating content

Edit `config.js` and drop new images into `assets/`, then commit and push as above. Almost
everything on the site — text, prices, dates, photos, gear options — is driven from
`config.js`, so you rarely need to touch anything else. Clean URLs like `/gear/` work
automatically.

## Caching — and one thing you can't change

GitHub Pages sends every file a fixed `Cache-Control: max-age=600`. That means a browser
may reuse a file for up to 10 minutes before checking for a new one. **This is not
configurable on GitHub Pages.** A `_headers` file (the Cloudflare way of setting this) does
nothing here — GitHub ignores it and serves it as a plain file.

In practice this just means: after you push, wait a couple of minutes, and check in a
private window if you want to be sure you're seeing the new version.

If the 10-minute window ever becomes a real problem, the fix is to move hosting to
Cloudflare Pages, which does let you set cache rules. That's a bigger change and isn't
needed today.

## Notes

- The hero background video streams from YouTube — nothing extra to host.
- `sw.js` (the service worker) is network-first on purpose: it always tries the network and
  only falls back to a cached copy when the device is offline, so people don't get stale
  content.
- `.claude/launch.json` is only for the local preview; harmless to leave or delete.
- The `Orders Dashboard/`, `Order Intake (Apps Script)/` and `Raffle/` folders are listed in
  `.gitignore` on purpose — they hold buyer and entrant data and must never be published.
