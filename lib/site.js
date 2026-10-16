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
  email: 'studio@gl3hq.com',

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
    genre: 'Short film',
    director: 'Mark Galasso',
    // Collaborating company, shown as "in collaboration with …".
    collaboration: 'Goenjin USA',
    // Production companies credit.
    producedBy: 'Gr33nlight Entertainment and Goenjin USA',
    // The world the short is set in (the feature it's the proof of concept for).
    feature: 'looking-for-hart',
    logline:
      'In a world torn by war, trust is not a luxury one can afford. Hartless explores the moment an injured General finds a lonely woman in the remote wilderness. Don’t worry, he won’t let those rebels hurt her...',
    // Longer description for /hartless. Separate paragraphs with a blank line.
    description: `Hartless is a short film set in the world of Looking For Hart — America, 2055. The country has fractured. The Union army rules the militarized cities, and in the Rocky Mountains a rebel camp led by the Hart family refuses to be found.

Built around grounded performances, practical effects and natural landscapes, Hartless is the proof of concept for the Looking For Hart feature and the trilogy beyond it: an intimate story of family, loyalty and the cost of a war you're born into.`,
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
    // Cast: { name, role (character), bio, photo }. Crew: { name, role, bio, photo }.
    // Anything without a name is hidden. Photos go in /public/images/people/.
    cast: [
      { name: 'Autumn Ivy', role: 'Alyssa', bio: '', photo: '' },
      { name: 'Ashley M Cowles', role: 'Karina', bio: '', photo: '' },
      { name: 'Tony Sharra', role: 'General Stark', bio: '', photo: '' },
      { name: 'Michael Ziggarelli', role: 'Private', bio: '', photo: '' },
    ],
    crew: [
      { name: 'Mark Galasso', role: 'Writer & Director', bio: '', photo: '' },
      { name: 'Daniel Emiliani', role: 'Executive Producer', bio: '', photo: '' },
      { name: 'Daniel Quinones', role: 'Executive Producer', bio: '', photo: '' },
      { name: 'Shu Hirayama', role: 'Director of Photography', bio: '', photo: '' },
      { name: 'Dan Sheppard', role: 'Sound Engineer', bio: '', photo: '' },
      { name: 'Ci Ci', role: 'Sound Assistant', bio: '', photo: '' },
      { name: 'Lidia Marukyan', role: 'Camera Assistant', bio: '', photo: '' },
      { name: 'Makoto Matsuo', role: 'Grip / Gaffer', bio: '', photo: '' },
      { name: 'Zachary Kangas', role: 'Lighting', bio: '', photo: '' },
    ],
    // Optional: a YouTube or Vimeo link to a teaser/trailer.
    trailer: '',
    // Optional: Instagram page for the film.
    instagram: '',
  },
];

