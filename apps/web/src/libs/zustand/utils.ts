import { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Types
interface ApplyMiddlewaresPropsType<T> {
  store: StateCreator<T, [['zustand/immer', never]]>;
  persistStoreName: string;
  persistKeys?: readonly (keyof T)[];
}

export const applyMiddlewares = <T>({
  store,
  persistStoreName,
  persistKeys = [],
}: ApplyMiddlewaresPropsType<T>) =>
  devtools(
    persist(immer(store), {
      name: persistStoreName,
      partialize: (state) =>
        persistKeys.reduce((keys, key) => ({ ...keys, [key]: state[key] }), {}),
    }),
  );
