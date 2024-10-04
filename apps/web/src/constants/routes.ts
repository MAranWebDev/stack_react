// Constants
export const ROUTES = {
  HOME: '/',
  SAMPLE: '/sample',
  UNAUTHORIZED: '/unauthorized',
} as const;

// Exported types
export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
