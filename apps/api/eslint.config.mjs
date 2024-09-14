import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// In typescript-eslint, .config allows types for the config file
export default tseslint.config(
  // Ignore
  { ignores: ['dist', 'drizzle.config.ts'] },

  //Plugins
  {
    plugins: {
      ['check-file']: checkFile,
    },
  },

  // Extends
  eslint.configs.recommended, // eslint
  ...tseslint.configs.strict, // typescript-eslint
  ...tseslint.configs.stylistic, // typescript-eslint
  eslintConfigPrettier, // prettier: Needs to be at the end

  // Base config
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: globals.node },
    rules: {
      // eslint
      'no-restricted-imports': [
        'error',
        { patterns: ['src', '../**', '@/*/*/*/*', './*/*/*/*', 'exports'] },
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
