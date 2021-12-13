const rules = {
  'indent': ['error', 2, { 'SwitchCase': 1 }],
};

const common = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2021: true,
    browser: true,
    node: false,
  },
};

module.exports = {
  root: true,
  overrides: [
    {
      ...common,
      extends: ['eslint:recommended'],
      rules,
      files: ['**/*.js'],
    },
    {
      ...common,
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      rules,
    },
  ],
};
