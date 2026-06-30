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
  gameDay:   "2026-12-12T14:00:00",       /* PLACEHOLDER — game-day date & time */
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
  fundraisingGoal: 10000,                 /* PLACEHOLDER — $ goal */
  raisedTotal:     5580,                  /* PLACEHOLDER — $ raised so far */
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

  /* ---------- game-day schedule ---------- */
  gameDayEvents: [
    { time: "2:00", title: "Student vs Staff", sub: "The grudge match" },
    { time: "5:00", title: "JV boys",          sub: "Eagles basketball" },
    { time: "7:00", title: "Varsity boys",     sub: "Main event under the lights" }
  ],

  /* ---------- spirit week (themes auto-highlight on their day) ---------- */
  spiritWeek: [
    { date: "2026-12-07", day: "Monday",    theme: "Gear day" },
    { date: "2026-12-08", day: "Tuesday",   theme: "Jersey day" },
    { date: "2026-12-09", day: "Wednesday", theme: "Hat day" },
    { date: "2026-12-10", day: "Thursday",  theme: "Pajama day" },
    { date: "2026-12-11", day: "Friday",    theme: "LB spirit day" }
  ],

  /* ---------- the cause ---------- */
  cause: {
    title: "In honor of Andrew Walker",
    body:  "Week of Sports celebrates the legacy of Andrew Walker — a passionate sports enthusiast whose love for the game touched everyone who knew him. His energy and dedication lifted up teammates, coaches, and fans alike. Every dollar raised this week funds the Andrew Walker Memorial Scholarship, carrying his spirit forward for the students who come next.",
    values: ["Be kind", "Be connected", "Be brave"]
  },

  /* ---------- about the fundraiser (homepage "About" section) ---------- */
  aboutEvent: {
    title: "What is Week of Sports?",
    body: "Week of Sports is a week-long, all-school celebration that turns a love of the game into real scholarship dollars. Spirit days, a class-vs-class donation challenge, gear sales, raffles, and a packed game-day finale all come together to fund the Andrew Walker Memorial Scholarship — carrying Andrew's legacy forward for the students who come next.",
    highlights: [
      { k: "1 week",     v: "of spirit days, games & giving" },
      { k: "3 divisions", v: "elementary, middle & high compete" },
      { k: "100%",       v: "of profit to the scholarship" }
    ]
  },

  /* ---------- gallery (gear page "see it worn" strip) ---------- */
  galleryCount: 36,                        /* photos in /assets/gallery as 01.jpg … */

  /* ---------- previous years (homepage "Previous years" section) ---------- */
  pastCount: 16,                           /* photos in /assets/past as 01.jpg, 02.jpg … (add/replace yours here) */

  /* ---------- sponsors (add { name, logo, url }; empty shows placeholders) ---------- */
  sponsors: [],

  /* ---------- raffle baskets (the /raffle-baskets page) ---------- */
  raffleBaskets: [
    { name: "Eagles fan pack",   items: "Hoodie, blanket, tumbler & team swag", value: "$120" },
    { name: "Family game night", items: "Board games, snacks & a gift card",    value: "$90"  },
    { name: "Date night out",    items: "Dinner gift card & movie passes",       value: "$100" },
    { name: "Coffee lover",      items: "Local beans, mug & café gift card",     value: "$60"  },
    { name: "Sports fanatic",    items: "Tickets, gear & an autographed ball",   value: "$150" },
    { name: "Self-care basket",  items: "Candles, lotions & a spa voucher",      value: "$80"  }
  ],
  raffleNote: "Tickets are $5 each or 5 for $20 — buy at the game-day tables or by Venmo. Winners are drawn live during the varsity game; you don't need to be present to win.",

  /* ---------- volunteer ---------- */
  volunteerUrl:  "https://docs.google.com/spreadsheets/d/1GHON5g2QmFFZ7DXIFw4bid8InBzlzmE4Jw2GdTTLgUg/edit?usp=sharing",  /* real volunteer sign-up sheet */
  volunteerText: "Volunteers are crucial to the success of the event — from running raffle tables to working the doors. Everyone gets a role that matters, and hours count toward NHS and other service requirements.",

  /* ---------- assets (swap these each year — paths are site-root absolute) ---------- */
  logo:          "/assets/logo.png",
  crest:         "/assets/crest.png",
  shirt:         "/assets/shirt.png",
  heroYouTubeId: "-3iifoMWy7U",            /* fundraising video — plays muted as the looping hero background */
  heroVideo:     "/assets/hero.mp4",       /* fallback loop used if heroYouTubeId is blank */
  heroPoster:    "/assets/hero-poster.jpg",/* shows instantly while the video loads */
  heroVideoUrl:  "https://youtu.be/-3iifoMWy7U",  /* "Watch our story" popup — plays with sound */

  /* ---------- gear ---------- */
  shirtPrice:  15,
  hoodiePrice: 30,
  gearFormUrl: "https://forms.gle/oFYzKQ3KhHJikV2Y6",

  /* ---------- gear order page (/gear) — submits into the existing Google Form ---------- */
  gearOrder: {
    formAction: "https://docs.google.com/forms/d/e/1FAIpQLSczCeztwhRGkF1yNF-_s5qwtswnmxbeR5XegwyNtJyx8PqkNg/formResponse",
    deadline: "November 1",                 /* PLACEHOLDER — order-by date */
    maxPerType: 4,
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
    "Dec 8–12 · Spirit week",
    "Saturday Dec 12 · Game day",
    "2:00 · Student vs Staff",
    "5:00 · JV boys",
    "7:00 · Varsity boys",
    "Buy your 2026 gear",
    "Donate to your class"
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
