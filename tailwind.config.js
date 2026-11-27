/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F2',
        surface: '#FFFFFF',
        'surface-subtle': '#F0EFEA',
        ink: {
          DEFAULT: '#18181B',
          muted: '#52525B',
          subtle: '#71717A',
        },
        violet: {
          brand: '#6246D9',
          hover: '#5238BA',
          light: '#F2EFFD',
          border: '#D8CFF7',
        },
        border: {
          subtle: '#E7E5DF',
          hover: '#D3D0C7',
        }
      },
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
