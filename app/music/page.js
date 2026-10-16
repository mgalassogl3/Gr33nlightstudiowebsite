import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SpotifyEmbed } from '@/components/Embeds';
import SocialLinks from '@/components/SocialLinks';
import { banners, featuredArtists, music } from '@/lib/site';

export const metadata = {
  title: 'Music',
  description: `Listen to ${music.artist} and featured artists from the GL3 Hub — produced at Gr33nlight Studios.`,
};

const roles = [
  { id: 'artist', name: 'Artists', text: 'Record, release, grow.' },
  { id: 'performer', name: 'Performers', text: 'Get booked and get seen.' },
  { id: 'engineer', name: 'Engineers', text: 'Mix, master, produce.' },
  { id: 'manager', name: 'Managers', text: 'Run the business side.' },
];

export default function MusicPage() {
  const [latest, ...more] = music.spotify;

  return (
    <>
      <PageHero label="Music" title={music.artist} image={banners.music} position="center 30%">
        <p>{music.bio}</p>
        <SocialLinks links={{ spotify: music.spotify[0], instagram: music.instagram, tiktok: music.tiktok }} withLabels />
      </PageHero>

      {latest && (
        <section className="section">
          <div className="container portraitRow">
            {music.photo2 && <img src={music.photo2} alt={music.artist} loading="lazy" />}
            <div>
              <p className="label">Listen</p>
              <SpotifyEmbed url={latest} title={`${music.artist} on Spotify`} />
              {more.length > 0 && (
                <div className="artistGrid" style={{ marginTop: 24 }}>
                  {more.map((url) => (
                    <SpotifyEmbed key={url} url={url} compact />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {featuredArtists.length > 0 && (
        <section className="section sectionTop">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Featured artists</h2>
              <p className="muted">Artists recording, releasing and growing with the GL3 Hub.</p>
            </div>
            <div className="artistGrid">
              {featuredArtists.map((a) => (
                <article key={a.name}>
                  {a.photo && <img className="artistPhoto" src={a.photo} alt={a.name} loading="lazy" />}
                  {a.genre && <p className="label">{a.genre}</p>}
                  <h3 className="h2" style={{ marginBottom: 0 }}>
                    {a.name}
                  </h3>
                  <SocialLinks links={{ spotify: a.spotify, instagram: a.instagram, tiktok: a.tiktok }} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section sectionTop" id="hub">
        <div className="container">
          <div className="hub">
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <div>
                <p className="label">The GL3 Hub</p>
                <h2 className="h2">A home for independent music.</h2>
              </div>
              <p className="muted">The GL3 Hub connects artists, performers, engineers and managers with the studio and with each other.</p>
            </div>
            <div className="roles">
              {roles.map((r) => (
                <div key={r.id} className="role">
                  <img src={`/art/role-${r.id}.webp`} alt="" loading="lazy" />
                  <h3 className="h3">{r.name}</h3>
                  <p className="muted">{r.text}</p>
                </div>
              ))}
            </div>
            <div className="btnRow" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btnPrimary">
                Join the GL3 Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
