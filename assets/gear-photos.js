/* Week of Sports — gear photos from a Google Sheet.
   Lets gear photos be swapped from a phone, with no code and no redeploy:
   photos live in a shared Google Drive folder, and a Google Sheet in that folder lists
   which photo goes with which item:

       Item        | Color | Photo link
       T-Shirt     | Blue  | https://drive.google.com/file/d/…/view?usp=sharing
       Hoodie      | Grey  | (blank = keep the photo already set in config.js)
       Beanie      |       | https://drive.google.com/file/d/…/view

   config.js → gearOrder.photoSheet holds the Sheet's link. Every row with a link wins
   over the photo paths in config.js for that item; items with no links keep config's.
   If the Sheet can't be reached, the site quietly keeps config's photos.

   A Drive share link is turned into a web-sized image served by Google — Google does
   the resizing, and converts iPhone HEIC photos, so full-size phone shots are fine. */
(function () {
  var TIMEOUT_MS = 2500;
  var WIDTH = 800;   /* px Google resizes to; tiles are at most ~300px wide, so this is sharp on retina */

  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/gray/g, 'grey').replace(/[^a-z0-9]/g, '');
  }

  /* the Sheet's normal link (what you copy from the address bar) -> its CSV feed */
  function csvUrl(u) {
    u = String(u || '').trim();
    if (!u) return '';
    if (/output=csv|tqx=out:csv/.test(u)) return u;
    var m = /\/spreadsheets\/d\/([a-zA-Z0-9_-]{20,})/.exec(u);
    return m ? 'https://docs.google.com/spreadsheets/d/' + m[1] + '/gviz/tq?tqx=out:csv&headers=1' : '';
  }

  function driveId(u) {
    if (!/(drive|docs)\.google\.com|googleusercontent\.com/.test(u)) return '';
    var m = /\/d\/([a-zA-Z0-9_-]{20,})/.exec(u) || /[?&]id=([a-zA-Z0-9_-]{20,})/.exec(u);
    return m ? m[1] : '';
  }

  /* one cell -> {src, alt}: src to try first, alt as a second route if src fails */
  function photoSrc(u) {
    u = String(u || '').trim();
    if (!u) return null;
    var id = driveId(u);
    if (id) {
      return {
        src: 'https://lh3.googleusercontent.com/d/' + id + '=w' + WIDTH,
        alt: 'https://drive.google.com/thumbnail?id=' + id + '&sz=w' + WIDTH
      };
    }
    if (/^https?:\/\//.test(u) || u.charAt(0) === '/') return { src: u, alt: '' };
    return null;   /* not a link (e.g. a note typed in the cell) */
  }

  function parseLine(line) {
    var out = [], cur = '', q = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line[i];
      if (q) {
        if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += ch;
      } else if (ch === '"') q = true;
      else if (ch === ',') { out.push(cur); cur = ''; }
      else cur += ch;
    }
    out.push(cur);
    return out;
  }

  function parse(text) {
    var lines = String(text || '').replace(/\r/g, '').split('\n').filter(function (l) { return l.trim(); });
    if (lines.length < 2) return [];
    var head = parseLine(lines[0]).map(function (h) { return h.toLowerCase(); });
    var ii = -1, ci = -1, pi = -1;
    head.forEach(function (h, i) {
      if (ii < 0 && /item|product|gear/.test(h)) ii = i;
      if (ci < 0 && /colou?r/.test(h)) ci = i;
      if (pi < 0 && /photo|link|image|picture|url/.test(h)) pi = i;
    });
    if (ii < 0) ii = 0; if (ci < 0) ci = 1; if (pi < 0) pi = 2;
    var rows = [];
    for (var r = 1; r < lines.length; r++) {
      var c = parseLine(lines[r]), ph = photoSrc(c[pi]);
      if (ph && (c[ii] || '').trim()) rows.push({ item: c[ii].trim(), color: (c[ci] || '').trim(), photo: ph });
    }
    return rows;
  }

  /* fetch the Sheet once; done(rows) — rows is null if there's no Sheet or it can't be read */
  var cache = null, waiting = [];
  function load(C, done) {
    if (cache) { done(cache.rows); return; }
    waiting.push(done);
    if (waiting.length > 1) return;
    var url = csvUrl(C && C.gearOrder && C.gearOrder.photoSheet);
    function finish(rows) {
      if (cache) return;
      cache = { rows: rows };
      var w = waiting; waiting = [];
      w.forEach(function (f) { try { f(rows); } catch (e) {} });
    }
    if (!url || !window.fetch) { finish(null); return; }
    setTimeout(function () { finish(null); }, TIMEOUT_MS);
    fetch(url + '&_=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (t) {
        /* a private Sheet answers with Google's sign-in page, not CSV */
        finish(/^\s*</.test(t) ? null : parse(t));
      })
      .catch(function () { finish(null); });
  }

  /* the Sheet's photos for one product, in its color order: [{src, alt, color}] */
  function photosFor(p, colors, rows) {
    if (!rows || !rows.length) return [];
    var keys = [norm(p.name), norm(p.key)];
    var mine = rows.filter(function (r) { return keys.indexOf(norm(r.item)) > -1; });
    if (!mine.length) return [];
    var order = (colors || []).map(function (c) { return norm(c.name); });
    var out = [];
    order.forEach(function (cn, i) {
      mine.forEach(function (r) {
        if (norm(r.color) === cn) out.push({ src: r.photo.src, alt: r.photo.alt, color: colors[i].name });
      });
    });
    mine.forEach(function (r) {   /* rows with no color, or a color the item doesn't list */
      if (order.indexOf(norm(r.color)) < 0) out.push({ src: r.photo.src, alt: r.photo.alt, color: '' });
    });
    return out;
  }

  window.WOSGearPhotos = { load: load, photosFor: photosFor, photoSrc: photoSrc, csvUrl: csvUrl };
})();
