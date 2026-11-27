/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          'surface-subtle': 'var(--color-surface-subtle)',
          card: 'var(--color-card)',
          border: 'var(--color-border)',
          'border-strong': 'var(--color-border-strong)',
          text: 'var(--color-text)',
          'text-muted': 'var(--color-text-muted)',
          'text-subtle': 'var(--color-text-subtle)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-light': 'var(--color-accent-light)',
          'accent-border': 'var(--color-accent-border)',
        },
        // Direct palette tokens as specified
        canvas: {
          light: '#F8F9FC',
          dark: '#0B1120',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111A2E',
        },
        ink: {
          light: '#101828',
          dark: '#F8F9FC',
        },
        indigo: {
          brand: '#4338CA',
          light: '#6366F1',
          accent: '#818CF8',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'Geist',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      maxWidth: {
        prose: '65ch',
      },
      boxShadow: {
        'theme-sm': '0 1px 2px 0 var(--color-shadow)',
        'theme-md': '0 4px 6px -1px var(--color-shadow), 0 2px 4px -2px var(--color-shadow)',
        'theme-lg': '0 10px 15px -3px var(--color-shadow), 0 4px 6px -4px var(--color-shadow)',
        'theme-xl': '0 20px 25px -5px var(--color-shadow), 0 8px 10px -6px var(--color-shadow)',
      }
    },
  },
  plugins: [],
}
