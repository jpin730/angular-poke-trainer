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
        'primary-blue-30': '#2c85bc',
        'primary-blue-40': '#e7eff5',
        'primary-blue-40-2': '#9bb8d3',
        green: ' #00693C',
      },
    },
  },
}
