import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Gr33nlight Studios home">
      <img src="/art/logo-bulb.png" alt="" width="34" height="34" className="logoMark" />
      <span className="logoWord">
        GR<span className="logoAccent">33</span>NLIGHT
        <span className="logoSub">Studios</span>
      </span>
    </Link>
  );
}
