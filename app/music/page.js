import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SpotifyEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import { featuredArtists, music } from '@/lib/site';

const roles = [
  { id: 'artist', name: 'Artists', text: 'Record, release, grow.' },
  { id: 'performer', name: 'Performers', text: 'Get booked and get seen.' },
  { id: 'engineer', name: 'Engineers', text: 'Mix, master, produce.' },
  { id: 'manager', name: 'Managers', text: 'Run the business side.' },
];

export const metadata = {
  title: 'Music',
  description: `Listen to ${music.artist} and featured artists from the GL3 Hub — produced at Gr33nlight Studios.`,
};

export default function MusicPage() {
  const [latest, ...more] = music.spotify;

  return (
    <>
      <PageHero eyebrow="Music" title={music.artist} accent="violet" art="/art/icon-headphones.webp">
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
            <>
              <div className="roles">
                {roles.map((r) => (
                  <div key={r.id} className="role reveal">
                    <img src={`/art/role-${r.id}.webp`} alt="" loading="lazy" />
                    <h3 className="cardTitle">{r.name}</h3>
                    <p className="muted">{r.text}</p>
                  </div>
                ))}
              </div>
              <div className="btnRow">
                <Link href="/contact" className="btn btnPrimary">
                  Join the GL3 Hub
                </Link>
                <span className="muted" style={{ alignSelf: 'center' }}>
                  Featured artists from the hub will show up right here.
                </span>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
