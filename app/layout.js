import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/inter';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Film, Music & Creator Studio in NJ`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#080808',
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: ['GL3 Studios', 'Greenlight Studios'],
  url: site.url,
  telephone: `+1${site.phone}`,
  address: { '@type': 'PostalAddress', addressLocality: 'East Hanover', addressRegion: 'NJ', addressCountry: 'US' },
  sameAs: Object.values(site.socials).filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
