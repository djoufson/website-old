/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,razor}"],
  theme: {
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#139AD7',
          hover: '#0E7BCC',
        },
        secondary: {
          DEFAULT: '#BEB932',
          hover: '#A7A528',
        },
        white: {
          DEFAULT: '#F9FAFB',
          hover: '#F3F4F6',
        },
        black: {
          DEFAULT: '#2D2D2D',
          hover: '#3D3D3D',
        },
        selection: '#BEB932',
      },
      fontFamily: {
        special: ['Space Grotesk'],
        heading: ['Inter, sans-serif'],
      },
      lineHeight: {
        'heading-1': '1.2',
        'heading-2': '1.25',
        'heading-3': '1.3'
      },
      margin: {
        'heading-1': '1rem', // 16px
        'heading-2': '0.875rem', // 14px
        'heading-3': '0.75rem', // 12px
      },
    },
  },
  plugins: [],
}
