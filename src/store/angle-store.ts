import { create } from 'zustand';
import { INITIAL_DELTA } from '../constants';

type AngleStore = {
  angle: number | undefined;
  targetAngle: number | undefined;
  delta: number;
  isDeltaAnimationDone: boolean;
  isAngleAnimationDone: boolean;
  setAngle: (angle: number) => void;
  setDelta: (delta: number) => void;
  setTargetAngle: (angle: number) => void;
  setIsDeltaAnimationDone: (done: boolean) => void;
  setIsAngleAnimationDone: (done: boolean) => void;
};

export const useAngleStore = create<AngleStore>(set => ({
  angle: undefined,
  delta: INITIAL_DELTA,
  targetAngle: undefined,
  setAngle: (angle: number) => set({ angle }),
  setDelta: (delta: number) => set({ delta }),
  setTargetAngle: (angle: number) => set({ targetAngle: angle }),
  isAngleAnimationDone: false,
  isDeltaAnimationDone: false,
  setIsAngleAnimationDone: (done: boolean) => set({ isAngleAnimationDone: done }),
  setIsDeltaAnimationDone: (done: boolean) => set({ isDeltaAnimationDone: done }),
}));
