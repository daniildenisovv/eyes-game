import { useRef, MouseEvent, useCallback } from 'react';
import { DELTA, INITIAL_DELTA } from '../constants';
import { Cone } from './Cone';
import { Eye } from './Eye';
import { useAngleStore } from '../store';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { animate } from 'motion';
import { getShortestAngle } from '../utils';
import { StarsLayer } from './StarsLayer';
import Lottie from 'lottie-react';
import backgroundAnimation from '../assets/lottie/background.json';
import { useLayoutVars } from '../hooks';

const ANGLE_ANIMATION_DURATION = 0.8;
const ANGLE_ANIMATION_EASE = 'easeInOut';
const DELTA_ANIMATION_DURATION = 0.8;
const DELTA_ANIMATION_DELAY = 0.3;
const DELTA_ANIMATION_EASE = 'easeIn';

export const GameBoard = () => {
  const { setAngle, setDelta, setTargetAngle, setIsAngleAnimationDone, setIsDeltaAnimationDone } =
    useAngleStore();

  const { CX, CY, WIDTH, HEIGHT, CIRCLE_RADIUS, PUPIL_RADIUS } = useLayoutVars();
  const animationAngle = useMotionValue(0);
  const animationDelta = useMotionValue(INITIAL_DELTA);
  const isFirstSetDone = useRef(false);

  useMotionValueEvent(animationAngle, 'change', () => {
    setAngle(animationAngle.get());
  });

  useMotionValueEvent(animationDelta, 'change', () => {
    setDelta(animationDelta.get());
  });

  const handleClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) * WIDTH) / width;
      const y = ((e.clientY - top) * HEIGHT) / height;
      const dx = x - CX;
      const dy = y - CY;
      const angle = Math.atan2(dy, dx);

      if (!isFirstSetDone.current) {
        const dist = Math.hypot(dx, dy);
        if (dist <= CIRCLE_RADIUS && dist > PUPIL_RADIUS) {
          animationAngle.set(angle);
          setTargetAngle(angle);
          animate(animationDelta, DELTA, {
            duration: DELTA_ANIMATION_DURATION,
            ease: DELTA_ANIMATION_EASE,
            delay: DELTA_ANIMATION_DELAY,
            onComplete: () => {
              setIsDeltaAnimationDone(true);
              setIsAngleAnimationDone(true);
            },
          });
          isFirstSetDone.current = true;
        }
        return;
      }

      setTargetAngle(angle);
      setIsAngleAnimationDone(false);
      animate(animationAngle, getShortestAngle(animationAngle.get(), angle), {
        duration: ANGLE_ANIMATION_DURATION,
        ease: ANGLE_ANIMATION_EASE,
        onComplete: () => setIsAngleAnimationDone(true),
      });
    },
    [CX, CY, WIDTH, HEIGHT, CIRCLE_RADIUS, PUPIL_RADIUS],
  );

  return (
    <div className="relative h-[100dvh] w-full">
      <Lottie
        animationData={backgroundAnimation}
        loop
        autoplay
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-black"
      />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        onClick={handleClick}
        className="relative block h-[100dvh] w-full"
      >
        <Cone />
        <Eye />
      </svg>

      <StarsLayer />
    </div>
  );
};
