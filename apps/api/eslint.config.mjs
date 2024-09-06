import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// .config allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist'] },

  // Extends
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier, // Needs to be at the end but before rules

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: globals.node },
    rules: {
      // Custom rules
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*'] },
      ],
    },
  },
);
