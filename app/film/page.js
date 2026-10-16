import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { VideoEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import Icon from '@/components/Icon';
import { films, fromTheSet } from '@/lib/site';
import { smsHref } from '@/lib/links';

export const metadata = {
  title: 'Film',
  description: 'Original films from Gr33nlight Studios, including Hartless — directed by Mark Galasso, coming 2027.',
  openGraph: { images: [{ url: '/images/hartless/wide.webp', width: 2880, height: 1080, alt: 'Still from Hartless' }] },
};

export default function FilmPage() {
  const [film, ...others] = films;

  return (
    <>
      <PageHero label={`Film · ${film.status}`} title={film.title} image={film.banner} position="center 40%">
        {film.logline ? <p>{film.logline}</p> : <p>A Gr33nlight film, directed by {film.director}. Coming {film.release}.</p>}
      </PageHero>

      <section className="section" id={film.slug}>
        <div className="container">
          <ul className="facts" style={{ marginTop: 0 }}>
            <li>
              <span>Format</span>
              <strong>{film.genre}</strong>
            </li>
            <li>
              <span>Director</span>
              <strong>{film.director}</strong>
            </li>
            <li>
              <span>Status</span>
              <strong>{film.status}</strong>
            </li>
            <li>
              <span>Release</span>
              <strong>{film.release}</strong>
            </li>
          </ul>
          <SocialLinks links={{ instagram: film.instagram }} withLabels />
          <div className="btnRow">
            <a href={smsHref(`Hi Gr33nlight! Keep me posted on ${film.title}.`)} className="btn btnPrimary">
              Get updates
            </a>
            <Link href="/contact" className="btn btnGhost">
              Cast, crew & partners
            </Link>
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

      {film.stills?.length > 0 && (
        <section className="section sectionTop">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Stills</h2>
              <p className="muted">Frames from {film.title}.</p>
            </div>
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
          <div className="sectionHead">
            <h2 className="h2">From the set</h2>
            <p className="muted">Shot on location in New Jersey with a small crew and our own grip and lighting package.</p>
          </div>
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

      {others.length > 0 && (
        <section className="section sectionTop">
          <div className="container">
            <p className="label">Also on the slate</p>
            <ul className="index">
              {others.map((f) => (
                <li key={f.slug}>
                  <a href={`#${f.slug}`}>
                    <span className="indexNum">{f.release}</span>
                    <span className="indexTitle">{f.title}</span>
                    <span className="indexText">{f.status}</span>
                    <Icon name="arrow" size={22} className="indexArrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section sectionTop">
        <div className="container split">
          <h2 className="h2">Have a story? Need a crew?</h2>
          <div>
            <p className="lead" style={{ marginTop: 0 }}>
              We partner with writers, actors and crew on independent productions, and our grip and lighting package is available for your
              shoot.
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
