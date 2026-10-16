// Page banner. With `image` (and optional muted `video`) it becomes a
// full-bleed photo header; otherwise it's a plain typographic header.
export default function PageHero({ label, title, children, after, image, video, position = 'center' }) {
  const media = video ? (
    <video className="pageHeroMedia" src={video} poster={image} autoPlay muted loop playsInline style={{ objectPosition: position }} />
  ) : image ? (
    <img className="pageHeroMedia" src={image} alt="" style={{ objectPosition: position }} />
  ) : null;

  return (
    <section className={`pageHero ${media ? 'pageHeroImage' : ''}`}>
      {media}
      <div className="container">
        {label && <p className="label fadeIn">{label}</p>}
        <h1 className="display fadeIn fadeIn2">{title}</h1>
        {children && <div className="lead fadeIn fadeIn3">{children}</div>}
        {after && <div className="fadeIn fadeIn3">{after}</div>}
      </div>
    </section>
  );
}
