export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C5A572',
        ivory: '#FFFDF6',
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
