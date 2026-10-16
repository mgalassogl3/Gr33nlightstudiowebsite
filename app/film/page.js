import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { VideoEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import Icon from '@/components/Icon';
import { films } from '@/lib/site';
import { smsHref } from '@/lib/links';

export const metadata = {
  title: 'Film',
  description: 'Original films from Gr33nlight Studios, including Hartless — coming 2027.',
};

export default function FilmPage() {
  return (
    <>
      <PageHero label="Film" title="Stories that get the green light.">
        <p>We develop, shoot and finish our own features and shorts in New Jersey.</p>
      </PageHero>

      {films.map((film) => (
        <section key={film.slug} id={film.slug} className="section">
          <div className="container filmFeature">
            <div className="poster">
              {film.poster ? (
                <img src={film.poster} alt={`${film.title} poster`} />
              ) : (
                <>
                  <span className="posterTitle spaced">{film.title}</span>
                  <span className="posterMeta">A Gr33nlight film · {film.release}</span>
                </>
              )}
            </div>
            <div>
              <p className="label">{film.status}</p>
              <h2 className="display">{film.title}</h2>
              <p className="lead">{film.logline}</p>
              <ul className="facts">
                <li>
                  <span>Format</span>
                  <strong>{film.genre}</strong>
                </li>
                <li>
                  <span>Status</span>
                  <strong>{film.status}</strong>
                </li>
                <li>
                  <span>Release</span>
                  <strong>{film.release}</strong>
                </li>
                <li>
                  <span>Studio</span>
                  <strong>Gr33nlight</strong>
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
          </div>
          {film.trailer && (
            <div className="container" style={{ marginTop: 80 }}>
              <VideoEmbed url={film.trailer} title={`${film.title} trailer`} />
            </div>
          )}
        </section>
      ))}

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
