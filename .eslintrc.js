module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@vue/typescript',
    'plugin:vue/essential',
  ],
  // add your custom rules here
  rules: {
    'no-useless-constructor': 0,
    'vue/no-unused-vars': 1,
    'vue/require-component-is': 0,
    'vue/no-v-html': 1
  }
}
