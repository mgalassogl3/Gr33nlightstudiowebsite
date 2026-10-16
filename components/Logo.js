import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Gr33nlight Studios home">
      <img src="/images/logo-bulb.png" alt="" width="22" height="22" className="logoMark" />
      <span>
        GR<span className="logoAccent">33</span>NLIGHT
      </span>
      <span className="logoSub">Studios</span>
    </Link>
  );
}
