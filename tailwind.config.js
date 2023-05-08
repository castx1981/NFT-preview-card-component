/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'],
      },
      colors: {
        // primary
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        // neutral
        'main-dark-blue': 'hsl(217, 54%, 11%)',
        'card-dark-blue': 'hsl(216, 50%, 16%)',
        'line-dark-blue': 'hsl(215, 32%, 27%)',
      },
      fontSize: {
        'sm': ['15px', '19px'],
        'md': ['16px', '20px'],
        'lg': ['18px', '26px'],
        'xl': ['22px', '28px'],
      },
      borderRadius: {
        'xl': '15px',
      },
      boxShadow: {
        'card': '0 25px 50px hsla(0, 0%, 0%, 0.1)',
      }
    }
  },
  plugins: [],
}
