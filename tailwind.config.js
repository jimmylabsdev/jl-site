/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // White-based palette
        paper:   '#FFFFFF',   // primary page background (clean white)
        paper2:  '#F7F6F3',   // alt section background (off-white)
        paper3:  '#F1EFEA',   // card / hover background
        ink:     '#0F1614',   // body text, outlines
        ink2:    '#1A2421',
        line:    '#E5E2DA',   // hairlines (lighter for white bg)
        line2:   '#D3CFC4',
        muted:   '#6B7270',
        // Brand red as primary accent (from Jimmy Labs logo)
        accent:  '#FF3434',
        accent2: '#E02020',   // hover / pressed
        warm:    '#FF3434',   // alias — kept for component compatibility
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans:    ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono:    ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.025em',
      },
      maxWidth: {
        page: '1440px',
      },
    },
  },
  plugins: [],
}
