# Gr33nlight Studios website

The site for Gr33nlight Studios (GL3): film, music, the GL3 Content Boot Camp, gear rentals and commercial video.
Built with Next.js and designed to be hosted on Vercel.

## Pages

| URL | What's there |
| --- | --- |
| `/` | Home: hero, "Now at GL3", everything-we-do tiles, Hartless, music, boot camp call-out |
| `/film` | Film slate (Hartless — 2027) |
| `/music` | Marcus Glass Spotify players, socials, and GL3 Hub featured artists |
| `/bootcamp` | Tracks, schedule, early bird price, sign-up form, FAQ |
| `/rentals` | Gear catalog with a pick-your-gear request form |
| `/commercial` | Services, featured work, clients, testimonials, booking form |
| `/contact` | Text / call / email and a general message form |

## Updating content

Nearly everything lives in **`lib/site.js`**. Edit it and redeploy. Anything left empty (`''` or `[]`) is hidden on the site.

- **Socials:** fill in `site.socials` (Instagram, TikTok, YouTube) and `music.instagram` / `music.tiktok`.
- **Email:** set `site.email` to show "send by email" buttons next to "send by text".
- **New song:** in Spotify, Share → Copy link, then paste it into `music.spotify`. The first link is the big player.
- **Featured artist:** add an entry to `featuredArtists`. Put their photo in `public/images/`.
- **Hartless:** add `logline`, `poster` (e.g. `/images/hartless-poster.jpg`) and a YouTube/Vimeo `trailer` link.
- **Gear:** edit `gear`. Set `rate` to a number to show a day rate, or leave `null` for "Rate on request". Add photos in `public/images/`.
- **Commercial:** add `clients`, `projects` (YouTube/Vimeo links) and real `testimonials`.
- **Boot camp:** dates, price and tracks are in `bootcamp`. Set `paymentLink` (Venmo, Cash App, PayPal.me, Square or a Stripe Payment Link) to show a "Pay $297" button after someone signs up.

## Artwork

The site is intentionally minimal: black, off-white type and one green accent, led by real imagery.

- **Home opening shot:** set `homeHero.image` (a still) and/or `homeHero.video` (a short muted mp4 loop)
  in `lib/site.js`. Until then the Hartless title sits on a soft key light.
- **Photos** go in `public/images/`, video in `public/video/`.
- `public/art/` holds the four GL3 Hub characters, used only in the "GL3 Hub" section of the Music page.

## How the forms work

There's no server or paid form service. Every form (boot camp sign-up, rental request, booking, contact)
opens the visitor's Messages app — or Mail, if `site.email` is set — with all their details already
written out and addressed to the studio. They hit send, and it lands in your texts or inbox.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Put it live (Vercel)

1. Sign in at https://vercel.com with GitHub and **Add New → Project**, then import this repository. Defaults are fine.
2. In the project's **Settings → Domains**, add `gr33nlight.com` and `www.gr33nlight.com`.
3. Vercel shows the DNS records to set. In Wix: **Domains → gr33nlight.com → Manage DNS records**, then
   update the `A` record (root) and `CNAME` (`www`) to the values Vercel gives you.
   If the domain was bought through Wix you can keep it registered there; only the DNS records change.
4. Once DNS updates (minutes to a few hours), the new site is live. Every push to the main branch redeploys it.
