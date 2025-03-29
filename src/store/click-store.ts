import { create } from 'zustand';

type ClickState = {
  currentX: number | undefined;
  currentY: number | undefined;
  setCurrentPosition: (x: number, y: number) => void;
};

export const useClickStore = create<ClickState>(set => ({
  currentX: undefined,
  currentY: undefined,
  setCurrentPosition: (x, y) => set({ currentX: x, currentY: y }),
}));
