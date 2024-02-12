/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'neutral-black-50': '#454545',
        'neutral-gray-10': '#f2f2f2',
        'neutral-gray-40': '#aaaaaa',
        'primary-blue-00': '#01426a',
        'primary-blue-10': '#185a7d',
        'primary-blue-30': '#2c85bc',
        'primary-blue-40-2': '#9bb8d3',
        'primary-blue-40': '#e7eff5',
        'primary-orange-20': '#ffc600',
        green: ' #00693C',
      },
    },
  },
}
