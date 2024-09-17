import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Types
type BearsType = number;

interface StateType {
  bears: BearsType;
  addBear: () => void;
  addBearBy: (by: BearsType) => void;
  removeBears: () => void;
}

// Constants
const STORE_NAME = 'sampleStore';

export const useSampleStore = create<StateType>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        addBear: () => set((state) => ({ bears: state.bears + 1 })),
        addBearBy: (by: number) =>
          set((state) => ({ bears: state.bears + by })),
        removeBears: () => set({ bears: 0 }),
      }),
      {
        name: STORE_NAME,
        partialize: (state) => ({ bears: state.bears }),
      },
    ),
  ),
);
