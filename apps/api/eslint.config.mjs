import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// .config allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist', 'drizzle.config.ts'] },

  // Extends
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier, // Needs to be at the end but before rules

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: globals.node },
    rules: {
      // Custom rules
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*', './*/*/*/*'] },
      ],
    },
  },
);
