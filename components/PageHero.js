export default function PageHero({ eyebrow, title, children, accent = 'green' }) {
  return (
    <section className={`pageHero accent-${accent}`}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display">{title}</h1>
        {children && <div className="lead">{children}</div>}
      </div>
    </section>
  );
}