// ── The slate: scripts & projects ────────────────────────────
// status: 'script' (completed script) or 'development' (work in progress).
// `laurels` lists ids from `laurels` below.
export const projects = [
  {
    slug: 'looking-for-hart',
    title: 'Looking For Hart',
    format: 'Feature film · Trilogy',
    genre: 'Sci-fi war drama / Dystopian romance',
    status: 'script',
    poster: '/images/posters/looking-for-hart.webp',
    logline:
      'Raised in the mountains as the daughter of a rebel general, a fierce young fighter falls for an enemy soldier and begins to question the war she was born into.',
    story:
      'America, 2055. Alyssa Hart is the rebellion’s most gifted fighter — trained to survive, to lead and to sacrifice, but never allowed to choose her own life. When she captures True Franklin, a Marine cadet sent to hunt her family, she finds someone questioning the same system from the other side. As the Union closes in on Camp Hart, Alyssa learns True is more than a defector: he’s a living military asset, and saving him means risking everything her parents fought for.',
    themes: 'Love across enemy lines · Truth vs. propaganda · Inheritance of war · Choice vs. destiny',
    comps: 'The New World × Star Wars × Red Dawn',
    note: 'Hartless, the short, is the proof of concept.',
  },
  {
    slug: 'trigger',
    title: 'Trigger',
    format: 'Feature film',
    genre: 'Crime thriller / Psychological drama',
    status: 'script',
    poster: '/images/posters/trigger.webp',
    logline:
      'A disgraced veteran fighting to protect his sister from relapse is dragged back into the criminal underworld when she vanishes — forcing him to rely on his younger gangster brother in a rescue mission that may not be what it seems.',
    story:
      'Max, a former Marine and once-promising boxer, is rebuilding a quiet life in Camden, New Jersey. Then his sister Tori disappears and an anonymous caller delivers an ultimatum: kill his brother Luis within 24 hours, or everyone Max loves dies. What starts as a rescue becomes a descent into trafficking, street politics and Max’s own trauma — and a revelation that reframes what it means to pull the trigger.',
    themes: 'Violence and accountability · Brotherhood · Trauma · Moral ambiguity',
  },
  {
    slug: 'in-search-of-the-wu',
    title: 'In Search of the Wu',
    format: 'Feature film',
    genre: 'Comedy / Adventure',
    status: 'script',
    poster: '/images/posters/in-search-of-the-wu.webp',
    logline:
      'When an old friend returns home with a reckless plan to steal an unreleased Wu-Tang Clan album from a forbidden fortress, four longtime friends are pushed into a chaotic adventure fueled by loyalty, belief and bad decisions.',
    story:
      'Mark, Vinny and Brian are still living at home, drifting through adulthood — until George comes back to town with a scheme to break into a remote fortress rumored to hold an unreleased Wu-Tang album. The mission becomes less about the album than whether these friendships can survive the chaos George unleashes.',
    themes: 'Friendship under pressure · Escaping stagnation · Growing up when you don’t want to',
  },
  {
    slug: 'marcus-glass-bitter-sweet',
    title: 'Marcus Glass: Bitter Sweet',
    format: 'Feature film',
    genre: 'Drama',
    status: 'script',
    poster: '/images/posters/marcus-glass-bitter-sweet.webp',
    logline:
      'Fresh out of rehab, a recovering addict is torn between rebuilding his family and chasing a once-in-a-lifetime music deal — and his gambling-addicted brother has intentions of his own.',
    story:
      'While Marcus was in treatment, he secretly won a talent competition: one month from now he performs for elite record executives, with a $500,000 signing bonus on the line. Pulled between his wife and newborn son, old habits, communal ties to the mafia and a brother desperate to pay off a bookie, Marcus has to decide what winning really means.',
    themes: 'Addiction and recovery · Ambition vs. stability · Redemption under pressure',
  },
  {
    slug: 'the-algorithm',
    title: 'The Algorithm',
    format: 'Feature film',
    genre: 'Sci-fi thriller / Mystery',
    status: 'script',
    poster: '/images/posters/the-algorithm.webp',
    logline:
      'In 2151, a young tech prodigy living off the grid is forced into a race against time when a damaged droid hands her an unsolvable code — one that will kill innocent people if she fails, and expose a government conspiracy if she succeeds.',
    story:
      'Helen and her younger sister Laura live in an abandoned New York library turned hidden tech fortress. Cracking the droid’s code reveals a predictive program the government uses to identify — and erase — children who might grow up to be threats. And the droid’s murdered creator was Helen’s father.',
    themes: 'Surveillance · Family · Resistance',
  },
  {
    slug: 'the-moon-wars',
    title: 'The Moon Wars',
    format: 'Feature film',
    genre: 'Sci-fi action / Space opera',
    status: 'script',
    poster: '/images/posters/the-moon-wars.webp',
    logline:
      'After a life hidden among Earth’s forgotten underclass, a young fugitive discovers he is the last threat to a lunar throne — forcing him to fight royal bounty hunters and embrace a destiny that was stolen from him.',
    story:
      'In 2415, Earth is a dumping ground for the unwanted. Jake survives in the waste districts of New York Harbor, unaware he is the lost heir smuggled from the Moon King’s court. When royal bounty hunters descend to execute him, he teams up with a crew of misfits, each bonded to a biotech weapon.',
    themes: 'Found family · Stolen destiny · Survival over sovereignty',
  },
  {
    slug: 'the-lunar-society',
    title: 'The Lunar Society',
    format: 'Series',
    genre: 'Historical adventure / Mythic conspiracy',
    status: 'development',
    poster: '/images/posters/the-lunar-society.webp',
    logline:
      'As young Paul Revere throws himself into the fight for liberty, he’s drawn into a hidden conflict over an ancient curse beneath America’s foundation — one only Benjamin Franklin and Thomas Jefferson may be able to stop.',
    story:
      'The hidden story beneath America’s birth: cursed gold from a vanished civilization, Native American guardians, British forces racing to seize its power, and Betsy Ross leading The Doves — an all-female spy ring working under a young George Washington.',
    themes: 'Adventure · Espionage · Mythic lore',
  },
];

