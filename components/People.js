// Cast & crew grid. Entries without a name are skipped.
export default function People({ people, showRoleAs = 'role' }) {
  const list = (people || []).filter((p) => p.name);
  if (!list.length) return null;
  return (
    <ul className="people">
      {list.map((p) => (
        <li key={`${p.name}-${p.role}`} className="person">
          {p.photo ? (
            <img src={p.photo} alt={p.name} className="personPhoto" loading="lazy" />
          ) : (
            <span className="personPhoto personInitials" aria-hidden="true">
              {p.name
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')}
            </span>
          )}
          <div>
            <h3 className="h3">{p.name}</h3>
            {p[showRoleAs] && <p className="personRole">{p[showRoleAs]}</p>}
            {p.bio && <p className="muted personBio">{p.bio}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
