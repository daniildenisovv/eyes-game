import { useEffect, useRef, useState } from 'react';
import { CIRCLE_RADIUS, CX, CY, PUPIL_RADIUS } from '../constants.ts';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { Point } from '../types.ts';
import { computePupilPositionTowardTarget } from '../utils/compute-utils';
import { animate } from 'motion';
import { useAnimationStore } from '../store';

export const Eye = () => {
  const [pupilCenterPoint, setPupilCenterPoint] = useState<Point>({ x: CX, y: CY });
  const { angle } = useAnimationStore();
  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const isFirstAnimated = useRef(false);

  const updatePupilByPoints = () => {
    const px = x.get();
    const py = y.get();
    setPupilCenterPoint({ x: px, y: py });
  };

  useMotionValueEvent(x, 'change', updatePupilByPoints);
  useMotionValueEvent(y, 'change', updatePupilByPoints);

  useEffect(() => {
    if (angle === undefined || isFirstAnimated.current) {
      return;
    }
    const { x: newX, y: newY } = computePupilPositionTowardTarget(angle);
    animate(x, newX, { duration: 1, ease: 'easeInOut' });

    animate(y, newY, {
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        isFirstAnimated.current = true;
      },
    });
  }, [angle]);

  useEffect(() => {
    if (angle === undefined) {
      return;
    }

    setPupilCenterPoint(computePupilPositionTowardTarget(angle));
  }, [angle]);

  return (
    <>
      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} stroke="white" strokeWidth={2} fill="black" />;
      <circle r={PUPIL_RADIUS} fill="white" cx={pupilCenterPoint.x} cy={pupilCenterPoint.y} />
    </>
  );
};
