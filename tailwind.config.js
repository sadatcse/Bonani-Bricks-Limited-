// Theme-aware colour tokens: each maps to a CSS variable set in src/styles/globals.css for
// light (:root) and dark (.dark). Use them instead of fixed greys so pages work in both modes:
//   bg-canvas (page) · bg-canvas-2 · bg-surface (cards) · bg-surface-2 · text-ink (headings) · text-ink-2
//   text-body · text-muted · text-subtle · text-faint · border-line/10 (hairlines; also bg-line/5 tints)
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx}', './app/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
    },
    extend: {
      screens: { '3xl': '1920px' },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        canvas: { DEFAULT: token('canvas'), 2: token('canvas-2') },
        surface: { DEFAULT: token('surface'), 2: token('surface-2') },
        ink: { DEFAULT: token('ink'), 2: token('ink-2') },
        body: token('body'),
        muted: token('muted'),
        subtle: token('subtle'),
        faint: token('faint'),
        line: token('line'),
        // Bonani Bricks brand — taken from the logo (green "B", red wordmark, brick-red mortar)
        brand: {
          red: '#E1141B',
          'red-dark': '#B10F15',
          green: '#008001',
          'green-dark': '#00660A',
          brick: '#99282A',
          concrete: '#8A8F94',
        },
        // Dashboard accent (buttons, links inside /dashboard) — brand green
        primary: {
          50: '#effaf1',
          100: '#d8f3de',
          300: '#86d39a',
          400: '#3fb35f',
          500: '#14923b',
          600: '#0b7a2f',
          700: '#086226',
        },
        // The starter kit's public pages use `orange-*` as their accent. Re-mapped to the
        // brand's brick-red so every existing component (forms, legal pages, footer) matches the logo.
        orange: {
          50: '#fdf3f3',
          100: '#fbe4e4',
          200: '#f6c8c9',
          300: '#ee9c9e',
          400: '#f05257',
          500: '#c8232a',
          600: '#b31b21',
          700: '#93171c',
          800: '#7a181c',
          900: '#66191c',
        },
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'none' } },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-in-right': { '0%': { opacity: '0', transform: 'translateX(40px)' }, '100%': { opacity: '1', transform: 'none' } },
        'ken-burns': { '0%': { transform: 'scale(1.15)' }, '100%': { transform: 'scale(1)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'grow-x': { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.2, 0.65, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'slide-in-right': 'slide-in-right 0.9s cubic-bezier(0.2, 0.65, 0.3, 1) both',
        'ken-burns': 'ken-burns 14s ease-out both',
        float: 'float 4s ease-in-out infinite',
        'grow-x': 'grow-x 0.8s cubic-bezier(0.2, 0.65, 0.3, 1) both',
      },
      backgroundImage: {
        'brick-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='24'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.08'%3E%3Cpath d='M0 .5h48M0 12.5h48M.5 0v12M24.5 0v12M12.5 12v12M36.5 12v12'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
