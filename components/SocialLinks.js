import Icon from './Icon';

const labels = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', spotify: 'Spotify' };

// Renders an icon button per non-empty link: { instagram: url, tiktok: url, ... }
export default function SocialLinks({ links, size = 20, withLabels = false }) {
  const entries = Object.entries(links || {}).filter(([key, url]) => url && labels[key]);
  if (!entries.length) return null;
  return (
    <ul className={`socials ${withLabels ? 'socialsLabeled' : ''}`}>
      {entries.map(([key, url]) => (
        <li key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="socialLink" aria-label={labels[key]}>
            <Icon name={key} size={size} />
            {withLabels && <span>{labels[key]}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
