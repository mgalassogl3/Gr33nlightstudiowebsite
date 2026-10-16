import PageHero from '@/components/PageHero';
import RentalRequest from '@/components/RentalRequest';
import { banners, gear, rentalDelivery, rentalDiscounts, rentalTerms, site } from '@/lib/site';
import { smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'Lighting, Grip & Camera Rentals in NJ',
  description:
    'Rent GVM SD300B Pro LED lights (15 available), a Lumix GX8 4K camera kit, C-stands and shorty C-stands, a Dana Dolly, a flag kit, A-clamps, sandbags and apple boxes in East Hanover, NJ. Students 50% off, first rental 25% off.',
};

export default function RentalsPage() {
  return (
    <>
      <PageHero
        label="Rentals"
        title="Lighting, grip & camera."
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
        <p>
          The gear we light our own sets with, available for yours. Students get {rentalDiscounts.student.percent}% off, and your first
          rental is {rentalDiscounts.firstTime.percent}% off — students get both.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <ul className="deals">
            <li>
              <strong>{rentalDiscounts.student.percent}% off</strong>
              <span>{rentalDiscounts.student.label}</span>
              <p className="muted">{rentalDiscounts.student.note}</p>
            </li>
            <li>
              <strong>{rentalDiscounts.firstTime.percent}% off</strong>
              <span>{rentalDiscounts.firstTime.label}</span>
              <p className="muted">{rentalDiscounts.firstTime.note}</p>
            </li>
            <li>
              <strong>Stack them</strong>
              <span>Students save on their first rental twice</span>
              <p className="muted">50% off, then another 25% off.</p>
            </li>
          </ul>
          <RentalRequest gear={gear} discounts={rentalDiscounts} delivery={rentalDelivery} />
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
