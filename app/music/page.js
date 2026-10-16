import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SpotifyEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import { featuredArtists, music } from '@/lib/site';

export const metadata = {
  title: 'Music',
  description: `Listen to ${music.artist} and featured artists from the GL3 Hub — produced at Gr33nlight Studios.`,
};

export default function MusicPage() {
  const [latest, ...more] = music.spotify;

  return (
    <>
      <PageHero eyebrow="Music" title={music.artist} accent="violet">
        <p>{music.bio}</p>
        <SocialLinks links={{ spotify: music.spotify[0], instagram: music.instagram, tiktok: music.tiktok }} withLabels />
      </PageHero>

      {latest && (
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Listen now</h2>
            </div>
            <SpotifyEmbed url={latest} title={`${music.artist} on Spotify`} />
            {more.length > 0 && (
              <div className="grid grid2" style={{ marginTop: 20 }}>
                {more.map((url) => (
                  <SpotifyEmbed key={url} url={url} compact />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section sectionAlt" id="artists">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">The GL3 Hub</p>
              <h2 className="h2">Featured artists</h2>
            </div>
            <p className="muted">Artists building their careers with the GL3 Hub — recording, releasing and growing with the studio.</p>
          </div>

          {featuredArtists.length ? (
            <div className="grid grid3">
              {featuredArtists.map((a) => (
                <article key={a.name} className="card artistCard">
                  {a.photo && <img className="artistPhoto" src={a.photo} alt={a.name} loading="lazy" />}
                  <div className="artistBody">
                    {a.genre && <p className="eyebrow">{a.genre}</p>}
                    <h3 className="cardTitle">{a.name}</h3>
                    <SocialLinks links={{ spotify: a.spotify, instagram: a.instagram, tiktok: a.tiktok }} />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="emptyCard">
              <h3 className="cardTitle">Your name here.</h3>
              <p className="muted">We’re building our roster. Making music and want a home for it?</p>
              <Link href="/contact" className="btn btnPrimary">
                Join the hub
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
