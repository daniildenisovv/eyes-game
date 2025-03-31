import { useStarsStore, useAngleStore } from '../store';
import { getNormalizeAngle } from '../utils';
import { useMemo } from 'react';
import { useLayoutVars } from './use-layout-vars';

export const useVisibleStars = () => {
  const { stars } = useStarsStore();
  const { HEIGHT, CY, WIDTH, CX } = useLayoutVars();
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
  }, [
    stars,
    delta,
    isDeltaAnimationDone,
    isAngleAnimationDone,
    normalizedAngle,
    HEIGHT,
    CY,
    WIDTH,
    CX,
  ]);

  return { visibleStars };
};
