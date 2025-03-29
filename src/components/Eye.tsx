import { useEffect, useRef, useState } from 'react';
import { CIRCLE_RADIUS, CX, CY, PUPIL_RADIUS } from '../constants.ts';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { Point } from '../types.ts';
import { computePupilPositionTowardTarget } from '../utils/compute-utils';
import { animate } from 'motion';
import { useClickStore } from '../store';

export const Eye = () => {
  const { currentX, currentY } = useClickStore();
  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const [pupilCenterPoint, setPupilCenterPoint] = useState<Point>({ x: CX, y: CY });
  const isFirstAnimation = useRef(true);

  const updatePupil = () => {
    const px = x.get();
    const py = y.get();
    console.log('DD points', x.get(), y.get());
    setPupilCenterPoint(
      isFirstAnimation.current ? { x: px, y: py } : computePupilPositionTowardTarget(px, py),
    );
  };

  useMotionValueEvent(x, 'change', updatePupil);
  useMotionValueEvent(y, 'change', updatePupil);

  useEffect(() => {
    if (currentX == null || currentY == null) return;

    const { x: newX, y: newY } = isFirstAnimation.current
      ? computePupilPositionTowardTarget(currentX, currentY)
      : { x: currentX, y: currentY };

    animate(x, newX, { duration: 1, ease: 'easeInOut' });
    animate(y, newY, {
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        isFirstAnimation.current = false;
      },
    });
  }, [currentX, currentY]);

  return (
    <>
      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} stroke="white" strokeWidth={2} fill="black" />
      <circle r={PUPIL_RADIUS} fill="white" cx={pupilCenterPoint.x} cy={pupilCenterPoint.y} />
    </>
  );
};
