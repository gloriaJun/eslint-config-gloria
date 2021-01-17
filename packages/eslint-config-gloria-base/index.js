module.exports = {
  extends: ['./rules/base', './rules/import', './rules/ts'].map(
    require.resolve,
  ),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
