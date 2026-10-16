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

// A self-hosted mp4 with native controls (used when there's no YouTube/Vimeo link).
export function VideoFile({ src, poster, title, vertical = false, loop = false }) {
  if (!src) return null;
  return (
    <div className={`video ${vertical ? 'videoVertical' : ''}`}>
      <video
        src={src}
        poster={poster}
        title={title}
        controls={!loop}
        autoPlay={loop}
        muted={loop}
        loop={loop}
        playsInline
        preload="none"
      />
    </div>
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
