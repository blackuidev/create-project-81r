/** @type {import('tailwindcss').Config} */
export default {
  // Updated content paths for TSX/TS files, including the new component structure
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4F46E5',
        'secondary-indigo': '#6366F1',
      },
      // Adding a custom font for a more 'advanced' feel
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
