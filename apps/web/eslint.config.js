import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// "tseslint.config" allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist'] },

  // Plugins
  {
    plugins: {
      ['react-hooks']: reactHooks,
      ['react-refresh']: reactRefresh,
      ['check-file']: checkFile,
    },
  },

  // Extends
  eslint.configs.recommended, // "eslint"
  ...tseslint.configs.strict, // "typescript-eslint"
  ...tseslint.configs.stylistic, // "typescript-eslint"
  ...pluginQuery.configs['flat/recommended'], // "react-query"
  eslintConfigPrettier, // "prettier" needs to be at the end

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    rules: {
      // "react-hooks"
      ...reactHooks.configs.recommended.rules,

      // "react-refresh"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // "eslint"
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*', './*/*/*/*'] },
      ],

      // "check-file"
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.{ts,tsx}': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': [
        'error',
        { 'src/**/!(__tests__)': 'KEBAB_CASE' },
      ],
    },
  },
);
