module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  ignorePatterns: ['/node_modules', '/android', '/ios', '/coverage'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'no-shadow': 'off',
        'no-undef': 'off',
        curly: 'off',
        'comma-dangle': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    {
      files: ['**/*.test.js', 'jest.*.js'],
      env: {
        jest: true,
      },
    },
  ],
};
