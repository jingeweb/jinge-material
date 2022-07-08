module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['deep']
    }],
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': null,
    'no-descending-specificity': null,
    'prettier/prettier': [true, { singleQuote: true }],
  },
};
