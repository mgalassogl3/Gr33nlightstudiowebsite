export default function PageHero({ label, title, children, after }) {
  return (
    <section className="pageHero">
      <div className="container">
        {label && <p className="label fadeIn">{label}</p>}
        <h1 className="display fadeIn fadeIn2">{title}</h1>
        {children && <div className="lead fadeIn fadeIn3">{children}</div>}
        {after && <div className="fadeIn fadeIn3">{after}</div>}
      </div>
    </section>
  );
}
