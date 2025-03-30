import { useStarsStore } from '../store';
import { useCallback } from 'react';

export const useSelectStar = () => {
  const { selectStar } = useStarsStore();

  const handleSelect = useCallback((starId: string) => {
    selectStar(starId);
  }, []);

  return { handleSelect };
};
