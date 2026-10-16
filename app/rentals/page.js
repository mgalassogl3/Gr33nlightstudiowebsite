import PageHero from '@/components/PageHero';
import RentalRequest from '@/components/RentalRequest';
import { banners, gear, rentalTerms, site } from '@/lib/site';
import { smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'Grip & Lighting Rentals in NJ',
  description:
    'Rent GVM SD300B Pro LED lights (15 available), C-stands, a Dana Dolly, clamps and flags from Gr33nlight Studios in East Hanover, NJ. Pick your gear and send a request in seconds.',
};

export default function RentalsPage() {
  return (
    <>
      <PageHero
        label="Rentals"
        title="Grip & lighting."
        image={banners.rentals}
        after={
          <div className="btnRow">
            <a href="#request" className="btn btnPrimary">
              Start a request
            </a>
            <a href={telHref} className="btn btnGhost">
              {site.phoneDisplay}
            </a>
          </div>
        }
      >
        <p>The gear we light our own sets with, available for yours. Add what you need, pick your dates and send the request — we’ll confirm availability and pricing.</p>
      </PageHero>

      <section className="section">
        <div className="container">
          <RentalRequest gear={gear} />
          <ul className="terms muted">
            {rentalTerms.map((t) => (
              <li key={t}>— {t}</li>
            ))}
            <li>
              — Need something not listed? <a href={smsHref('Hi Gr33nlight! Do you have this gear for rent: ')}>Text us</a>.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
