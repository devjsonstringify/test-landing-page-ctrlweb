import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import eslintPluginVue from 'eslint-plugin-vue'
import * as vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue'],
    plugins: {
      vue: eslintPluginVue,
      '@typescript-eslint': tseslint
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslintParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        vueFeatures: {
          filter: true,
          interpolationAsNonHTML: false
        }
      }
    },
    rules: {
      ...eslintPluginVue.configs['vue3-recommended'].rules,
      'vue/script-setup-uses-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
]
