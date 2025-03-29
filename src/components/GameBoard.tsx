import { useRef, MouseEvent } from 'react';
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
import { Star } from './Star';
import { useAnimationStore, useClickStore } from '../store';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { animate } from 'motion';

export const GameBoard = () => {
  const { setCurrentPosition } = useClickStore();
  const { setTargetAngle, setAngle, setDelta } = useAnimationStore();
  const animationAngle = useMotionValue(0);
  const animationDelta = useMotionValue(INITIAL_DELTA);
  const isFirstSetDone = useRef(false);

  useMotionValueEvent(animationAngle, 'change', () => {
    setAngle(animationAngle.get());
  });

  useMotionValueEvent(animationDelta, 'change', () => {
    setDelta(animationDelta.get());
  });

  const handleClick = (e: MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = WIDTH / rect.width;
    const scaleY = HEIGHT / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;
    const angle = Math.atan2(clickY - CY, clickX - CX);
    if (!isFirstSetDone.current) {
      const dx = clickX - CX;
      const dy = clickY - CY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= CIRCLE_RADIUS && distance > PUPIL_RADIUS) {
        setCurrentPosition(clickX, clickY);
        setTargetAngle(angle);
        animationAngle.set(angle);
        animate(animationDelta, DELTA, { duration: 1, ease: 'easeInOut', delay: 0.3 });
        isFirstSetDone.current = true;
      }
    } else {
      setTargetAngle(angle);
      animate(animationAngle, angle, { duration: 1, ease: 'easeInOut' });
      setCurrentPosition(clickX, clickY);
    }
  };

  return (
    <>
      <Star x={100} y={200} />
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        onClick={handleClick}
        style={{ width: '100%', height: '100vh', backgroundColor: 'black', display: 'block' }}
      >
        <Cone />
        <Eye />
      </svg>
    </>
  );
};
