import Link from 'next/link';
import Icon from '@/components/Icon';
import { SpotifyEmbed } from '@/components/Embeds';
import { bootcamp, films, homeHero, music } from '@/lib/site';

const index = [
  { href: '/film', title: 'Film', text: 'Original features and shorts, made in New Jersey.' },
  { href: '/music', title: 'Music', text: 'Marcus Glass and the artists of the GL3 Hub.' },
  { href: '/bootcamp', title: 'Boot Camp', text: 'A month-long, hands-on course for content creators.' },
  { href: '/rentals', title: 'Rentals', text: 'Grip and lighting for your shoot.' },
  { href: '/commercial', title: 'Commercial', text: 'Brand, social and event video.' },
];

export default function Home() {
  const film = films[0];

  return (
    <>
      <section className="hero">
        {homeHero.video ? (
          <video className="heroMedia" src={homeHero.video} poster={homeHero.image || undefined} autoPlay muted loop playsInline />
        ) : homeHero.image ? (
          <img className="heroMedia" src={homeHero.image} alt="" />
        ) : (
          <div className="heroBeam" />
        )}
        <div className="container">
          <p className="label fadeIn">Gr33nlight Studios presents</p>
          <h1 className="heroTitle fadeIn fadeIn2">{film.title}</h1>
          <div className="heroMeta fadeIn fadeIn3">
            <span className="serif">A Gr33nlight film</span>
            <span>
              {film.status} · {film.release}
            </span>
            <Link href="/film" className="arrowLink">
              About the film <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="statement">
            Gr33nlight is an independent studio in East Hanover, New Jersey. <em>We make films and music, train creators, and light other people’s sets.</em>
          </p>
        </div>
      </section>

      <section className="section sectionTop" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="container">
          <ul className="index">
            {index.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="indexNum">0{i + 1}</span>
                  <span className="indexTitle">{item.title}</span>
                  <span className="indexText">{item.text}</span>
                  <Icon name="arrow" size={22} className="indexArrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {film.banner && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <figure className="wideStill">
              <Link href="/film" aria-label={`${film.title} — about the film`}>
                <img src={film.banner} alt={`Still from ${film.title}`} loading="lazy" />
              </Link>
              <figcaption>
                <span>{film.title}</span>
                <span>Directed by {film.director} · {film.release}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="section sectionTop">
        <div className="container">
          <p className="label">Now</p>
          <div className="features">
            <div className="feature">
              <span className="muted">Enrolling · starts {bootcamp.startLabel}</span>
              <h2 className="h2">{bootcamp.name}</h2>
              <p className="muted">
                Five tracks. {bootcamp.schedule}, {bootcamp.time}, {bootcamp.duration.toLowerCase()}. Early bird $
                {bootcamp.price}. Limited spots.
              </p>
              <Link href="/bootcamp" className="arrowLink">
                See the course <Icon name="arrow" size={16} />
              </Link>
            </div>
            <div className="feature">
              <span className="muted">Listen</span>
              <h2 className="h2">{music.artist}</h2>
              {music.spotify[0] && <SpotifyEmbed url={music.spotify[0]} compact title={`${music.artist} on Spotify`} />}
              <Link href="/music" className="arrowLink">
                All music <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
