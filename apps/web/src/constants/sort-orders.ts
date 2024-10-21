// Constants
export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

// Exported types
export type SORT_ORDERS = (typeof SORT_ORDERS)[keyof typeof SORT_ORDERS];
