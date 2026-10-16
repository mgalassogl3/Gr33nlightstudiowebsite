'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Fades `.reveal` elements in as they scroll into view. Without JS the
// content simply shows (the hidden state only applies under html.js).
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');
    const els = document.querySelectorAll('.reveal:not(.isIn)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('isIn'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('isIn');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
