import Icon from '@/components/Icon';
import { BootcampSignup } from '@/components/Forms';
import { bootcamp, site } from '@/lib/site';
import { smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'GL3 Content Boot Camp — Month-Long Creator Course',
  description: `Hands-on creator course in East Hanover, NJ. Podcasting, fashion & makeup tutorials, vertical storytelling, sports editing and marketing. Starts ${bootcamp.startLabel}, ${bootcamp.schedule} ${bootcamp.time}. Early bird $${bootcamp.price}.`,
  openGraph: {
    images: [{ url: '/images/bootcamp-flier.webp', width: 1024, height: 1536, alt: 'GL3 Content Boot Camp flier' }],
  },
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: bootcamp.name,
  description: metadata.description,
  startDate: `${bootcamp.startDate}T18:00:00-05:00`,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  image: [`${site.url}/images/bootcamp-flier.webp`],
  location: {
    '@type': 'Place',
    name: 'GL3 Studios',
    address: { '@type': 'PostalAddress', addressLocality: 'East Hanover', addressRegion: 'NJ', addressCountry: 'US' },
  },
  organizer: { '@type': 'Organization', name: site.name, url: site.url },
  offers: {
    '@type': 'Offer',
    price: bootcamp.price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/LimitedAvailability',
    url: `${site.url}/bootcamp`,
  },
};

export default function BootcampPage() {
  return (
    <>
      <section className="pageHero accent-lime">
        <div className="container bootHero">
          <div>
            <p className="eyebrow">Join the ultimate</p>
            <h1 className="display">
              {bootcamp.name.replace('GL3 ', '')}
              <span className="glow" style={{ display: 'block' }}>
                by GL3
              </span>
            </h1>
            <p className="lead">
              A {bootcamp.subtitle.toLowerCase()}. Hands-on training, real projects, real results — learn to make content that grows
              your following.
            </p>
            <ul className="facts">
              <li>
                <Icon name="calendar" />
                <span>
                  <strong>Starts {bootcamp.startLabel}</strong>
                  {bootcamp.duration}
                </span>
              </li>
              <li>
                <Icon name="clock" />
                <span>
                  <strong>{bootcamp.schedule}</strong>
                  {bootcamp.time}
                </span>
              </li>
              <li>
                <Icon name="pin" />
                <span>
                  <strong>GL3 Studios</strong>
                  East Hanover, NJ
                </span>
              </li>
              <li>
                <Icon name="check" />
                <span>
                  <strong>${bootcamp.price} early bird</strong>
                  Limited spots
                </span>
              </li>
            </ul>
            <div className="btnRow">
              <a href="#signup" className="btn btnPrimary">
                Save my spot <Icon name="arrow" size={18} />
              </a>
              <a href="#tracks" className="btn btnGhost">
                Pick your focus
              </a>
            </div>
          </div>
          <img
            src="/images/bootcamp-flier.webp"
            alt={`${bootcamp.name} flier: five creator tracks, starts ${bootcamp.startLabel}, ${bootcamp.schedule} ${bootcamp.time}, early bird $${bootcamp.price}`}
            className="flier"
            width="1024"
            height="1536"
          />
        </div>
      </section>

      <section className="section" id="tracks">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Pick your focus</p>
              <h2 className="h2">Five tracks. One month.</h2>
            </div>
            <p className="muted">Choose the lane that fits the content you want to make. Every track ends with real work you can post.</p>
          </div>
          <div className="tracks">
            {bootcamp.tracks.map((t) => (
              <article key={t.id} className={`track c-${t.color} reveal`}>
                {t.art ? (
                  <img src={t.art} alt="" className="trackArt" loading="lazy" />
                ) : (
                  <span className="trackIcon">
                    <Icon name={t.icon} size={24} />
                  </span>
                )}
                <h3 className="cardTitle">{t.name}</h3>
                <ul className="ticks">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="grid grid2">
            {bootcamp.perks.map((p) => (
              <div key={p.title} className="card">
                <h3 className="cardTitle">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="signup">
        <div className="container signupGrid">
          <div className="priceCard">
            <p className="eyebrow">{bootcamp.priceLabel}</p>
            <div className="price">
              <sup>$</sup>
              {bootcamp.price}
            </div>
            <p>{bootcamp.schedule} · {bootcamp.duration.toLowerCase()} · small groups</p>
            <span className="stamp">Limited spots</span>
          </div>
          <div className="panel">
            <h2 className="h2">Sign up now</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              Fill this in and send it — we’ll text you back to confirm your spot.
            </p>
            <BootcampSignup />
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <h2 className="h2">Questions</h2>
          <div className="faq">
            {bootcamp.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="btnRow">
            <a href={telHref} className="btn btnGhost">
              <Icon name="call" /> Call {site.phoneDisplay}
            </a>
            <a href={smsHref(`Hi GL3! I have a question about the ${bootcamp.name}.`)} className="btn btnGhost">
              <Icon name="chat" /> Text a question
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
    </>
  );
}
