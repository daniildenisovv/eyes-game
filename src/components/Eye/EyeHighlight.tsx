import { motion, useMotionValue } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useLayoutVars, useWiggle } from '../../hooks';

const HIGHLIGHT_SIZE = 15;
const HIGHLIGHT_WIGGLE_OFFSET = 3;
const HIGHLIGHT_WIGGLE_DURATION = 0.08;
const HIGHLIGHT_WIGGLE_INTERVAL = 60;
const HIGHLIGHT_WIGGLE_LERP = 0.2;
const HIGHLIGHT_POSITION_ANGLE = Math.PI / 4;
const HIGHLIGHT_WIGGLE_DISTANCE = 6;

export const EyeHighlight = () => {
  const { CX, CY, PUPIL_RADIUS } = useLayoutVars();
  const highlightX0 = CX + PUPIL_RADIUS * Math.cos(HIGHLIGHT_POSITION_ANGLE);
  const highlightY0 = CY - PUPIL_RADIUS * Math.sin(HIGHLIGHT_POSITION_ANGLE);

  const x = useMotionValue(highlightX0);
  const y = useMotionValue(highlightY0);

  const targetX = useRef(highlightX0);
  const targetY = useRef(highlightY0);

  useEffect(() => {
    x.set(highlightX0);
    y.set(highlightY0);
    targetX.current = highlightX0;
    targetY.current = highlightY0;
  }, [highlightX0, highlightY0, x, y]);

  useWiggle({
    targetX: targetX.current,
    targetY: targetY.current,
    enabled: true,
    x,
    y,
    amplitude: HIGHLIGHT_WIGGLE_OFFSET,
    interval: HIGHLIGHT_WIGGLE_INTERVAL,
    duration: HIGHLIGHT_WIGGLE_DURATION,
    lerpFactor: HIGHLIGHT_WIGGLE_LERP,
    maxDistance: HIGHLIGHT_WIGGLE_DISTANCE,
  });

  return (
    <motion.rect
      width={HIGHLIGHT_SIZE}
      height={HIGHLIGHT_SIZE}
      fill="white"
      x={x}
      y={y}
      style={{
        transform: `translate(-${HIGHLIGHT_SIZE / 2}px, -${HIGHLIGHT_SIZE / 2}px)`,
      }}
    />
  );
};
