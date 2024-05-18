/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'mono': ['"IBM Plex Mono"', 'monospace'],
      'serif': ['"IBM Plex Serif"', 'serif'],
      'sans': ['"IBM Plex Sans"', 'sans-serif'],
      'display': ['"Red Hat Display"', 'sans-serif'],
      'brand': ['"Unica One"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

