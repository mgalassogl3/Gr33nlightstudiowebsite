import Link from 'next/link';
import Icon from '@/components/Icon';
import { SpotifyEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import { bootcamp, films, music } from '@/lib/site';

const tiles = [
  { href: '/film', title: 'Film', text: 'Original features and shorts, from script to screen.', icon: 'film', color: 'green', wide: true },
  { href: '/music', title: 'Music', text: 'Original records by Marcus Glass and the artists of the GL3 Hub.', icon: 'music', color: 'violet' },
  { href: '/bootcamp', title: 'Boot Camp', text: 'A month-long, hands-on course for content creators.', icon: 'phone', color: 'lime' },
  { href: '/rentals', title: 'Rentals', text: 'Grip and lighting gear: C-stands, GVM lights, Dana Dolly and more.', icon: 'light', color: 'orange' },
  { href: '/commercial', title: 'Commercial', text: 'Brand, social and event video for businesses and artists.', icon: 'camera', color: 'blue' },
];

export default function Home() {
  const film = films[0];
  const latestTrack = music.spotify[0];

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow rise">Independent studio · East Hanover, NJ</p>
            <h1 className="heroTitle rise rise2">
              <span>Film.</span>
              <span>Music.</span>
              <span className="glow">Creators.</span>
            </h1>
            <p className="lead rise rise3">
              Gr33nlight Studios — GL3 — is where stories get the green light. We make movies and music, train the next wave of
              creators, and put pro gear in your hands.
            </p>
            <div className="btnRow rise rise3">
              <Link href="/bootcamp" className="btn btnPrimary">
                Join the Boot Camp <Icon name="arrow" size={18} />
              </Link>
              <Link href="/rentals" className="btn btnGhost">
                Rent gear
              </Link>
            </div>
          </div>

          <aside className="nowCard rise rise3" aria-label="Now at GL3">
            <p className="eyebrow">Now at GL3</p>
            <ul className="nowList">
              {film && (
                <li>
                  <Link href="/film">
                    <span className="nowTag">{film.status}</span>
                    <strong>{film.title}</strong>
                    <span className="muted">Coming {film.release}</span>
                  </Link>
                </li>
              )}
              <li>
                <Link href="/bootcamp">
                  <span className="nowTag nowTagLime">Enrolling</span>
                  <strong>{bootcamp.name}</strong>
                  <span className="muted">
                    Starts {bootcamp.startLabel} · ${bootcamp.price} early bird
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/music">
                  <span className="nowTag nowTagViolet">Listen</span>
                  <strong>{music.artist}</strong>
                  <span className="muted">Streaming on Spotify</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Everything we do</h2>
            <p className="muted">One studio, five ways to work with us.</p>
          </div>
          <div className="grid grid3">
            {tiles.map((t) => (
              <Link key={t.href} href={t.href} className={`tile c-${t.color} ${t.wide ? 'tileWide' : ''}`}>
                <Icon name={t.icon} size={30} className="tileIcon" />
                <h3 className="cardTitle">{t.title}</h3>
                <p>{t.text}</p>
                <span className="textLink">
                  Explore <Icon name="arrow" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {film && (
        <section className="section sectionAlt">
          <div className="container filmFeature">
            <div className="poster">
              {film.poster && <img src={film.poster} alt={`${film.title} poster`} />}
              {!film.poster && (
                <>
                  <span className="posterTitle">{film.title}</span>
                  <span className="posterMeta">A Gr33nlight film · {film.release}</span>
                </>
              )}
            </div>
            <div>
              <p className="eyebrow">Now in production</p>
              <h2 className="h2">{film.title}</h2>
              <ul className="metaRow">
                <li className="chip chipHot">{film.status}</li>
                <li className="chip">{film.genre}</li>
                <li className="chip">Coming {film.release}</li>
              </ul>
              <p className="lead">{film.logline}</p>
              <div className="btnRow">
                <Link href="/film" className="btn btnPrimary">
                  About the film
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container musicGrid">
          <div>
            <p className="eyebrow">Music</p>
            <h2 className="h2">{music.artist}</h2>
            <p className="lead">{music.bio}</p>
            <SocialLinks links={{ instagram: music.instagram, tiktok: music.tiktok }} withLabels />
            <div className="btnRow">
              <Link href="/music" className="btn btnGhost">
                All music <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
          {latestTrack && <SpotifyEmbed url={latestTrack} title={`${music.artist} on Spotify`} />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="ctaBand">
            <p className="eyebrow">{bootcamp.name}</p>
            <h2 className="h2">
              Starts {bootcamp.startLabel}. <span className="glow">Limited spots.</span>
            </h2>
            <p>
              {bootcamp.schedule}, {bootcamp.time}, {bootcamp.duration.toLowerCase()}. Pick your focus: podcasting, fashion,
              vertical storytelling, sports editing or marketing.
            </p>
            <div className="btnRow">
              <Link href="/bootcamp#signup" className="btn btnPrimary">
                Save my spot — ${bootcamp.price}
              </Link>
              <Link href="/bootcamp" className="btn btnGhost">
                See the tracks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
