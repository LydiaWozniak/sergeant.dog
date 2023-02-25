module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 120
};
