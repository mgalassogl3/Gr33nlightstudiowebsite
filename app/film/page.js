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
      <PageHero eyebrow="Film" title="Stories that get the green light.">
        <p>We develop, shoot and finish our own features and shorts in New Jersey. Here’s what’s on the slate.</p>
      </PageHero>

      {films.map((film, i) => (
        <section key={film.slug} id={film.slug} className={`section ${i % 2 ? 'sectionAlt' : ''}`}>
          <div className="container filmFeature">
            <div className="poster">
              {film.poster ? (
                <img src={film.poster} alt={`${film.title} poster`} />
              ) : (
                <>
                  <span className="posterTitle">{film.title}</span>
                  <span className="posterMeta">A Gr33nlight film · {film.release}</span>
                </>
              )}
            </div>
            <div>
              <ul className="metaRow">
                <li className="chip chipHot">{film.status}</li>
                <li className="chip">{film.genre}</li>
                <li className="chip">Coming {film.release}</li>
              </ul>
              <h2 className="display">{film.title}</h2>
              <p className="lead">{film.logline}</p>
              <SocialLinks links={{ instagram: film.instagram }} withLabels />
              <div className="btnRow">
                <a href={smsHref(`Hi Gr33nlight! Keep me posted on ${film.title}.`)} className="btn btnPrimary">
                  <Icon name="chat" /> Get updates
                </a>
                <Link href="/contact" className="btn btnGhost">
                  Cast, crew & partners
                </Link>
              </div>
            </div>
          </div>
          {film.trailer && (
            <div className="container" style={{ marginTop: 48 }}>
              <VideoEmbed url={film.trailer} title={`${film.title} trailer`} />
            </div>
          )}
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="ctaBand">
            <p className="eyebrow">Work with us</p>
            <h2 className="h2">Got a story? Need a crew?</h2>
            <p>We partner with writers, actors and crew on indie productions — and our grip and lighting package is available for your shoot.</p>
            <div className="btnRow">
              <Link href="/contact" className="btn btnPrimary">
                Start a conversation
              </Link>
              <Link href="/rentals" className="btn btnGhost">
                Rent our gear
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
