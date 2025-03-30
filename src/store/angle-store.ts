import { create } from 'zustand';
import { INITIAL_DELTA } from '../constants';

type AngleStore = {
  angle: number | undefined;
  delta: number;
  setAngle: (angle: number) => void;
  setDelta: (delta: number) => void;
};

export const useAngleStore = create<AngleStore>(set => ({
  angle: undefined,
  delta: INITIAL_DELTA,
  setAngle: (angle: number) => set({ angle }),
  setDelta: (delta: number) => set({ delta }),
}));
