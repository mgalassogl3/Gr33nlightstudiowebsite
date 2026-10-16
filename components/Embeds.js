import { spotifyEmbedUrl, videoEmbedUrl } from '@/lib/links';

export function SpotifyEmbed({ url, compact = false, title = 'Spotify player' }) {
  const src = spotifyEmbedUrl(url);
  if (!src) return null;
  // Single tracks get the short player; albums/playlists/artists get the tall one.
  const tall = !compact && !/\/embed\/track\//.test(src);
  return (
    <iframe
      className="spotify"
      src={src}
      title={title}
      height={tall ? 352 : 152}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}

export function VideoEmbed({ url, title }) {
  const src = videoEmbedUrl(url);
  if (!src) return null;
  return (
    <div className="video">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
