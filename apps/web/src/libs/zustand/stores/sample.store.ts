import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Types
interface StateType {
  bears: number;
  addBear: () => void;
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
        removeBears: () => set({ bears: 0 }),
      }),
      { name: STORE_NAME, partialize: (state) => ({ bears: state }) },
    ),
  ),
);
