module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  overrides: [
    {
      files: '*.php',
      options: {
        tabWidth: 4,
      },
    },
  ],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'never',
}
