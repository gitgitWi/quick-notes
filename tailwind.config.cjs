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
        serif: ['Noto Serif KR'].concat(defaultTheme.fontFamily.serif),
        mono: ['Noto Sans Mono'].concat(defaultTheme.fontFamily.mono),
      },
    },
  },
  plugins: [],
};

module.exports = configs;
