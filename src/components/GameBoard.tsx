import { useRef, MouseEvent, useCallback } from 'react';
import {
  HEIGHT,
  WIDTH,
  CX,
  CY,
  CIRCLE_RADIUS,
  PUPIL_RADIUS,
  DELTA,
  INITIAL_DELTA,
} from '../constants';
import { Cone } from './Cone';
import { Eye } from './Eye';
import { useAngleStore } from '../store';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { animate } from 'motion';
import { getShortestAngle } from '../utils';
import { StarsLayer } from './StarsLayer';
import Lottie from 'lottie-react';
import backgroundAnimation from '../assets/lottie/background.json';

export const GameBoard = () => {
  const { setAngle, setDelta, setTargetAngle, setIsAngleAnimationDone, setIsDeltaAnimationDone } =
    useAngleStore();
  const animationAngle = useMotionValue(0);
  const animationDelta = useMotionValue(INITIAL_DELTA);
  const isFirstSetDone = useRef(false);

  useMotionValueEvent(animationAngle, 'change', () => {
    setAngle(animationAngle.get());
  });

  useMotionValueEvent(animationDelta, 'change', () => {
    setDelta(animationDelta.get());
  });

  const handleClick = useCallback((e: MouseEvent<SVGSVGElement>) => {
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
        animate(animationDelta, DELTA, {
          duration: 0.8,
          ease: 'easeIn',
          delay: 0.3,
          onComplete: () => {
            setIsDeltaAnimationDone(true);
            setIsAngleAnimationDone(true);
          },
        });
        isFirstSetDone.current = true;
        setTargetAngle(angle);
      }
      return;
    }
    setTargetAngle(angle);
    setIsAngleAnimationDone(false);
    animate(animationAngle, getShortestAngle(animationAngle.get(), angle), {
      duration: 0.8,
      ease: 'easeInOut',
      onComplete: () => setIsAngleAnimationDone(true),
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
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
        className="relative block h-screen w-full"
      >
        <Cone />
        <Eye />
      </svg>

      <StarsLayer />
    </div>
  );
};
