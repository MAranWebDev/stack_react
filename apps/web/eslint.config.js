import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// .config allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist'] },

  //Plugins
  { plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh } },

  // Extends
  ...pluginQuery.configs['flat/recommended'],
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier, // Needs to be at the end but before rules

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },

    rules: {
      // Vite default rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Custom rules
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*', './*/*/*/*'] },
      ],
    },
  },
);
