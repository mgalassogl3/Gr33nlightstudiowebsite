import Link from 'next/link';
import Icon from '@/components/Icon';
import { SpotifyEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import Ticker from '@/components/Ticker';
import { bootcamp, films, music } from '@/lib/site';

const tiles = [
  { href: '/film', n: '01', title: 'Film', text: 'Original features and shorts, from script to screen.', art: '/art/icon-acting.webp', color: 'green', wide: true },
  { href: '/music', n: '02', title: 'Music', text: 'Original records by Marcus Glass and the artists of the GL3 Hub.', art: '/art/icon-headphones.webp', color: 'violet' },
  { href: '/bootcamp', n: '03', title: 'Boot Camp', text: 'A month-long, hands-on course for content creators.', art: '/art/icon-iphonecamera.webp', color: 'lime' },
  { href: '/rentals', n: '04', title: 'Rentals', text: 'Grip & lighting: C-stands, GVM lights, Dana Dolly and more.', art: '/art/bulb.webp', color: 'orange' },
  { href: '/commercial', n: '05', title: 'Commercial', text: 'Brand, social and event video for businesses and artists.', art: '/art/icon-camera.webp', color: 'blue' },
];

export default function Home() {
  const film = films[0];
  const latestTrack = music.spotify[0];

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow rise">Independent studio · East Hanover, NJ</p>
            <h1 className="heroTitle rise rise2">
              <span>Film.</span>
              <span>Music.</span>
              <span className="glow">Creators.</span>
            </h1>
            <p className="lead rise rise3">
              Gr33nlight Studios — GL3 — is where ideas get the green light. We make movies and music, train the next wave of
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
          <div className="heroStage" aria-hidden="true">
            <img src="/art/mascot.webp" alt="" className="heroMascot float" width="555" height="900" />
          </div>
        </div>
      </section>

      <Ticker />

      <section className="nowStrip" aria-label="Now at GL3">
        <div className="container nowGrid">
          {film && (
            <Link href="/film" className="nowItem reveal">
              <span className="nowTag">{film.status}</span>
              <strong>{film.title}</strong>
              <span className="muted">A Gr33nlight film · coming {film.release}</span>
            </Link>
          )}
          <Link href="/bootcamp" className="nowItem reveal">
            <span className="nowTag nowTagLime">Enrolling now</span>
            <strong>Content Boot Camp</strong>
            <span className="muted">
              Starts {bootcamp.startLabel} · ${bootcamp.price} early bird
            </span>
          </Link>
          <Link href="/music" className="nowItem reveal">
            <span className="nowTag nowTagViolet">Listen</span>
            <strong>{music.artist}</strong>
            <span className="muted">Streaming on Spotify</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead reveal">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="h2">One studio. Five ways in.</h2>
            </div>
            <p className="muted">Make something with us, learn from us, or borrow our gear.</p>
          </div>
          <div className="grid grid3">
            {tiles.map((t) => (
              <Link key={t.href} href={t.href} className={`tile c-${t.color} ${t.wide ? 'tileWide' : ''} reveal`}>
                <img src={t.art} alt="" className="tileArt" loading="lazy" />
                <span className="tileNum">{t.n}</span>
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
        <section className="filmBand">
          <div className="container filmFeature">
            <div className="poster reveal">
              {film.poster ? (
                <img src={film.poster} alt={`${film.title} poster`} />
              ) : (
                <>
                  <span className="posterTitle">{film.title}</span>
                  <span className="posterMeta">A Gr33nlight film · {film.release}</span>
                </>
              )}
            </div>
            <div className="reveal">
              <p className="eyebrow">Now in production</p>
              <h2 className="display">{film.title}</h2>
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
          <div className="reveal">
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
          {latestTrack && (
            <div className="reveal">
              <SpotifyEmbed url={latestTrack} title={`${music.artist} on Spotify`} />
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="ctaBand reveal">
            <img src="/art/mascot-flex.webp" alt="" className="ctaArt" loading="lazy" />
            <div className="ctaCopy">
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
        </div>
      </section>
    </>
  );
}
