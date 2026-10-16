import PageHero from '@/components/PageHero';
import { VideoEmbed } from '@/components/Embeds';
import { ProjectInquiry } from '@/components/Forms';
import { commercial } from '@/lib/site';

export const metadata = {
  title: 'Commercial Video Production in NJ',
  description:
    'Brand videos, social content, event coverage and music videos by Gr33nlight Studios in East Hanover, NJ. See who we’ve worked with and book a shoot.',
};

export default function CommercialPage() {
  const { services, clients, projects, testimonials } = commercial;

  return (
    <>
      <PageHero
        label="Commercial"
        title="A film crew for your brand."
        after={
          <div className="btnRow">
            <a href="#book" className="btn btnPrimary">
              Book a shoot
            </a>
          </div>
        }
      >
        <p>We bring the eye, the gear and the crew from our own films to businesses and artists — from a single social clip to a full campaign.</p>
      </PageHero>

      {projects.length > 0 && (
        <section className="section" id="work">
          <div className="container">
            <p className="label">Selected work</p>
            <div className="workGrid">
              {projects.map((p) => (
                <article key={p.title}>
                  <VideoEmbed url={p.video} title={p.title} />
                  <h3 className="h3" style={{ marginTop: 20 }}>
                    {p.title}
                  </h3>
                  <p className="muted" style={{ margin: 0 }}>
                    {[p.client, p.type].filter(Boolean).join(' · ')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section ${projects.length ? 'sectionTop' : ''}`}>
        <div className="container">
          <p className="label">What we make</p>
          <ul className="numbered">
            {services.map((s, i) => (
              <li key={s.title}>
                <span className="indexNum">0{i + 1}</span>
                <h2 className="h3">{s.title}</h2>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {clients.length > 0 && (
        <section className="section sectionTop">
          <div className="container">
            <p className="label">Who we’ve worked with</p>
            <div className="logoWall">
              {clients.map((c) => {
                const inner = c.logo ? <img src={c.logo} alt={c.name} loading="lazy" /> : c.name;
                return c.url ? (
                  <a key={c.name} href={c.url} className="logoCell" target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={c.name} className="logoCell">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="section sectionTop">
          <div className="container workGrid">
            {testimonials.map((t) => (
              <figure key={t.name} className="quote">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption className="muted">
                  {t.name}
                  {t.role && `, ${t.role}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section sectionTop" id="book">
        <div className="container split">
          <div>
            <h2 className="h2">Book a shoot</h2>
            <p className="muted">Tell us what you’re making. We’ll come back with ideas and a quote.</p>
          </div>
          <div className="formWrap">
            <ProjectInquiry />
          </div>
        </div>
      </section>
    </>
  );
}
