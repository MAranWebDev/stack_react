// Constants
export const MODES = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

// Exported types
export type MODES = (typeof MODES)[keyof typeof MODES];
