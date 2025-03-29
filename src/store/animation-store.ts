import { create } from 'zustand';
import { INITIAL_DELTA } from '../constants';

type AnimationStore = {
  angle: number | undefined;
  delta: number;
  setAngle: (angle: number) => void;
  setDelta: (delta: number) => void;
};

export const useAnimationStore = create<AnimationStore>(set => ({
  angle: undefined,
  delta: INITIAL_DELTA,
  setAngle: (angle: number) => set({ angle }),
  setDelta: (delta: number) => set({ delta }),
}));
