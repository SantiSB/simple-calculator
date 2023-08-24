module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: { react: { version: 'detect' } },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'eslint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['**/*.test.js', '**/*.test.jsx'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
};
