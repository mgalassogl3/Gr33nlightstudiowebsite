import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pageHero">
      <div className="container">
        <p className="eyebrow">404 — Cut!</p>
        <h1 className="display">That scene didn’t make the final edit.</h1>
        <div className="btnRow">
          <Link href="/" className="btn btnPrimary">
            Back to the studio
          </Link>
        </div>
      </div>
    </section>
  );
}
