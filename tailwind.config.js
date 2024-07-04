/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-txt': '#344054',
        description: '#888FA7',
        disabled: '#F2F2F2',
        'disabled-txt': '#BFC2CC',
      },
    },
  },
  plugins: [],
};
