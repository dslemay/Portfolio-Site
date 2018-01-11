module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/core-modules': ['react', 'prop-types']
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'prettier'],
  extends: ['airbnb', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
};
