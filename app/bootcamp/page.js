import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { BootcampSignup } from '@/components/Forms';
import { banners, bootcamp, site } from '@/lib/site';
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
      <PageHero
        label={`Boot Camp · starts ${bootcamp.startLabel}`}
        title={bootcamp.name}
        image={banners.bootcamp}
        position="center 35%"
        after={
          <>
            <ul className="facts">
              <li>
                <span>Starts</span>
                <strong>{bootcamp.startLabel}</strong>
              </li>
              <li>
                <span>When</span>
                <strong>
                  {bootcamp.schedule}, {bootcamp.time}
                </strong>
              </li>
              <li>
                <span>Where</span>
                <strong>East Hanover, NJ</strong>
              </li>
              <li>
                <span>Early bird</span>
                <strong>${bootcamp.price}</strong>
              </li>
            </ul>
            <div className="btnRow">
              <a href="#signup" className="btn btnPrimary">
                Save my spot
              </a>
              <a href="/images/bootcamp-flier.webp" className="btn btnGhost" target="_blank" rel="noopener noreferrer">
                View the flier
              </a>
            </div>
          </>
        }
      >
        <p>
          A {bootcamp.subtitle.toLowerCase()} at the studio. Hands-on training, real projects and small groups — you leave with work you
          can post and the skills to keep making it.
        </p>
      </PageHero>

      <section className="section" id="tracks">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Pick your focus.</h2>
            <p className="muted">Five tracks, one month. Choose the lane that fits the content you want to make.</p>
          </div>
          <ol className="trackList">
            {bootcamp.tracks.map((t, i) => (
              <li key={t.id} className="trackItem">
                <span className="indexNum">0{i + 1}</span>
                <h3 className="h3">{t.name}</h3>
                <p className="trackPoints">{t.points.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section sectionTop">
        <div className="container">
          <ul className="numbered">
            {bootcamp.perks.map((p, i) => (
              <li key={p.title}>
                <span className="indexNum">0{i + 1}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section sectionTop" id="signup">
        <div className="container split">
          <div>
            <p className="label">{bootcamp.priceLabel}</p>
            <div className="price">${bootcamp.price}</div>
            <p className="muted" style={{ marginTop: 20 }}>
              {bootcamp.schedule}, {bootcamp.time}, {bootcamp.duration.toLowerCase()}.<br />
              Small groups. Limited spots.
            </p>
          </div>
          <div className="formWrap">
            <h2 className="h2">Sign up</h2>
            <p className="muted" style={{ marginTop: -8 }}>
              Send this and we’ll text you back to confirm your spot.
            </p>
            <BootcampSignup />
          </div>
        </div>
      </section>

      <section className="section sectionTop">
        <div className="container split">
          <h2 className="h2">Questions</h2>
          <div>
            <div className="faq">
              {bootcamp.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="btnRow">
              <a href={telHref} className="arrowLink">
                Call {site.phoneDisplay} <Icon name="arrow" size={16} />
              </a>
              <a href={smsHref(`Hi GL3! I have a question about the ${bootcamp.name}.`)} className="arrowLink">
                Text a question <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
    </>
  );
}
