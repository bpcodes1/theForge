/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Forge Brand Palette
        cherry:   '#e10600',
        rose:     '#b50500',
        void:     '#161f28',
        deep:     '#1f2e3c',
        charcoal: '#3c4b59',
        ink:      '#2a3540',
        muted:    '#7a8a95',
        confidence: '#b7c0c8',
        'forge-blue': '#669bbc',
        paper:    '#f3eedf',
        cream:    '#fff9e3',
        blush:    '#dde3e9',
        'forge-white': '#faf5f1',
        gold:     '#669bbc',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
