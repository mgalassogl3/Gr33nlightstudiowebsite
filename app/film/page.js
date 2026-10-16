import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import Icon from '@/components/Icon';
import Laurel from '@/components/Laurel';
import { films, laurels, projects } from '@/lib/site';

export const metadata = {
  title: 'Film',
  description:
    'Gr33nlight Studios films and scripts: Hartless (short, in production, with Goenjin USA), Looking For Hart, Trigger, In Search of the Wu and more.',
  openGraph: { images: [{ url: '/images/hartless/wide.webp', width: 2880, height: 1080, alt: 'Still from Hartless' }] },
};

// Strongest results first.
const rank = (l) => ['winner', 'finalist', 'nominee', 'quarter', 'selection'].findIndex((k) => l.status.toLowerCase().includes(k));
const laurelsFor = (slug) => laurels.filter((l) => l.project === slug).sort((a, b) => rank(a) - rank(b));

export default function FilmPage() {
  const hartless = films.find((f) => f.slug === 'hartless');
  const scripts = projects.filter((p) => p.status === 'script');
  const inDevelopment = projects.filter((p) => p.status === 'development');
  const studioLaurels = laurels.filter((l) => !l.project);

  return (
    <>
      <PageHero label="Film" title="Stories that get the green light." image={hartless.banner} position="center 40%">
        <p>Original features, shorts and series from Gr33nlight Studios — from first draft to final cut.</p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <p className="label">
              Now in production · in collaboration with {hartless.collaboration}
            </p>
            <h2 className="display">
              <span className="spaced">{hartless.title}</span>
            </h2>
            <p className="lead">{hartless.logline}</p>
            <div className="btnRow">
              <Link href="/hartless" className="btn btnPrimary">
                Enter the world of {hartless.title} <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
          <ul className="facts" style={{ gridTemplateColumns: 'repeat(2, 1fr)', alignSelf: 'end' }}>
            <li>
              <span>Format</span>
              <strong>{hartless.genre}</strong>
            </li>
            <li>
              <span>Director</span>
              <strong>{hartless.director}</strong>
            </li>
            <li>
              <span>Status</span>
              <strong>{hartless.status}</strong>
            </li>
            <li>
              <span>Release</span>
              <strong>{hartless.release}</strong>
            </li>
          </ul>
        </div>
      </section>

      {studioLaurels.length > 0 && (
        <section className="laurelBand" aria-label="Laurels and awards">
          <div className="container laurels">
            {studioLaurels.map((l) => (
              <Laurel key={l.id} laurel={l} height={92} />
            ))}
          </div>
        </section>
      )}

      {scripts.length > 0 && (
        <section className="section sectionTop" id="scripts">
          <div className="container">
            <div className="sectionHead">
              <div>
                <p className="label">The slate</p>
                <h2 className="h2">Completed scripts</h2>
              </div>
              <p className="muted">Finished screenplays ready for partners. Full scripts, decks and outlines available on request.</p>
            </div>
            <div className="projects">
              {scripts.map((p) => (
                <ProjectCard key={p.slug} project={p} laurels={laurelsFor(p.slug)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {inDevelopment.length > 0 && (
        <section className="section sectionTop" id="in-development">
          <div className="container">
            <div className="sectionHead">
              <div>
                <p className="label">Works in progress</p>
                <h2 className="h2">In development</h2>
              </div>
              <p className="muted">Series and worlds we’re building now.</p>
            </div>
            <div className="projects">
              {inDevelopment.map((p) => (
                <ProjectCard key={p.slug} project={p} laurels={laurelsFor(p.slug)} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section sectionTop">
        <div className="container split">
          <h2 className="h2">Financing, development, production.</h2>
          <div>
            <p className="lead" style={{ marginTop: 0 }}>
              We’re looking for partners on the slate — and our crew and grip and lighting package are available for your production.
            </p>
            <div className="btnRow">
              <Link href="/contact" className="arrowLink">
                Start a conversation <Icon name="arrow" size={16} />
              </Link>
              <Link href="/rentals" className="arrowLink">
                Rent our gear <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
