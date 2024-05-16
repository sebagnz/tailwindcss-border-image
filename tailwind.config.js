/** @type {import('tailwindcss').Config} */
export default {
  content: ['./stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        conic: 'conic-gradient(var(--tw-gradient-stops) 0 0)',
        repeating: 'repeating-linear-gradient(45deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('./src/index')],
}
