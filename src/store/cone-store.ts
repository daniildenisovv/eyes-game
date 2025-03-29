import { create } from 'zustand';
import { ConePoints } from '../types';

type ConeState = {
  conePoints: ConePoints | null;
  setConePoints: (points: ConePoints) => void;
};

export const useConeStore = create<ConeState>(set => ({
  conePoints: null,
  setConePoints: points => set({ conePoints: points }),
}));
