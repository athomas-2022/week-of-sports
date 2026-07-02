/* =======================================================================
   WEEK OF SPORTS — SITE CONFIG
   -----------------------------------------------------------------------
   This is the ONLY file you edit for normal updates.
   • Change dates, totals, prices, text, colors → edit below.
   • Swap the logo / shirt / crest → drop your new image into /assets with
     the same file name (or change the path). Transparent PNGs look best.
   • Feature your fundraising video in the "Watch our story" popup →
     upload it to YouTube/Vimeo and paste the link into heroVideoUrl.
   • The looping hero background uses assets/hero.mp4 (already optimized).
   ======================================================================= */
window.WOS = {

  /* ---------- the event ---------- */
  year:      "2026",
  gameDay:   "",                          /* set e.g. "2026-12-12T14:00:00" when confirmed (blank = "coming soon") */
  location:  "Liberty-Benton High School",
  mapsQuery: "Liberty-Benton High School, Findlay, OH",
  contactEmail: "info@weekofsports.com",
  instagramUrl: "https://www.instagram.com/weekofsports",
  facebookUrl:  "https://www.facebook.com/week.of.sports/",

  /* ---------- analytics ----------
     Paste your Cloudflare Web Analytics token here to turn on analytics
     site-wide (Cloudflare dashboard → Analytics & Logs → Web Analytics →
     Add a site → copy the token). Leave blank to keep it off. */
  cfBeaconToken: "93fc09c9d47348b2adbec53439e8ab56",

  /* ---------- giving ---------- */
  venmoHandle:     "AndrewThomas24",      /* real — venmo.com/u/AndrewThomas24 */
  fundraisingGoal: 0,                     /* set the $ goal when known (0 = challenge "coming soon") */
  raisedTotal:     0,                     /* update during the campaign */
  donationFormUrl: "https://docs.google.com/document/d/1i5dRrSKtfrdR7aWloMK7MWNfTNFrIzXb/edit?usp=sharing",  /* real donation form */
  scholarshipUrl:  "https://www.community-foundation.com/scholarships/andrew-walker-memorial-scholarship",   /* real scholarship page */
  giveWays: [
    { title: "Donate directly", text: "Give straight to the scholarship fund by Venmo or our donation form." },
    { title: "Come to game day", text: "Raffles, concessions, and the kickoff event all add in." },
    { title: "Buy the gear",     text: "Every shirt and hoodie sold turns profit into scholarship dollars." },
    { title: "Spirit week",      text: "Drop spare change in your class jar during the donation challenge." }
  ],

  /* ---------- donation challenge (bump amounts during the week) ---------- */
  divisions: [
    { name: "High school",   tagline: "Go Eagles",       amount: 2450, color: "royal" },
    { name: "Middle school", tagline: "Rising up",        amount: 1820, color: "blue"  },
    { name: "Elementary",    tagline: "Tiny but mighty",  amount: 1310, color: "sky"   }
  ],

  /* ---------- LIVE leaderboard (optional — turns the challenge into a live scoreboard) ----------
     Update the class-vs-class totals from your PHONE and the website refreshes itself.
     One-time setup:
       1. In your Google Sheet, add a tab with two columns and a header row:
              Division      | Amount
              High school   | 2450
              Middle school | 1820
              Elementary    | 1310
       2. File -> Share -> Publish to web -> choose that tab -> format "Comma-separated values (.csv)" -> Publish.
       3. Copy the link it gives you and paste it below as csvUrl (in quotes).
     Then during the week just edit the Amount cells (the Google Sheets phone app works great) —
     the leaderboard updates every ~45 seconds on its own, with a live "updated just now" stamp.
     Leave csvUrl blank ("") to keep the static amounts above / the "coming soon" state. */
  leaderboard: {
    csvUrl:         "",   /* paste your "Publish to web -> CSV" link here to go live */
    goal:           0,    /* optional $ goal; 0 = no goal bar, just the race + running total */
    refreshSeconds: 45    /* how often the page checks the sheet for new totals */
  },

  /* ---------- game-day schedule (fill in when the lineup is set; empty = "coming soon") ---------- */
  gameDayEvents: [],

  /* ---------- spirit week (add this year's dates + themes when set; empty = "coming soon") ---------- */
  spiritWeek: [],

  /* ---------- the cause ---------- */
  cause: {
    title: "In honor of Andrew Walker",
    body:  "Week of Sports celebrates the legacy of Andrew Walker — a passionate sports enthusiast whose love for the game touched everyone who knew him. His energy and dedication lifted up teammates, coaches, and fans alike. The week supports the Andrew Walker Memorial Scholarship, carrying his spirit forward for the students who come next.",
    values: ["Be kind", "Be connected", "Be brave"]
  },

  /* ---------- about the fundraiser (homepage "About" section) ---------- */
  aboutEvent: {
    title: "What is Week of Sports?",
    body: "Week of Sports is a week-long, all-school celebration that turns a love of the game into real scholarship dollars. Spirit days, a class-vs-class donation challenge, gear sales, raffles, and a packed game-day finale all come together to fund the Andrew Walker Memorial Scholarship — carrying Andrew's legacy forward for the students who come next.",
    highlights: [
      { k: "1 week",     v: "spirit week dress-up themes" },
      { k: "Donation Challenge", v: "Elementary v Middle v High School" },
      { k: "1 cause",    v: "the Andrew Walker Memorial Scholarship" }
    ]
  },

  /* ---------- gallery (gear page "see it worn" strip) ---------- */
  galleryCount: 36,                        /* photos in /assets/gallery as 01.jpg … */

  /* ---------- previous years (homepage "Previous years" section) ---------- */
  pastCount: 28,                           /* photos in /assets/past as 01.jpg, 02.jpg … (add/replace yours here) */
  /* which past photos fill the static "More moments" grid (1-based file #s).
     order: [feature, 4 squares, 2 wide]. empty = auto spread. */
  momentsPics: [2, 7, 9, 28, 6, 21, 22],

  /* ---------- sponsors (add { name, logo, url }; empty shows placeholders) ---------- */
  sponsors: [],

  /* ---------- raffle baskets (add this year's baskets when announced; empty = "coming soon") ---------- */
  raffleBaskets: [],
  raffleNote: "",

  /* ---------- volunteer ---------- */
  volunteerUrl:  "https://docs.google.com/spreadsheets/d/1GHON5g2QmFFZ7DXIFw4bid8InBzlzmE4Jw2GdTTLgUg/edit?usp=sharing",  /* real volunteer sign-up sheet */
  volunteerText: "Volunteers are crucial to the success of the event — from running raffle tables to working the doors. Everyone gets a role that matters, and hours count toward NHS and other service requirements.",

  /* ---------- assets (swap these each year — paths are site-root absolute) ---------- */
  logo:          "/assets/logo-lb.png",   /* LB word-cloud badge (Andrew Walker / Week of Sports) */
  crest:         "/assets/crest.png",
  shirt:         "/assets/shirt.png",
  heroYouTubeId: "-3iifoMWy7U",            /* fundraising video — plays muted as the looping hero background */
  heroVideo:     "/assets/hero.mp4",       /* fallback loop used if heroYouTubeId is blank */
  heroPoster:    "/assets/hero-poster.jpg",/* shows instantly while the video loads */
  heroVideoUrl:  "https://youtu.be/-3iifoMWy7U",  /* "Watch our story" popup — plays with sound */

  /* ---------- gear ---------- */
  gearReady:   true,                       /* set true when this year's gear + order form are ready (false = "coming soon") */
  shirtPrice:  15,
  hoodiePrice: 30,
  gearFormUrl: "https://forms.gle/oFYzKQ3KhHJikV2Y6",

  /* ---------- gear order page (/gear) — submits straight into your Google Sheet ----------
     orderEndpoint = the Apps Script web-app URL bound to the "Week of Sports 2026 Orders"
     sheet (athomas@liberty-benton.org). Orders append as rows there. */
  gearOrder: {
    orderEndpoint: "https://script.google.com/macros/s/AKfycbwv2GFGDBbg1N4RU9CzNQyGK6316Qz7tlMjatnxHj9ctymETVc5gXAgrw12OuT9SuK-kQ/exec",
    formAction: "https://docs.google.com/forms/d/e/1FAIpQLSczCeztwhRGkF1yNF-_s5qwtswnmxbeR5XegwyNtJyx8PqkNg/formResponse",  /* legacy Google Form — no longer used */
    deadline: "November 1",                 /* PLACEHOLDER — order-by date */
    maxPerType: 0,                          /* max shirts (and, separately, max hoodies) per order; 0 = no limit */
    shirtPhoto:  "/assets/product-shirt.jpg",
    hoodiePhoto: "/assets/product-hoodie.jpg",
    colors: [
      { name: "Blue", hex: "#2f74d0" },
      { name: "Red",  hex: "#c8202f" },
      { name: "Grey", hex: "#9aa3ad" }
    ],
    shirtSizes:  ["Youth XS","Youth S","Youth M","Youth L","Youth XL","S","M","L","XL","2XL (+$1.00)","3XL (+$2.00)","4XL (+$4.00)","5XL (+$6.00)"],
    hoodieSizes: ["Youth XS","Youth S","Youth M","Youth L","Youth XL","S","M","L","XL","2XL (+$1.00)","3XL (+$2.00)","4XL (+$3.00)"],
    delivery: [
      "I will have my order dropped off in my homeroom (Elementary and Middle School)",
      "I will have my order dropped off at the high school",
      "I will schedule with info@weekofsports.com to pickup"
    ],
    payment: [
      "Venmo (AndrewThomas24) (Put name in description)",
      "Give Payment (cash or check- made out to Andrew Thomas LLC) to LBHS Office (In envelope)",
      "Give Payment (cash or check- made out to Andrew Thomas LLC) to MS/ES Office (In envelope)",
      "Email info@weekofsports.com to determine payment"
    ],
    entries: {
      name: "1406133203", phone: "669342656", studentHomeroom: "650042010",
      buyShirt: "1393243617", buyHoodie: "1972290609",
      delivery: "1966866005", payment: "1674885797",
      shirtSlots: [
        { color: "865607942",  size: "1961284553", another: "393640042"  },
        { color: "1557277692", size: "1502277901", another: "2071387215" },
        { color: "1710728888", size: "654703230",  another: "1029479014" },
        { color: "257956055",  size: "1308959253", another: "483937629"  }
      ],
      hoodieSlots: [
        { color: "1201931753", size: "1991681689", another: "75943834"  },
        { color: "490187393",  size: "838746899",  another: "444514728" },
        { color: "847296809",  size: "2047190767", another: "718354254" },
        { color: "298559359",  size: "1043985234", another: "715654819" }
      ]
    }
  },

  /* ---------- scrolling ticker ---------- */
  ticker: [
    "Week of Sports 2026",
    "Andrew Walker Memorial Scholarship",
    "Dates coming soon",
    "Gear dropping soon",
    "Donate to the scholarship",
    "Follow @weekofsports"
  ],

  /* ---------- brand colors (blue & white) ---------- */
  colors: {
    navy:  "#0a2342",
    navy2: "#0e2f54",
    royal: "#2f74d0",
    blue:  "#1f5fc4",
    sky:   "#7fb1f0"
  }
};
