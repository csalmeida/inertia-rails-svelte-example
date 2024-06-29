/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/frontend/**/*.{js,jsx,ts,tsx,svelte,vue}',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
