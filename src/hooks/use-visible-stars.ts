import { useStarsStore } from '../store';
import { useMemo } from 'react';

export const useVisibleStars = () => {
  const { stars } = useStarsStore();

  const visibleStars = useMemo(() => {
    return Object.values(stars).filter(star => !star.selected);
  }, [stars]);

  return { visibleStars };
};
