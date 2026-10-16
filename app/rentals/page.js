import PageHero from '@/components/PageHero';
import RentalRequest from '@/components/RentalRequest';
import Icon from '@/components/Icon';
import { gear, rentalTerms, site } from '@/lib/site';
import { smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'Grip & Lighting Rentals in NJ',
  description:
    'Rent C-stands, GVM 300B LED lights, a Dana Dolly, clamps and flags from Gr33nlight Studios in East Hanover, NJ. Pick your gear and send a request in seconds.',
};

export default function RentalsPage() {
  return (
    <>
      <PageHero eyebrow="Rentals" title="Grip & lighting, ready to roll." accent="orange">
        <p>Pro gear for your shoot, out of East Hanover, NJ. Add what you need, pick your dates, and send the request — we’ll confirm availability and pricing.</p>
        <div className="btnRow">
          <a href="#request" className="btn btnPrimary">
            Start a request
          </a>
          <a href={telHref} className="btn btnGhost">
            <Icon name="call" /> {site.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <RentalRequest gear={gear} />
          <ul className="terms muted">
            {rentalTerms.map((t) => (
              <li key={t}>
                <Icon name="check" size={16} /> {t}
              </li>
            ))}
          </ul>
          <p className="muted" style={{ marginTop: 20 }}>
            Need something not listed? <a href={smsHref('Hi Gr33nlight! Do you have this gear for rent: ')}>Text us</a> — we may have it or know who does.
          </p>
        </div>
      </section>
    </>
  );
}
