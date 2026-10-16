import PageHero from '@/components/PageHero';
import { ContactForm } from '@/components/Forms';
import SocialLinks from '@/components/SocialLinks';
import { site } from '@/lib/site';
import { mailtoHref, smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with Gr33nlight Studios in ${site.location}. Call or text ${site.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let’s make something.">
        <p>Projects, rentals, the boot camp, or just saying hello. The fastest way to reach us is a text.</p>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <ul className="contactList">
              <li>
                <a href={smsHref()}>
                  <strong>Text</strong>
                  <span className="muted">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={telHref}>
                  <strong>Call</strong>
                  <span className="muted">{site.phoneDisplay}</span>
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={mailtoHref()}>
                    <strong>Email</strong>
                    <span className="muted">{site.email}</span>
                  </a>
                </li>
              )}
              <li>
                <div>
                  <strong>Studio</strong>
                  <span className="muted">{site.location}</span>
                </div>
              </li>
            </ul>
            <SocialLinks links={site.socials} withLabels />
          </div>
          <div className="formWrap">
            <h2 className="h2">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
