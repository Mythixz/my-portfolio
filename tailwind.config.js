module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-1.jpg')", // กำหนด background image
      },
    },
  },
  plugins: [],
};
