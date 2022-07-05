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
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'require-jsdoc': ['off'],
    'react/prop-types': ['off'],
    'spaced-comment': ['off'],
  },
};

