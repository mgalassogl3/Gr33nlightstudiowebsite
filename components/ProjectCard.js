import Link from 'next/link';
import Laurel from './Laurel';

// One project on the slate: poster (or a typographic stand-in), logline, and an
// expandable story/themes block.
export default function ProjectCard({ project, laurels = [] }) {
  const p = project;
  return (
    <article className="project" id={p.slug}>
      <div className="projectPoster">
        {p.poster ? (
          <img src={p.poster} alt={`${p.title} poster`} loading="lazy" />
        ) : (
          <div className="posterType">
            <span className="spaced">{p.title}</span>
            <span className="posterMeta">{p.format}</span>
          </div>
        )}
      </div>
      <div className="projectBody">
        <p className="label">{p.genre}</p>
        <h3 className="h2" style={{ marginBottom: 8 }}>
          {p.title}
        </h3>
        <p className="muted projectFormat">{p.format}</p>
        <p className="projectLogline">{p.logline}</p>
        {laurels.length > 0 && (
          <div className="laurelsInline">
            {laurels.map((l) => (
              <Laurel key={l.id} laurel={l} height={78} />
            ))}
          </div>
        )}
        {(p.story || p.themes) && (
          <details className="projectMore">
            <summary>The story</summary>
            {p.story && <p>{p.story}</p>}
            {p.themes && (
              <p className="muted">
                <strong>Themes:</strong> {p.themes}
              </p>
            )}
            {p.comps && (
              <p className="muted">
                <strong>Comps:</strong> {p.comps}
              </p>
            )}
          </details>
        )}
        {p.note && p.slug === 'looking-for-hart' && (
          <p className="muted projectNote">
            <Link href="/hartless" className="arrowLink">
              Watch for Hartless, the proof-of-concept short →
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