// Laurels & awards. `project` links a laurel to a project slug (shown on that
// project); laurels without a project show in the band at the top of /film.
// `status` is the line above the festival name. Use `image` for official
// laurel artwork; otherwise a matching laurel is drawn from the text.
export const laurels = [
  // In Search of the Wu
  {
    id: 'wu-sdma',
    project: 'in-search-of-the-wu',
    status: 'Best Screenplay',
    festival: 'San Diego Movie Awards',
    year: '2026',
    image: '/images/laurels/sdma-2026-best-screenplay.png',
  },
  {
    id: 'wu-nyifa',
    project: 'in-search-of-the-wu',
    status: 'Finalist, Best Screenplay',
    festival: 'New York International Film Awards',
    year: '2026',
    image: '/images/laurels/nyifa-2026-finalist.png',
  },
  // Looking For Hart
  {
    id: 'l4h-sdma',
    project: 'looking-for-hart',
    status: 'Official Selection',
    festival: 'San Diego Movie Awards',
    year: '2026',
    image: '/images/laurels/sdma-2026-selection.png',
  },
  // Trigger
  {
    id: 'trigger-palm-springs',
    project: 'trigger',
    status: 'Quarter-Finalist',
    festival: 'Palm Springs International Screenplay & Pitchdeck-Sizzle Reel-Trailer Contest',
    year: '2026',
    image: '/images/laurels/palm-springs-2026-quarter-finalist.png',
  },
  // Earlier work (not on the slate) — `work` captions the laurel
  { id: 'la-new-filmmakers-2018', project: '', work: 'Red Top', status: 'Official Selection', festival: 'LA New Filmmakers Festival', year: '2018', image: '/images/laurels/la-new-filmmakers-2018.png' },
  { id: 'inroads-2018', project: '', work: 'The Rooms', status: 'Finalist', festival: 'Inroads Screenwriting Fellowship', year: '2018', image: '/images/laurels/inroads-2018-finalist.png' },
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
  commercial: '/video/commercial-hero.jpg',
  commercialVideo: '/video/commercial-hero.mp4',
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
    available: 1,
    rate: 40,
    specs: ['Micro Four Thirds · 4K video · 20MP stills', 'Lumix 14mm prime (wide)', 'Sigma 30mm prime (close-ups)'],
    image: '/images/gear-lumix-gx8.webp',
    productShot: true,
  },
  {
    id: 'c-stand',
    name: 'C-Stand',
    category: 'Grip',
    available: 6,
    rate: 10,
    specs: ['Turtle base', 'Grip arm & head included'],
    image: '/images/gear-c-stand.webp',
    productShot: true,
  },
  {
    id: 'c-stand-shorty',
    name: 'Shorty C-Stand',
    category: 'Grip',
    available: 3,
    rate: 8,
    specs: ['Low-profile C-stand', 'Grip arm & head included'],
    image: '/images/gear-c-stand.webp',
    productShot: true,
  },
  {
    id: 'dana-dolly',
    name: 'Dana Dolly',
    unit: 'kit',
    category: 'Camera movement',
    available: 1,
    rate: 75,
    specs: ['Dolly plate in hard case', 'Track pipes included', 'Stands not included'],
    image: '/images/gear-dana-dolly.webp',
  },
  {
    id: 'flags',
    name: 'Neewer Flag Kit',
    unit: 'kit',
    category: 'Grip',
    available: 1,
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
    available: 17,
    rate: 10,
    specs: ['6 spring A-clamps', 'Rubber-tipped jaws'],
    image: '/images/gear-a-clamps.webp',
    productShot: true,
  },
  {
    id: 'sandbags',
    name: 'Sandbags',
    unit: 'each',
    category: 'Grip',
    available: 20,
    rate: 3,
    specs: ['Weigh down stands & rigs', 'Saddle style'],
    image: '/images/gear-sandbags.webp',
    productShot: true,
  },
  {
    id: 'apple-boxes',
    name: 'Apple Box Kit',
    unit: 'kit',
    category: 'Grip',
    available: 1,
    rate: 15,
    specs: ['Nested set of apple boxes', 'Raise actors, gear & set pieces'],
    image: '/images/gear-apple-boxes.webp',
    productShot: true,
  },
];

// Discounts. They stack one after the other: a student's first rental is
// 50% off, then 25% off that (62.5% off in total).
export const rentalDiscounts = {
  student: { label: 'Students', percent: 50, note: 'Bring a valid student ID at pickup.' },
  firstTime: { label: 'First rental', percent: 25, note: 'Your first rental with GL3.' },
};

// Pickup or delivery. Delivery is a flat fee per rental and is never discounted.
export const rentalDelivery = [
  { id: 'pickup', label: 'Pickup — East Hanover, NJ', fee: 0 },
  { id: 'nj', label: 'Delivery — New Jersey', fee: 100 },
  { id: 'nys', label: 'Delivery — New York State', fee: 150 },
  { id: 'nyc', label: 'Delivery — New York City', fee: 175 },
];

export const rentalTerms = [
  'Pickup in East Hanover, NJ, or delivery: New Jersey $100 · New York State $150 · NYC $175. Discounts don’t apply to delivery.',
  'ID and a deposit are required for every rental.',
  'Multi-day and full-package discounts available.',
];

// ── Commercial ───────────────────────────────────────────────
export const commercial = {
  services: [
    { title: 'Brand & promo videos', text: 'Short films that tell your story and sell what you do.' },
    { title: 'Social content', text: 'Vertical video built for Reels, TikTok and Shorts.' },
    { title: 'Events & education', text: 'Live coverage, classes and workshops — recaps, highlights and teaching clips.' },
    { title: 'Product video', text: 'Product shots and demos for ads, websites and launches.' },
  ],
  // Brands and people you've worked with. `logo` is optional
  // ('/images/clients/name.png'); without it the name is shown.
  // `place` (optional) shows under the name.
  clients: [
    { name: 'RICI', logo: '', url: '' },
    { name: 'The Learning Experience', logo: '', url: '' },
    { name: 'Vito Mazza Salon & Spa', logo: '', url: '' },
    { name: 'Emiliani Metro', place: 'NJ · PA · NY', logo: '', url: '' },
    { name: 'Ravello’s Banquet Hall', place: 'East Hanover, NJ', logo: '', url: '' },
    { name: 'Party Expo', place: 'NJ', logo: '', url: '' },
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
