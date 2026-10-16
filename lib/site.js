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
// `productShot: true` shows the whole photo on white instead of cropping it.
export const gear = [
  {
    id: 'gvm-sd300b-pro',
    name: 'GVM SD300B Pro',
    category: 'Lighting',
    available: 15,
    rate: 40,
    specs: ['300W bi-color LED', 'Bowens mount', 'Reflector, power supply & carry case'],
    image: '/images/gear-gvm-sd300b-pro.webp',
    productShot: true,
  },
  {
    id: 'lumix-gx8',
    name: 'Panasonic Lumix GX8 Kit',
    unit: 'kit',
    category: 'Camera',
    rate: 40,
    specs: ['Micro Four Thirds · 4K video · 20MP stills', 'Lumix 14mm prime (wide)', 'Sigma 30mm prime (close-ups)'],
    image: '/images/gear-lumix-gx8.webp',
    productShot: true,
  },
  {
    id: 'c-stand',
    name: 'C-Stand',
    category: 'Grip',
    available: 2,
    rate: 10,
    specs: ['Turtle base', 'Grip arm & head included'],
    image: '/images/gear-c-stand.webp',
    productShot: true,
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
    name: 'Neewer Flag Kit',
    unit: 'kit',
    category: 'Grip',
    rate: 15,
    specs: ['5 flags: solid, nets & silks', 'Grip-ready pins', 'Carry bag included'],
    image: '/images/gear-flag-kit.webp',
    productShot: true,
  },
  {
    id: 'a-clamps',
    name: 'A-Clamps (6-pack)',
    unit: 'pack',
    category: 'Grip',
    rate: 10,
    specs: ['6 spring A-clamps', 'Rubber-tipped jaws'],
    image: '/images/gear-a-clamps.webp',
    productShot: true,
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
    { title: 'Events & education', text: 'Live coverage, classes and workshops — recaps, highlights and teaching clips.' },
    { title: 'Music videos', text: 'Concept to final cut for artists.' },
  ],
  // Brands and people you've worked with. `logo` is optional
  // ('/images/clients/name.png'); without it the name is shown.
  clients: [
    { name: 'RICI', logo: '', url: '' },
    { name: 'The Learning Experience', logo: '', url: '' },
    { name: 'Vito Mazza Salon & Spa', logo: '', url: '' },
  ],
  // Featured work. Use `video` for a YouTube/Vimeo link, or `file` (+ `poster`)
  // for an mp4 in /public/video. Set `vertical: true` for 9:16 social cuts —
  // those show in a row of their own under "Social".
  projects: [
    // { title: 'Project title', client: 'Client Name', type: 'Brand video', video: 'https://youtu.be/XXXX' },
    // { title: 'Trend', client: 'Client Name', type: 'Social', file: '/video/clip.mp4', poster: '/video/clip.jpg', vertical: true },
    {
      title: 'Always Beautiful Curls',
      client: 'RICI',
      type: 'Brand film',
      file: '/video/work/rici-brand.mp4',
      poster: '/video/work/rici-brand.jpg',
    },
    {
      title: '10 Years',
      client: 'The Learning Experience',
      type: 'Anniversary film',
      file: '/video/work/tle-anniversary.mp4',
      poster: '/video/work/tle-anniversary.jpg',
    },
    {
      title: 'Behind the Brand',
      client: 'RICI',
      type: 'Interview',
      file: '/video/work/rici-interview.mp4',
      poster: '/video/work/rici-interview.jpg',
    },
    // Social cuts (9:16)
    { title: 'Scalp Therapy', client: 'Vito Mazza', file: '/video/work/vito-scalp.mp4', poster: '/video/work/vito-scalp.jpg', vertical: true },
    { title: 'Curl Care', client: 'RICI', file: '/video/work/rici-trend2.mp4', poster: '/video/work/rici-trend2.jpg', vertical: true },
    { title: 'Join Us', client: 'The Learning Experience', file: '/video/work/tle-social1.mp4', poster: '/video/work/tle-social1.jpg', vertical: true },
    { title: 'The Salon', client: 'Vito Mazza', file: '/video/work/vito-pm1.mp4', poster: '/video/work/vito-pm1.jpg', vertical: true },
    { title: 'Atelier', client: 'RICI', file: '/video/work/rici-trend4.mp4', poster: '/video/work/rici-trend4.jpg', vertical: true },
    { title: 'First Steps', client: 'The Learning Experience', file: '/video/work/tle-social2.mp4', poster: '/video/work/tle-social2.jpg', vertical: true },
    { title: 'Styling', client: 'RICI', file: '/video/work/rici-trend6.mp4', poster: '/video/work/rici-trend6.jpg', vertical: true },
    { title: 'Products', client: 'RICI', file: '/video/work/rici-trend5.mp4', poster: '/video/work/rici-trend5.jpg', vertical: true },
    // Events & education (live coverage). `group: 'events'` puts them in their own section.
    { title: 'Curl Class', client: 'RICI', file: '/video/work/rici-class01.mp4', poster: '/video/work/rici-class01.jpg', vertical: true, group: 'events' },
    { title: 'The Setup', client: 'RICI', file: '/video/work/rici-class03.mp4', poster: '/video/work/rici-class03.jpg', vertical: true, group: 'events' },
    { title: 'Hands-On', client: 'RICI', file: '/video/work/rici-class08.mp4', poster: '/video/work/rici-class08.jpg', vertical: true, group: 'events' },
    { title: 'The System', client: 'RICI', file: '/video/work/rici-class13.mp4', poster: '/video/work/rici-class13.jpg', vertical: true, group: 'events' },
  ],
  // Only add real quotes from real clients.
  testimonials: [
    // { quote: '…', name: 'Name', role: 'Owner, Business' },
  ],
};
