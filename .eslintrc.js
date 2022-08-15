/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['prettier', 'plugin:prettier/standart'],
  rules: {},
  ignorePatterns: ['src/templates/**']
}
