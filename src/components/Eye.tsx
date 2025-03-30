import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { useAngleStore } from '../store';
import { computePupilPositionTowardTarget } from '../utils';
import { CX, CY, CIRCLE_RADIUS, PUPIL_RADIUS } from '../constants';
import { useMotionValue, motion } from 'motion/react';

export const Eye = () => {
  const { angle } = useAngleStore();
  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const isFirstAnimated = useRef(false);

  useEffect(() => {
    if (angle === undefined) return;

    const { x: newX, y: newY } = computePupilPositionTowardTarget(angle);

    if (!isFirstAnimated.current) {
      animate(x, newX, { duration: 1, ease: 'easeInOut' });
      animate(y, newY, {
        duration: 1,
        ease: 'easeInOut',
        onComplete: () => {
          isFirstAnimated.current = true;
        },
      });
    } else {
      x.set(newX);
      y.set(newY);
    }
  }, [angle]);

  return (
    <>
      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} stroke="white" strokeWidth={2} fill="black" />
      <motion.circle r={PUPIL_RADIUS} fill="white" cx={x} cy={y} />
    </>
  );
};
