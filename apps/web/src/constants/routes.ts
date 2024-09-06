type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];

export const ROUTES = {
  HOME: '/',
  SAMPLE: '/sample',
  UNAUTHORIZED: '/unauthorized',
} as const;
