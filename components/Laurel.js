// A festival laurel. Uses official artwork when `image` is set; otherwise
// draws a wreath with the status, festival name and year.

const CX = 120;
const CY = 84;
const R = 74;

function wrap(text, max = 16) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 4);
}

const pt = (deg, r = R) => {
  const t = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(t), CY - r * Math.sin(t)];
};

// Left half of the wreath: leaves from the bottom centre up to the top-left.
function Branch({ flip }) {
  const leaves = [];
  for (let i = 0; i < 10; i++) {
    const deg = 258 - i * 11.5;
    const side = i % 2 ? 1 : -1; // alternate just inside / outside the stem
    const [x, y] = pt(deg, R + side * 5);
    const rot = 180 - deg + side * 28;
    const size = 1 - i * 0.035;
    leaves.push(<ellipse key={i} cx={x} cy={y} rx={5 * size} ry={12 * size} transform={`rotate(${rot} ${x} ${y})`} />);
  }
  const [sx, sy] = pt(262);
  const [ex, ey] = pt(150);
  return (
    <g transform={flip ? `translate(${CX * 2} 0) scale(-1 1)` : undefined}>
      <path d={`M${sx} ${sy} A ${R} ${R} 0 0 1 ${ex} ${ey}`} fill="none" stroke="currentColor" strokeWidth="1.6" />
      {leaves}
    </g>
  );
}

export default function Laurel({ laurel, height = 84 }) {
  const label = `${laurel.status} — ${laurel.festival} ${laurel.year}`;
  if (laurel.image) {
    return <img src={laurel.image} alt={label} style={{ height }} className="laurelImg" loading="lazy" />;
  }
  const lines = wrap(laurel.festival);
  const lh = 15;
  const blockTop = CY - ((lines.length - 1) * lh) / 2;
  const winner = /winner/i.test(laurel.status);
  return (
    <svg viewBox="0 0 240 172" style={{ height }} role="img" aria-label={label} className={`laurelSvg ${winner ? 'laurelWinner' : ''}`}>
      <g fill="currentColor">
        <Branch />
        <Branch flip />
      </g>
      <text x={CX} y={blockTop - 20} textAnchor="middle" className="laurelStatus">
        {laurel.status.toUpperCase()}
      </text>
      {lines.map((l, i) => (
        <text key={l} x={CX} y={blockTop + i * lh + 4} textAnchor="middle" className="laurelFest">
          {l}
        </text>
      ))}
      <text x={CX} y={blockTop + (lines.length - 1) * lh + 24} textAnchor="middle" className="laurelYear">
        {laurel.year}
      </text>
    </svg>
  );
}
