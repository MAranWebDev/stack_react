// Constants
export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export const THEME_MODE_VALUES = Object.values(THEME_MODES);

// Exported types
export type THEME_MODES = (typeof THEME_MODES)[keyof typeof THEME_MODES];
export type ThemeModeValues = typeof THEME_MODE_VALUES;
