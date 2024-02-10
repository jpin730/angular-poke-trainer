/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'neutral-gray-40': '#aaaaaa',
        'primary-blue-10': '#185a7d',
        green: ' #00693C',
      },
      borderRadius: {
        '4xl': '3rem',
      },
    },
  },
}
