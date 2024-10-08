import { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Types
interface ApplyMiddlewaresProps<TState> {
  store: StateCreator<TState, [['zustand/immer', never]]>;
  persistStoreName: string;
  persistKeys?: readonly (keyof TState)[];
}

export const applyMiddlewares = <TState>({
  store,
  persistStoreName,
  persistKeys = [],
}: ApplyMiddlewaresProps<TState>) =>
  devtools(
    persist(immer(store), {
      name: persistStoreName,
      partialize: (state) =>
        persistKeys.reduce((keys, key) => ({ ...keys, [key]: state[key] }), {}),
    }),
  );
