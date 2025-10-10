/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      primary: '#1d4ed8',
      'primary-dark': '#1e40af',
      secondary: '#6b7280',
      'secondary-dark': '#4b5563',
      accent: '#10b981',
      'accent-dark': '#059669',
    },
    },
  },
  plugins: [],
};
