/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui']
        },
        colors: {
          'primary': {
            DEFAULT: '#3B82F6',
            dark: '#2563EB'
          }
        }
      },
    },
    plugins: [],
  }