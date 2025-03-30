import { StarsMap } from '../types';
import { create } from 'zustand';
import { STARS } from '../constants';

type StarsState = {
  stars: StarsMap;
  selectStar: (id: string) => void;
};

export const useStarsStore = create<StarsState>((set, get) => ({
  stars: STARS,
  selectStar: id => {
    const { stars } = get();
    if (!stars[id] || stars[id].selected) return;

    const updatedStars = {
      ...stars,
      [id]: { ...stars[id], selected: true },
    };

    set({
      stars: updatedStars,
    });
  },
}));
