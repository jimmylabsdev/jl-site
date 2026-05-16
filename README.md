# Jimmy Labs — Website

Production-ready marketing site for **Jimmy Labs**, a boutique operational AI consultancy.
Built with **Vite + React + TailwindCSS**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

Node 18+ recommended.

---

## Project structure

```
jimmy-labs/
├── index.html                  # Vite entry, SEO meta, Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Composes all sections
    ├── styles/
    │   └── index.css           # Tailwind + custom utilities + animations
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver-based reveal/draw
    ├── components/
    │   ├── Logo.jsx
    │   ├── SectionHeader.jsx
    │   ├── CaseStudyCard.jsx
    │   ├── Field.jsx           # Floating-label form field
    │   └── diagrams/
    │       ├── primitives.jsx  # Node, Box, Step, DiagramFrame, ArrowMarker
    │       ├── HeroDiagram.jsx
    │       ├── LegalDiagram.jsx
    │       ├── AccountingDiagram.jsx
    │       └── BigArchDiagram.jsx
    └── sections/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── Services.jsx
        ├── CaseStudies.jsx
        ├── Architecture.jsx
        ├── Technology.jsx
        ├── About.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

---

## Design system

Defined in `tailwind.config.js` and `src/styles/index.css`.

**Palette**

| Token       | Hex      | Use                              |
|-------------|----------|----------------------------------|
| `paper`     | `#FFFFFF`| Page background (white)          |
| `paper2`    | `#F7F6F3`| Alt section background (off-white)|
| `paper3`    | `#F1EFEA`| Card / hover background          |
| `ink`       | `#0F1614`| Body text, primary CTA, outlines |
| `accent`    | `#FF3434`| Brand red (from Jimmy Labs logo) |
| `accent2`   | `#E02020`| Hover / pressed                  |
| `muted`     | `#6B7270`| Captions, meta                   |
| `line`      | `#E5E2DA`| Hairlines, dividers              |

**Typography**

- **Fraunces** — display serif, used for headlines and italics
- **IBM Plex Sans** — body
- **IBM Plex Mono** — section numbers, captions, meta strings

All loaded via Google Fonts in `index.html`.

**Motion**

- `.reveal` — fade + translate on intersection (page load + scroll)
- `.draw-path` — SVG stroke-dash draw on scroll-in (architectural diagrams)
- `.pop` — scaled pop-in for diagram nodes
- `.marquee-track` — horizontal scrolling positioning strip

Trigger with `useReveal()` in `App.jsx`.

---

## Editing content

| Content                | File                                       |
|------------------------|--------------------------------------------|
| Hero copy & metrics    | `src/sections/Hero.jsx`                    |
| Positioning marquee    | `src/sections/Marquee.jsx`                 |
| Services (8 cards)     | `src/sections/Services.jsx` (`services` array) |
| Case studies + metrics | `src/sections/CaseStudies.jsx` (`studies` array) |
| Architecture layers    | `src/sections/Architecture.jsx` (`layers` array) |
| Technology grid        | `src/sections/Technology.jsx` (`tech` array) |
| About cards            | `src/sections/About.jsx` (`cards` array)   |
| Contact info           | `src/sections/CTA.jsx`                     |
| Footer                 | `src/sections/Footer.jsx`                  |

Diagrams (SVG, not images) live in `src/components/diagrams/`. Edit the node coordinates
directly inside each component.

---

## Wiring the contact form

`src/sections/CTA.jsx` currently sets `submitted: true` on submit without sending anything.
Wire `onSubmit` to your backend, Formspree, Resend, or a simple `mailto:` handler.

Example using a webhook (Make / Zapier / custom):

```jsx
const onSubmit = async (e) => {
  e.preventDefault()
  if (!form.email || !form.name) return
  await fetch('https://hook.your-endpoint.com/jimmy-labs-leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

---

## Deployment

Any static host works after `npm run build`:

- **Vercel** — `vercel` → defaults work
- **Netlify** — build command `npm run build`, publish dir `dist`
- **Cloudflare Pages** — build command `npm run build`, output `dist`
- **GitHub Pages** — set `base: '/repo-name/'` in `vite.config.js` first

---

## SEO

Meta tags live in `index.html`. Update `og:url`, add a real OG image, and consider adding
`sitemap.xml` and `robots.txt` to `public/` before launch.

---

© Jimmy Labs · Building smarter systems for the way business works.
