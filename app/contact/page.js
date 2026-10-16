import PageHero from '@/components/PageHero';
import { ContactForm } from '@/components/Forms';
import SocialLinks from '@/components/SocialLinks';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';
import { mailtoHref, smsHref, telHref } from '@/lib/links';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with Gr33nlight Studios in ${site.location}. Call or text ${site.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s make something." art="/art/mascot-flex.webp">
        <p>Projects, rentals, the boot camp, or just saying hi — the fastest way to reach us is a text.</p>
        <SocialLinks links={site.socials} withLabels />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="contactCards">
            <a href={smsHref()} className="contactCard">
              <Icon name="chat" size={26} />
              <strong>Text</strong>
              <span className="muted">{site.phoneDisplay}</span>
            </a>
            <a href={telHref} className="contactCard">
              <Icon name="call" size={26} />
              <strong>Call</strong>
              <span className="muted">{site.phoneDisplay}</span>
            </a>
            {site.email ? (
              <a href={mailtoHref()} className="contactCard">
                <Icon name="mail" size={26} />
                <strong>Email</strong>
                <span className="muted">{site.email}</span>
              </a>
            ) : (
              <div className="contactCard">
                <Icon name="pin" size={26} />
                <strong>Studio</strong>
                <span className="muted">{site.location}</span>
              </div>
            )}
          </div>

          <div className="panel">
            <h2 className="h2">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
