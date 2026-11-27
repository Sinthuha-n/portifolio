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
          card: 'var(--color-card)',
          border: 'var(--color-border)',
          'border-strong': 'var(--color-border-strong)',
          text: 'var(--color-text)',
          'text-muted': 'var(--color-text-muted)',
          'text-subtle': 'var(--color-text-subtle)',
          heading: 'var(--color-heading)',
          link: 'var(--color-link)',
          'link-hover': 'var(--color-link-hover)',
          'btn-primary-bg': 'var(--color-btn-primary-bg)',
          'btn-primary-text': 'var(--color-btn-primary-text)',
          'btn-secondary-bg': 'var(--color-btn-secondary-bg)',
          'btn-secondary-text': 'var(--color-btn-secondary-text)',
          'btn-secondary-border': 'var(--color-btn-secondary-border)',
          focus: 'var(--color-focus)',
        },
        purple: {
          heading: '#5B21B6',
          dark: '#EDE9FE',
          accent: '#7C3AED',
        },
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
      boxShadow: {
        'theme-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'theme-md': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'theme-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
