// Constants
export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

// Exported types
export type THEME_MODES = (typeof THEME_MODES)[keyof typeof THEME_MODES];
