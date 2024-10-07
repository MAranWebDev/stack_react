import { THEME_MODES } from '@/libs/mui/constants';
import { applyMiddlewares } from '@/libs/zustand/utils';
import { create } from 'zustand';

// Types
interface Store {
  isDarkMode: boolean;
  changeThemeMode: (themeMode: THEME_MODES) => void;
}

// Constants
const PERSIST_STORE_NAME = 'darkModeStore';
const PERSIST_KEYS = ['isDarkMode'] as const;

// Methods
const getIsDarkMode = (themeMode: THEME_MODES) => {
  if (themeMode === THEME_MODES.DARK) return true;
  if (themeMode === THEME_MODES.LIGHT) return false;

  const systemThemeIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  return systemThemeIsDark;
};

export const useThemeModeStore = create<Store>()(
  applyMiddlewares({
    persistStoreName: PERSIST_STORE_NAME,
    persistKeys: PERSIST_KEYS,
    store: (set) => ({
      isDarkMode: getIsDarkMode(THEME_MODES.SYSTEM),
      changeThemeMode: (themeMode: THEME_MODES) =>
        set((state) => {
          state.isDarkMode = getIsDarkMode(themeMode);
        }),
    }),
  }),
);
