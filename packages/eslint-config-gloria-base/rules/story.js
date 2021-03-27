module.exports = {
  plugins: [],
  extends: [],
  settings: {},
  rules: {},
  overrides: [
    {
      files: ['*.stories.js', '*.stories.jsx', '*.stories.tsx'],
      rules: {
        'import/no-internal-modules': [
          'error',
          {
            allow: ['@storybook/**'],
          },
        ],
        'import/exports-last': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              ['sibling', 'index'],
            ],
            pathGroups: [
              {
                pattern: '@storybook/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['@storybook/**'],
            'newlines-between': 'always',
            alphabetize: {
              caseInsensitive: true,
              order: 'asc',
            },
          },
        ],
      },
    },
  ],
};
