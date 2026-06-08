/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        purple: '#820057',
        'purple-light': '#a3186f',
        'gold-light': '#dbbe7a',
        cream: '#faf8f4',
        'cream-dark': '#f3efe8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
