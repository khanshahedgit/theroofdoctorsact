# The Roof Doctors ACT Website

## What I’ll build
- A single premium, responsive page in the exact requested section order: cinematic hero, moving project imagery, services, video carousel, testimonial, about, before/after comparison, contact call-to-action, and footer.
- A restrained architectural visual system using only the supplied blue, white, pale background, dark text, and gold palette, with sophisticated typography, subtle grain, refined borders, and purposeful motion.
- Reusable section and interaction components so footage, imagery, reels, testimonials, and comparison photos can be replaced independently later.

## Interactions
- A full-viewport sticky hero whose roofing footage crossfades through real business-focused chapters as the page scrolls, with progress markers and reduced-motion support.
- A seamless masked roofing image rail with pause/hover treatment.
- An editorial numbered service list rather than a generic card grid.
- A three-slot mouse/touch draggable video carousel with clear replacement states and no invented Reel links.
- A scroll-driven testimonial stage built to accept more reviews, currently showing only Adnan Uddin’s supplied review.
- A touch/mouse before-and-after divider using clearly labelled replacement imagery.

## Content and contact
- Use only the supplied business name, tagline, six services, service areas, experience statement, phone number, email, WhatsApp number, and Messenger link.
- Wire Call, Email, WhatsApp, and Messenger actions to the supplied details.
- Add page-specific search and sharing metadata without inventing claims.

## Technical approach
- Keep the current React, Vite, TypeScript, TanStack Start, and Tailwind setup.
- Add Framer Motion only because it is explicitly required; reuse the installed Lucide icons and existing button structure.
- Store all visual tokens in the global design system and keep feature code free of hardcoded colours.
- Use locally stored, optimized roofing media where licensing and access allow; otherwise use visibly replaceable media slots rather than false project claims.
- Lazy-load below-the-fold media, use transform/opacity animation, respect reduced-motion settings, and prevent page-level horizontal overflow.

## Verification
- Check desktop and mobile layouts, drag/swipe behavior, comparison control, contact links, scroll progression, overflow, media loading, and browser errors.
