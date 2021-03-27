module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {},
  rules: {
    // defined the common lint rules
    /**
     * basic rules
     */
    // https://eslint.org/docs/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error'],

    /**
     * typescript
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-use-before-define': 'warn',
  },
};
