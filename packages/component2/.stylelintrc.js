module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'indentation': 2,
    'color-no-invalid-hex': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-pseudo-element-no-unknown': null,
    'property-case': null,
    'property-no-unknown': null,
    // 'color-hex-case': 'upper',
    'declaration-block-trailing-semicolon': null,
  }
}
