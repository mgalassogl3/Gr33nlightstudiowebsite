// ─────────────────────────────────────────────────────────────
// Gr33nlight Studios — site content
//
// Almost everything you'll want to change lives in this file:
// contact info, socials, songs, film projects, gear, clients,
// and bootcamp details. Edit a value, save, and redeploy.
// Anything left as '' (empty) is simply hidden on the site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Gr33nlight Studios',
  shortName: 'GL3',
  url: 'https://www.gr33nlight.com',
  tagline: 'Film. Music. Content. Made in New Jersey.',
  description:
    'Gr33nlight Studios (GL3) is an independent film, music and content studio in East Hanover, NJ — feature films, original music, a creator boot camp, grip & lighting rentals and commercial video.',
  location: 'East Hanover, NJ',

  // Phone used for "Call" and "Text" buttons. Digits only for `phone`.
  phone: '9732242190',
  phoneDisplay: '973 224 2190',

  // Leave '' to hide every "email" button. Put the inbox you want sign-ups
  // and rental requests sent to, e.g. 'hello@gr33nlight.com'.
  email: '',

  socials: {
    instagram: '', // e.g. 'https://www.instagram.com/yourhandle'
    tiktok: '', // e.g. 'https://www.tiktok.com/@yourhandle'
    youtube: '',
    spotify: 'https://open.spotify.com/artist/6brRAApkUOKTM7Fg10SHEe', // Marcus Glass
  },
};

// ── Home ─────────────────────────────────────────────────────
// The full-screen opening shot on the home page. Drop a still in
// /public/images and/or a short muted loop (mp4) in /public/video.
export const homeHero = {
  image: '', // e.g. '/images/hartless-still.jpg'
  video: '', // e.g. '/video/reel.mp4'
};

// ── Film ─────────────────────────────────────────────────────
export const films = [
  {
    slug: 'hartless',
    title: 'Hartless',
    status: 'In production',
    release: '2027',
    genre: 'Feature film',
    logline:
      'Logline coming soon. Replace this with one or two sentences that hook people on the story.',
    // Optional: '/images/hartless-poster.jpg' (put the file in /public/images)
    poster: '',
    // Optional: a YouTube or Vimeo link to a teaser/trailer.
    trailer: '',
    // Optional: Instagram page for the film.
    instagram: '',
  },
];

// ── Music ────────────────────────────────────────────────────
export const music = {
  artist: 'Marcus Glass',
  bio: 'Original music written, produced and recorded at Gr33nlight Studios.',
  // Paste Spotify links (track, album, playlist or artist) — copy from
  // Spotify via Share → Copy link. The newest one goes first.
  spotify: [
    'https://open.spotify.com/artist/6brRAApkUOKTM7Fg10SHEe',
    // Add singles/albums below, e.g.
    // 'https://open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX',
  ],
  instagram: '',
  tiktok: '',
};

// Artists from the GL3 Hub. Add an entry per artist to feature them.
export const featuredArtists = [
  // {
  //   name: 'Artist Name',
  //   genre: 'R&B',
  //   photo: '/images/artists/artist-name.jpg',
  //   spotify: 'https://open.spotify.com/artist/XXXXXXXX',
  //   instagram: 'https://www.instagram.com/handle',
  //   tiktok: 'https://www.tiktok.com/@handle',
  // },
];

