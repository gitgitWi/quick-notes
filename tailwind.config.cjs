const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */
const configs = {
  content: ['./src/**/*.{astro,html,md,mdx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard'].concat(
          defaultTheme.fontFamily.sans
        ),
      },
    },
  },
  plugins: [],
};

module.exports = configs;
