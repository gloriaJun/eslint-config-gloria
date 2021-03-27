module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/ts',
    // './rules/jest.js',
    './rules/story.js',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
