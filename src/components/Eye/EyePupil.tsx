import { useAngleStore } from '../../store';
import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useRef } from 'react';
import { computePupilPoints } from '../../utils';
import { useLayoutVars, useWiggle } from '../../hooks';

const PUPIL_ANIMATION_DURATION = 0.5;
const PUPIL_ANIMATION_EASE = 'easeInOut';
const PUPIL_WIGGLE_AMPLITUDE = 5;
const PUPIL_WIGGLE_UPDATE_INTERVAL = 100;
const PUPIL_WIGGLE_ANIMATION_DURATION = 0.15;
const PUPIL_WIGGLE_LERP_FACTOR = 0.1;

const PUPIL_CLICK_SCALE = 1.07;
const PUPIL_CLICK_SCALE_DURATION = 0.1;
const PUPIL_CLICK_RESET_DURATION = 0.2;
const PUPIL_CLICK_EASE = 'easeOut';
const PUPIL_CLICK_RESET_EASE = 'easeInOut';

export const EyePupil = () => {
  const { targetAngle } = useAngleStore();
  const { PUPIL_DISTANCE, CX, CY, CIRCLE_RADIUS, PUPIL_RADIUS, PUPIL_SIZE } = useLayoutVars();
  const pupilWiggleMaxDistance = CIRCLE_RADIUS - PUPIL_RADIUS - 1;

  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const scale = useMotionValue(1);
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
    maxDistance: pupilWiggleMaxDistance,
  });

  useEffect(() => {
    if (targetAngle === undefined) return;

    const { x: newX, y: newY } = computePupilPoints({
      angle: targetAngle,
      pupilDistance: PUPIL_DISTANCE,
      cy: CY,
      cx: CX,
    });

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
  }, [targetAngle, CX, CY, PUPIL_DISTANCE]);

  const handleClick = () => {
    animate(scale, PUPIL_CLICK_SCALE, {
      duration: PUPIL_CLICK_SCALE_DURATION,
      ease: PUPIL_CLICK_EASE,
      onComplete: () => {
        animate(scale, 1, { duration: PUPIL_CLICK_RESET_DURATION, ease: PUPIL_CLICK_RESET_EASE });
      },
    });
  };

  return (
    <motion.image
      onClick={handleClick}
      href="/pupil-bg.png"
      width={PUPIL_SIZE}
      height={PUPIL_SIZE}
      x={x}
      y={y}
      style={{
        originX: 0.5,
        originY: 0.5,
        scale,
        translateX: -PUPIL_RADIUS,
        translateY: -PUPIL_RADIUS,
        cursor: 'pointer',
      }}
    />
  );
};
