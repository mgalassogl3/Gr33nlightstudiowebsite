import { site } from './site';

export const telHref = `tel:+1${site.phone}`;

// `?&body=` is the form both iOS and Android Messages accept.
export function smsHref(body = '') {
  return `sms:+1${site.phone}${body ? `?&body=${encodeURIComponent(body)}` : ''}`;
}

export function mailtoHref(subject = '', body = '') {
  if (!site.email) return '';
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail apps show literally.
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${site.email}${query ? `?${query}` : ''}`;
}

// Turns any Spotify share link into its embeddable player URL.
// https://open.spotify.com/intl-de/track/ID?si=… → https://open.spotify.com/embed/track/ID
export function spotifyEmbedUrl(url) {
  const match = url?.match(/open\.spotify\.com\/(?:embed\/)?(?:intl-[a-z-]+\/)?(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]+)/);
  return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0` : '';
}

// YouTube or Vimeo link → embeddable player URL.
export function videoEmbedUrl(url) {
  if (!url) return '';
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return '';
}
