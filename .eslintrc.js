module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'require-jsdoc': ['off'],
    'react/prop-types': ['off'],
    'spaced-comment': ['off'],
    'prettier/prettier': ['error', {}, {usePrettierrc: true}],
    'react/no-children-prop': ['off'],
    'indent': ['off'],
    'quotes': ['off'],
    'max-len': ['off'],
    'operator-linebreak': [
      'error',
      'after',
      {overrides: {'?': 'before', ':': 'before'}},
    ],
  },
};
