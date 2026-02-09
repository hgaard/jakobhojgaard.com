/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-hover': '#F7F7F5',
        border: '#E8E6E1',
        'text-primary': '#1A1918',
        'text-secondary': '#4A4845',
        'text-muted': '#8A8783',
        accent: '#B45309',
        'accent-subtle': '#FEF3C7',
        'accent-glow': '#F59E0B',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
