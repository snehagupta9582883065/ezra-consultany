export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2540',
          light: '#1E3A59',
          dark: '#041324'
        },
        secondary: {
          DEFAULT: '#C9A96E',
          light: '#D6BE92',
          dark: '#B28E4F'
        },
        accent: {
          DEFAULT: '#3D74B8',
          light: '#5F8DCB',
          dark: '#2B5A95'
        },
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
        gray: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '120': '30rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }
    },
  },
  plugins: [],
}