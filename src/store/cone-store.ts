import { create } from 'zustand';
import { ConePoints } from '../types.ts';

type ConeState = {
  angle: number | null;
  conePoints: ConePoints | null;
  setAngle: (angle: number) => void;
  setConePoints: (points: ConePoints) => void;
};

export const useConeStore = create<ConeState>(set => ({
  angle: null,
  setAngle: angle => set({ angle }),
  conePoints: null,
  setConePoints: points => set({ conePoints: points }),
}));
