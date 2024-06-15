module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  parserOptions: { project: ['tsconfig.json'] },
  plugins: ['import'],
  ignorePatterns: ['**/*.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 1
  }
};
