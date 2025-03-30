import { useStarsStore, useAngleStore } from '../store';
import { getNormalizeAngle } from '../utils';
import { useMemo } from 'react';
import { CX, CY, HEIGHT, WIDTH } from '../constants';

export const useVisibleStars = () => {
  const { stars } = useStarsStore();
  const { angle, delta, isDeltaAnimationDone, isAngleAnimationDone } = useAngleStore();

  const normalizedAngle = useMemo(() => (angle ? getNormalizeAngle(angle) : 0), [angle]);

  const visibleStars = useMemo(() => {
    if (!isDeltaAnimationDone || !isAngleAnimationDone) return [];

    return Object.values(stars).filter(star => {
      if (star.selected) return false;

      const starAngle = getNormalizeAngle(
        Math.atan2(star.yPercent * HEIGHT - CY, star.xPercent * WIDTH - CX),
      );
      const angleDiff = Math.abs(getNormalizeAngle(starAngle - normalizedAngle));

      return angleDiff <= delta;
    });
  }, [stars, delta, isDeltaAnimationDone, isAngleAnimationDone, normalizedAngle]);

  return { visibleStars };
};
