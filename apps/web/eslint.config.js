import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// In typescript-eslint, .config allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist'] },

  //Plugins
  {
    plugins: {
      ['react-hooks']: reactHooks,
      ['react-refresh']: reactRefresh,
      ['check-file']: checkFile,
    },
  },

  // Extends
  ...pluginQuery.configs['flat/recommended'],
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier, // Needs to be at the end but before rules

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // react-hooks
      ...reactHooks.configs.recommended.rules,

      // react-refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // native
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*', './*/*/*/*'] },
      ],

      // check-file
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
