import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Types
type BearsType = number;

interface StoreType {
  bears: BearsType;
  addBear: () => void;
  addBearBy: (by: BearsType) => void;
  removeBears: () => void;
}

// Constants
const STORE_NAME = 'sampleStore';

// Store
const store: StateCreator<StoreType> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  addBearBy: (by: BearsType) => set((state) => ({ bears: state.bears + by })),
  removeBears: () => set({ bears: 0 }),
});

export const useSampleStore = create<StoreType>()(
  devtools(
    persist(immer(store), {
      name: STORE_NAME,
      partialize: (state) => ({ bears: state.bears }),
    }),
  ),
);
