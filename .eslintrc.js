module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',

    // these need to be at the end
    'prettier',
    'prettier/react',
  ],
  settings: {
    // Ensure you're defining the correct React version here
    react: { version: 'detect' },
  },
  parserOptions: {
    // Enable JSX support
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
  },
}
