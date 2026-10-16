import Link from 'next/link';
import PageHero from '@/components/PageHero';
import People from '@/components/People';
import { VideoEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import Icon from '@/components/Icon';
import { films, fromTheSet, projects, site } from '@/lib/site';
import { smsHref, mailtoHref } from '@/lib/links';

const film = films.find((f) => f.slug === 'hartless');
const feature = projects.find((p) => p.slug === film.feature);

export const metadata = {
  title: `${film.title} — a Gr33nlight film in collaboration with ${film.collaboration}`,
  description: `${film.title}: ${film.logline} A short film by ${film.director}, in collaboration with ${film.collaboration}. Coming ${film.release}.`,
  openGraph: { images: [{ url: film.banner, width: 2880, height: 1080, alt: `Still from ${film.title}` }] },
};

export default function HartlessPage() {
  const paragraphs = film.description.split(/\n\s*\n/);

  return (
    <>
      <PageHero
        label={`A Gr33nlight Entertainment film · in collaboration with ${film.collaboration}`}
        title={<span className="spaced heroSpaced">{film.title}</span>}
        image={film.banner}
        position="center 40%"
      >
        <p>{film.logline}</p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <p className="label">The film</p>
            {paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className="lead" style={{ marginTop: 0 }}>
                {t}
              </p>
            ))}
          </div>
          <div>
            <ul className="facts" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 0 }}>
              <li>
                <span>Format</span>
                <strong>{film.genre}</strong>
              </li>
              <li>
                <span>Status</span>
                <strong>{film.status}</strong>
              </li>
              <li>
                <span>Director</span>
                <strong>{film.director}</strong>
              </li>
              <li>
                <span>Release</span>
                <strong>{film.release}</strong>
              </li>
              <li style={{ gridColumn: '1 / -1' }}>
                <span>Produced by</span>
                <strong>{film.producedBy}</strong>
              </li>
            </ul>
            <SocialLinks links={{ instagram: film.instagram }} withLabels />
          </div>
        </div>
      </section>

      {film.trailer && (
        <section className="section sectionTop">
          <div className="container">
            <p className="label">Trailer</p>
            <VideoEmbed url={film.trailer} title={`${film.title} trailer`} />
          </div>
        </section>
      )}

      <section className="section sectionTop" id="cast-and-crew">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Cast & crew</h2>
            <p className="muted">The people bringing {film.title} to the screen.</p>
          </div>
          {film.cast.some((p) => p.name) && (
            <>
              <p className="label">Cast</p>
              <People people={film.cast} />
            </>
          )}
          <p className="label" style={{ marginTop: film.cast.some((p) => p.name) ? 64 : 0 }}>
            Crew
          </p>
          <People people={film.crew} />
        </div>
      </section>

      {film.stills?.length > 0 && (
        <section className="section sectionTop">
          <div className="container">
            <p className="label">Stills</p>
            <div className="stills">
              {film.stills.map((src, i) => (
                <img key={src} src={src} alt={`${film.title} still ${i + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section sectionTop">
        <div className="container">
          <p className="label">From the set</p>
          <div className="setPhotos">
            {fromTheSet.photos.map((p) => (
              <img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
            ))}
          </div>
          <div className="clips">
            {fromTheSet.clips.map((c) => (
              <video key={c.src} src={c.src} poster={c.poster} autoPlay muted loop playsInline preload="none" aria-label="Behind the scenes clip" />
            ))}
          </div>
        </div>
      </section>

      {feature && (
        <section className="section sectionTop">
          <div className="container filmFeature">
            <div className="projectPoster">
              <img src={feature.poster} alt={`${feature.title} poster`} loading="lazy" />
            </div>
            <div>
              <p className="label">The feature</p>
              <h2 className="h2">{feature.title}</h2>
              <p className="lead" style={{ marginTop: 0 }}>
                {feature.logline}
              </p>
              <p className="muted">
                {film.title} is the proof of concept for {feature.title}, a {feature.genre.toLowerCase()} planned as a feature and trilogy.
              </p>
              <div className="btnRow">
                <Link href={`/film#${feature.slug}`} className="arrowLink">
                  About {feature.title} <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section sectionTop">
        <div className="container split">
          <h2 className="h2">Cast, crew & partners</h2>
          <div>
            <p className="lead" style={{ marginTop: 0 }}>
              Questions about the production, press, or partnering on {film.title} and {feature?.title}?
            </p>
            <div className="btnRow">
              <a href={smsHref(`Hi Gr33nlight! About ${film.title}: `)} className="btn btnPrimary">
                <Icon name="chat" /> Text us
              </a>
              {site.email && (
                <a href={mailtoHref(film.title)} className="btn btnGhost">
                  <Icon name="mail" /> Email
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
