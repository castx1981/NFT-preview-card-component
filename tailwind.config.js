/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        // primary
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        // neutral
        'main-dark-blue': 'hsl(217, 54%, 11%)',
        'card-dark-blue': 'hsl(216, 50%, 16%)',
        'line-dark-blue': 'hsl(215, 32%, 27%)',
      },
      backgroundImage: {
        'view': "url('images/icon-view.svg')"
      },
      boxShadow: {
        'card': '0 44px 60px -5px hsl(217, 88%, 4%)',
      }
    }
  },
  plugins: [],
}
