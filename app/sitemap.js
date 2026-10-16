import { site } from '@/lib/site';

export default function sitemap() {
  return ['', '/film', '/hartless', '/music', '/bootcamp', '/rentals', '/commercial', '/contact'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : path === '/bootcamp' ? 0.9 : 0.7,
  }));
}
