import { MODES } from '@/libs/zustand/constants';
import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface Store {
  isDarkMode: boolean;
  changeMode: (mode: MODES) => void;
}

// Constants
const PERSIST_STORE_NAME = 'darkModeStore';
const PERSIST_KEYS = ['isDarkMode'] as const;

// Methods
const getIsDarkMode = (mode: MODES) => {
  if (mode === MODES.DARK) return true;
  if (mode === MODES.LIGHT) return false;

  const systemIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  return systemIsDark;
};

// Initial values
const initialIsDarkMode = getIsDarkMode(MODES.SYSTEM);

export const useDarkModeStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => ({
      isDarkMode: initialIsDarkMode,
      changeMode: (mode: MODES) =>
        set((state) => {
          state.isDarkMode = getIsDarkMode(mode);
        }),
    }),
  }),
);
