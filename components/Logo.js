import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Gr33nlight Studios home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="9" fill="var(--green)" />
        <path d="M12.5 9.5v13l10-6.5Z" fill="var(--bg)" />
      </svg>
      <span className="logoWord">
        GR<span className="logoAccent">33</span>NLIGHT
        <span className="logoSub">Studios</span>
      </span>
    </Link>
  );
}
