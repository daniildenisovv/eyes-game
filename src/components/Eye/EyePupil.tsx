import { useAngleStore } from '../../store';
import { animate, motion, useMotionValue } from 'motion/react';
import { CIRCLE_RADIUS, CX, CY, PUPIL_RADIUS, PUPIL_SIZE } from '../../constants';
import { useEffect, useRef } from 'react';
import { computePupilPositionTowardTarget } from '../../utils';
import { useWiggle } from '../../hooks';

const PUPIL_ANIMATION_DURATION = 0.5;
const PUPIL_ANIMATION_EASE = 'easeInOut';
const PUPIL_WIGGLE_AMPLITUDE = 5;
const PUPIL_WIGGLE_UPDATE_INTERVAL = 100;
const PUPIL_WIGGLE_ANIMATION_DURATION = 0.15;
const PUPIL_WIGGLE_LERP_FACTOR = 0.1;
const PUPIL_WIGGLE_MAX_DISTANCE = CIRCLE_RADIUS - PUPIL_RADIUS - 1;

export const EyePupil = () => {
  const { targetAngle } = useAngleStore();

  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const targetX = useRef(CX);
  const targetY = useRef(CY);
  const ignoreWiggle = useRef(false);

  useWiggle({
    targetX: targetX.current,
    targetY: targetY.current,
    enabled: !ignoreWiggle.current,
    x,
    y,
    amplitude: PUPIL_WIGGLE_AMPLITUDE,
    interval: PUPIL_WIGGLE_UPDATE_INTERVAL,
    duration: PUPIL_WIGGLE_ANIMATION_DURATION,
    lerpFactor: PUPIL_WIGGLE_LERP_FACTOR,
    maxDistance: PUPIL_WIGGLE_MAX_DISTANCE,
  });

  useEffect(() => {
    if (targetAngle === undefined) return;

    const { x: newX, y: newY } = computePupilPositionTowardTarget(targetAngle);

    ignoreWiggle.current = true;
    animate(x, newX, { duration: PUPIL_ANIMATION_DURATION, ease: PUPIL_ANIMATION_EASE });
    animate(y, newY, {
      duration: PUPIL_ANIMATION_DURATION,
      ease: PUPIL_ANIMATION_EASE,
      onComplete: () => {
        ignoreWiggle.current = false;
      },
    });

    targetX.current = newX;
    targetY.current = newY;
  }, [targetAngle]);

  return (
    <motion.image
      href="/pupil-bg.png"
      width={PUPIL_SIZE}
      height={PUPIL_SIZE}
      x={x}
      y={y}
      style={{ transform: `translate(-${PUPIL_RADIUS}px, -${PUPIL_RADIUS}px)` }}
    />
  );
};
