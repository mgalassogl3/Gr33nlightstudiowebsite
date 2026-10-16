const words = ['Film', 'Music', 'Boot Camp', 'Rentals', 'Commercial', 'Hartless 2027', 'Marcus Glass', 'GL3 Hub'];

export default function Ticker() {
  // Rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const row = (hidden) => (
    <ul className="tickerRow" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w}>
          {w}
          <img src="/art/logo-bulb.png" alt="" width="22" height="22" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="tickerWrap">
      <div className="ticker">
        <div className="tickerTrack">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
