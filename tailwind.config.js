module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './index.html'
  ],
  // darkMode: 'class',
  theme: {
    screens: {
      sm: '800px',
      md: '1200px',
      lg: '1600px',
      xl: '1920px',
      '2xl': '2400px',
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
};
