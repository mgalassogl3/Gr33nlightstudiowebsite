import Link from 'next/link';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import { navItems } from '@/lib/nav';
import { site } from '@/lib/site';
import { mailtoHref, smsHref, telHref } from '@/lib/links';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footerCta">
          <Link href="/contact">Let’s make something →</Link>
        </p>
        <div className="footerGrid">
          <div>
            <Logo />
            <p className="muted footerTag">{site.tagline}</p>
            <SocialLinks links={site.socials} />
          </div>
          <nav aria-label="Footer">
            <h2 className="footerHead">Studio</h2>
            <ul className="footerList">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="footerHead">Contact</h2>
            <ul className="footerList">
              <li>
                <a href={telHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={smsHref()}>Text us</a>
              </li>
              {site.email && (
                <li>
                  <a href={mailtoHref()}>{site.email}</a>
                </li>
              )}
              <li className="muted">{site.location}</li>
            </ul>
          </div>
        </div>
        <div className="footerBottom muted">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>GL3 · East Hanover, New Jersey</span>
        </div>
      </div>
    </footer>
  );
}
