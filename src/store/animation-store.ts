import { create } from 'zustand';
import { INITIAL_DELTA } from '../constants';

type AnimationStore = {
  targetAngle: number | undefined;
  angle: number | undefined;
  delta: number;
  setTargetAngle: (angle: number) => void;
  setAngle: (angle: number) => void;
  setDelta: (delta: number) => void;
};

export const useAnimationStore = create<AnimationStore>(set => ({
  targetAngle: undefined,
  angle: undefined,
  delta: INITIAL_DELTA,
  setTargetAngle: (angle: number) => set({ targetAngle: angle }),
  setAngle: (angle: number) => set({ angle }),
  setDelta: (delta: number) => set({ delta }),
}));
