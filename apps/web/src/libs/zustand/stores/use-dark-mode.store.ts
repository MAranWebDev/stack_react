import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface Store {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Constants
const PERSIST_STORE_NAME = 'darkModeStore';
const PERSIST_KEYS = ['isDarkMode'] as const;

export const useDarkModeStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => ({
      isDarkMode: false,
      toggleDarkMode: () =>
        set((state) => {
          state.isDarkMode = !state.isDarkMode;
        }),
    }),
  }),
);
