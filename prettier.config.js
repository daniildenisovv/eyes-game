import * as prettierPluginTailwind from 'prettier-plugin-tailwindcss';

/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  endOfLine: 'lf',
  plugins: [prettierPluginTailwind],
};
