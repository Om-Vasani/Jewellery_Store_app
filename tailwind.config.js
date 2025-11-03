/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#B9925F',
        muted: '#6B7280',
        ivory: '#FDF8F3'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
