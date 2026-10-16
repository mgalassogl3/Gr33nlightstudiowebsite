import '@fontsource/anton/400.css';
import '@fontsource-variable/inter';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
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
    images: [{ url: '/art/mascot.webp', width: 555, height: 900, alt: 'Gr33nlight Studios mascot' }],
    siteName: site.name,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#050807',
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
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
