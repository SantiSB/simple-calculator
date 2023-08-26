module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: { react: { version: 'detect' } },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'eslint-config-prettier',
  ],

  ignorePatterns: ['**/*.test.js', '**/*.test.jsx'],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-import'],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': ['off', { varsIgnorePattern: '^React$' }],
  },
}
