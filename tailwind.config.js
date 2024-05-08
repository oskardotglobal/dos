module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        'menu-gradient-end': '#6E7788',
        'menu-gradient-transition': '#A2ACBD',
        'menu-gradient-start': '#012A4A',
        'primary-button': '#3E4756',
        'primary-button-hover': '#465060',
        'secondary-button': '#556176',
        'secondary-button-hover': '#5b687f'
      },
      fontFamily: {
        'majorMonoDisplay': ['MajorMonoDisplay-Regular.ttf', 'serif'],
      },
    },
  },
  plugins: [],
}