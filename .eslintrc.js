module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
