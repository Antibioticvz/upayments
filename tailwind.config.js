module.exports = {
  content: [
    './public/index.html',
    './src/pages/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}
