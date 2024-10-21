// Constants
export const INPUT_KEYS = {
  ID: 'id',
  NAME: 'name',
  IS_DONE: 'isDone',
} as const;

// Exported types
export type INPUT_KEYS = (typeof INPUT_KEYS)[keyof typeof INPUT_KEYS];
