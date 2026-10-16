// Film-style credits: role on the left, name on the right. Entries without a
// name are skipped. Add `bio` or `photo` later if you want — they're optional.
export default function People({ people }) {
  const list = (people || []).filter((p) => p.name);
  if (!list.length) return null;
  return (
    <dl className="credits">
      {list.map((p) => (
        <div key={`${p.name}-${p.role}`} className="creditRow">
          <dt>{p.role}</dt>
          <dd>{p.name}</dd>
        </div>
      ))}
    </dl>
  );
}
