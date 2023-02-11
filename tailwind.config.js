/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            /* Main font is fredok-one */
            'alfa-slab-on': ['"Alfa Slab On"', 'cursive'],
            'fredok-one': ['"Fredoka One"', 'cursive'],
            'nerko-one': ['"Nerko One"', 'cursive'],
            'pacifico': ['"Pacifico"', 'cursive'],
            'pt-serif': ['"PT Serif Caption"', 'serif'],
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui")
  ],
  variants: {
    scrollbar: ['rounded']
  }
}