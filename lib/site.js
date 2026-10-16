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
  image: '/images/hartless/hero.webp',
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
    director: 'Mark Galasso',
    // One or two sentences that hook people on the story. Hidden while empty.
    logline: '',
    // Optional: '/images/hartless-poster.jpg' (put the file in /public/images)
    poster: '',
    // Wide banner and the stills gallery.
    banner: '/images/hartless/wide.webp',
    stills: [
      '/images/hartless/still-01.webp',
      '/images/hartless/still-03.webp',
      '/images/hartless/still-04.webp',
      '/images/hartless/still-05.webp',
      '/images/hartless/still-06.webp',
      '/images/hartless/still-07.webp',
      '/images/hartless/still-08.webp',
      '/images/hartless/still-09.webp',
    ],
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
  photo: '/images/marcus-glass.webp',
  photo2: '/images/marcus-glass-2.webp',
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

// ── From the set ─────────────────────────────────────────────
// Behind-the-scenes photos and short muted loops (Film page).
export const fromTheSet = {
  photos: [
    { src: '/images/set/slate.webp', alt: 'Hartless slate on set' },
    { src: '/images/set/cabin.webp', alt: 'Shooting a scene inside the cabin' },
    { src: '/images/set/night-crew.webp', alt: 'Cast and crew on a night shoot' },
    { src: '/images/set/monitor.webp', alt: 'Monitor on set' },
    { src: '/images/set/cast-crew.webp', alt: 'The Hartless cast and crew' },
  ],
  clips: [
    { src: '/video/set-monitor-1.mp4', poster: '/video/set-monitor-1.jpg' },
    { src: '/video/set-cabin.mp4', poster: '/video/set-cabin.jpg' },
    { src: '/video/set-monitor-2.mp4', poster: '/video/set-monitor-2.jpg' },
  ],
};

// Page banner photos.
export const banners = {
  bootcamp: '/images/set/green-room.webp',
  rentals: '/images/set/light-beam.webp',
  commercial: '/video/set-camera.jpg',
  commercialVideo: '/video/set-camera.mp4',
  music: '/images/marcus-glass.webp',
};

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
// `rate` is the day rate in dollars per item (null shows "Rate on request").
// Rates are set near typical NJ/NYC rental-house prices — adjust freely.
// `available` is how many you own; it caps the quantity picker.
export const gear = [
  {
    id: 'gvm-sd300b-pro',
    name: 'GVM SD300B Pro',
    category: 'Lighting',
    available: 15,
    rate: 40,
    specs: ['300W bi-color LED', 'Bowens mount', 'Reflector, power supply & carry case'],
    image: '/images/gear-gvm-sd300b-pro.webp',
  },
  {
    id: 'c-stand',
    name: 'C-Stand',
    category: 'Grip',
    rate: 10,
    specs: ['With grip head & arm', 'Sandbag included'],
    image: '',
  },
  {
    id: 'dana-dolly',
    name: 'Dana Dolly',
    unit: 'kit',
    category: 'Camera movement',
    rate: 75,
    specs: ['Dolly plate in hard case', 'Track pipes included', 'Stands not included'],
    image: '/images/gear-dana-dolly.webp',
  },
  {
    id: 'flags',
    name: 'Flags & Floppies',
    unit: 'each',
    category: 'Grip',
    rate: 5,
    specs: ['Shape and cut light', 'Assorted sizes'],
    image: '',
  },
  {
    id: 'clamps',
    name: 'Clamps',
    unit: 'each',
    category: 'Grip',
    rate: 3,
    specs: ['Super clamps, A-clamps & more', 'Mount anything, anywhere'],
    image: '',
  },
];

// Discounts. They stack one after the other: a student's first rental is
// 50% off, then 25% off that (62.5% off in total).
export const rentalDiscounts = {
  student: { label: 'Students', percent: 50, note: 'Bring a valid student ID at pickup.' },
  firstTime: { label: 'First rental', percent: 25, note: 'Your first rental with GL3.' },
};

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
