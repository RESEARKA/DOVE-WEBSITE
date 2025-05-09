/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
  ],
  theme: {
    extend: {
      colors: {
        'dove-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'dove-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dove-gray.700'),
            a: {
              color: theme('colors.dove-blue.600'),
              '&:hover': {
                color: theme('colors.dove-blue.800'),
              },
            },
            h1: {
              color: theme('colors.dove-gray.900'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.dove-gray.900'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.dove-gray.900'),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}
