// Constants
export const ROUTES = {
  TRPC_API: '/trpc',
} as const;

// Exported types
export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
