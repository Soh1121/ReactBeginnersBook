module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
    'selector-class-pattern': '([a-zA-Z]+-*)+',
    'keyframes-name-pattern': '([a-zA-Z]+-*)+',
  },
};
