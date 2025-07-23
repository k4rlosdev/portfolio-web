/** @type {import("prettier").Config} */

const config = {
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  plugins: ['prettier-plugin-astro'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none'
};

export default config;
