/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx,html}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
