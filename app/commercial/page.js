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
      <PageHero eyebrow="Commercial" title="Video that moves people." accent="blue" art="/art/icon-camera.webp">
        <p>We bring a film crew’s eye to brands, businesses and artists — from a single social clip to a full campaign.</p>
        <div className="btnRow">
          <a href="#book" className="btn btnPrimary">
            Book a shoot
          </a>
          {projects.length > 0 && (
            <a href="#work" className="btn btnGhost">
              See the work
            </a>
          )}
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid2">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h2 className="cardTitle">{s.title}</h2>
                <p className="muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section sectionAlt" id="work">
          <div className="container">
            <h2 className="h2">Featured work</h2>
            <div className="grid grid2">
              {projects.map((p) => (
                <article key={p.title}>
                  <VideoEmbed url={p.video} title={p.title} />
                  <h3 className="cardTitle" style={{ marginTop: 16 }}>
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

      {clients.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Who we’ve worked with</h2>
            </div>
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
        <section className="section sectionAlt">
          <div className="container grid grid2">
            {testimonials.map((t) => (
              <figure key={t.name} className="card quote">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption className="muted">
                  <strong style={{ color: 'var(--text)' }}>{t.name}</strong>
                  {t.role && ` — ${t.role}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section" id="book">
        <div className="container">
          <div className="panel" style={{ marginTop: 0 }}>
            <h2 className="h2">Book a shoot</h2>
            <p className="muted" style={{ marginTop: 0 }}>
              Tell us what you’re making. We’ll get back to you with ideas and a quote.
            </p>
            <ProjectInquiry />
          </div>
        </div>
      </section>
    </>
  );
}
