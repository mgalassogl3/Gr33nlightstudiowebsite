export default function PageHero({ eyebrow, title, children, accent = 'green', art, artAlt = '' }) {
  return (
    <section className={`pageHero accent-${accent} ${art ? 'pageHeroArt' : ''}`}>
      <div className="container pageHeroGrid">
        <div>
          {eyebrow && <p className="eyebrow rise">{eyebrow}</p>}
          <h1 className="display rise rise2">{title}</h1>
          {children && <div className="lead rise rise3">{children}</div>}
        </div>
        {art && <img src={art} alt={artAlt} className="heroArt float" loading="eager" />}
      </div>
    </section>
  );
}