// ── Boot camp ────────────────────────────────────────────────
export const bootcamp = {
  name: 'GL3 Content Boot Camp',
  subtitle: 'Month-long creator course',
  startDate: '2026-11-02', // YYYY-MM-DD
  startLabel: 'Nov 2',
  schedule: 'Mondays & Wednesdays',
  time: '6:00 PM – 7:30 PM',
  duration: 'All month long',
  location: 'GL3 Studios, East Hanover, NJ',
  price: 297,
  priceLabel: 'Early bird',
  // Optional: a payment link (Venmo, Cash App, PayPal.me, Square or Stripe
  // Payment Link). When set, a "Pay $297" button appears after sign-up.
  paymentLink: '',
  paymentNote: 'Your spot is confirmed once your deposit is received.',
  tracks: [
    {
      id: 'podcasting',
      name: 'Podcasting / Live Streaming',
      color: 'violet',
      icon: 'mic',
      points: ['Set up & gear', 'Record & stream live', 'Host & interview', 'Edit & publish', 'Grow your audience'],
    },
    {
      id: 'makeup',
      name: 'Make Up / Fashion Tutorials',
      color: 'pink',
      icon: 'lipstick',
      points: ['Lighting & setup', 'On-camera presence', 'Product demos', 'Style & brand content', 'Edit short-form videos'],
    },
    {
      id: 'vertical',
      name: 'Vertical Storytelling',
      color: 'green',
      icon: 'phone',
      points: ['Hook & script', 'Shoot for Reels/TikTok', 'Edit short-form', 'Turn ideas into series', 'Trend strategy'],
    },
    {
      id: 'sports',
      name: 'Sports Editing',
      color: 'orange',
      icon: 'ball',
      points: ['Game highlights', 'Transitions & effects', 'Slow motion & graphics', 'Create shareable clips', 'Editing workflow'],
    },
    {
      id: 'marketing',
      name: 'Marketing Content',
      color: 'blue',
      icon: 'chart',
      points: ['Content strategy', 'Grow your audience', 'Platform best practices', 'Analytics & monetization', 'Turn content into opportunity'],
    },
  ],
  perks: [
    { title: 'Hands-on training', text: 'Learn by doing with real gear.' },
    { title: 'Small group sessions', text: 'Get personal guidance.' },
    { title: 'Real projects', text: 'Create content during the course.' },
    { title: 'Grow your following', text: 'Turn skills into real opportunities.' },
  ],
  faq: [
    {
      q: 'Do I need my own camera or gear?',
      a: 'No. You’ll train on studio gear. Bring your phone — a lot of what we teach is built for shooting on it.',
    },
    {
      q: 'Do I need any experience?',
      a: 'None. Small groups mean we meet you where you are, whether you’re starting out or already posting.',
    },
    {
      q: 'Can I switch tracks?',
      a: 'Pick the focus you’re most excited about when you sign up. Tell us in your message if you want to mix two.',
    },
    {
      q: 'How do I reserve my spot?',
      a: 'Send the sign-up form by text or email. We’ll reply to confirm and send payment details. Spots are limited.',
    },
  ],
};

// ── Rentals ──────────────────────────────────────────────────
// `rate` is the day rate in dollars. Set to null to show "Ask".
export const gear = [
  {
    id: 'gvm-300b',
    name: 'GVM 300B LED Light',
    category: 'Lighting',
    rate: null,
    specs: ['300W bi-color LED', 'Bowens mount', 'App control'],
    image: '',
  },
  {
    id: 'c-stand',
    name: 'C-Stand',
    category: 'Grip',
    rate: null,
    specs: ['With grip head & arm', 'Sandbag included'],
    image: '',
  },
  {
    id: 'dana-dolly',
    name: 'Dana Dolly',
    category: 'Camera movement',
    rate: null,
    specs: ['Portable dolly system', 'Smooth tracking moves'],
    image: '',
  },
  {
    id: 'flags',
    name: 'Flags & Floppies',
    category: 'Grip',
    rate: null,
    specs: ['Shape and cut light', 'Assorted sizes'],
    image: '',
  },
  {
    id: 'clamps',
    name: 'Clamps',
    category: 'Grip',
    rate: null,
    specs: ['Super clamps, A-clamps & more', 'Mount anything, anywhere'],
    image: '',
  },
];

export const rentalTerms = [
  'Pickup in East Hanover, NJ. Ask about delivery.',
  'ID and a deposit are required for every rental.',
  'Multi-day and full-package discounts available.',
];

// ── Commercial ───────────────────────────────────────────────
export const commercial = {
  services: [
    { title: 'Brand & promo videos', text: 'Short films that tell your story and sell what you do.' },
    { title: 'Social content', text: 'Vertical video built for Reels, TikTok and Shorts.' },
    { title: 'Events', text: 'Recaps, highlights and live coverage.' },
    { title: 'Music videos', text: 'Concept to final cut for artists.' },
  ],
  // Brands and people you've worked with. `logo` is optional
  // ('/images/clients/name.png'); without it the name is shown.
  clients: [
    // { name: 'Client Name', logo: '', url: '' },
  ],
  // Featured work. `video` is a YouTube or Vimeo link.
  projects: [
    // { title: 'Project title', client: 'Client Name', type: 'Brand video', video: 'https://youtu.be/XXXX' },
  ],
  // Only add real quotes from real clients.
  testimonials: [
    // { quote: '…', name: 'Name', role: 'Owner, Business' },
  ],
};
