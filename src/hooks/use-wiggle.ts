import { useEffect, useRef } from 'react';
import { animate, useAnimationFrame, useMotionValue, MotionValue } from 'motion/react';
import { lerp } from '../utils';

type UseWiggleOptions = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  targetX: number;
  targetY: number;
  enabled: boolean;
  amplitude?: number;
  interval?: number;
  duration?: number;
  lerpFactor?: number;
  maxDistance?: number;
};

export const useWiggle = ({
  x,
  y,
  targetX,
  targetY,
  enabled,
  amplitude = 5,
  interval = 100,
  duration = 0.15,
  lerpFactor = 0.1,
  maxDistance = Infinity,
}: UseWiggleOptions) => {
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const rand = () => (Math.random() - 0.5) * 2 * amplitude;
      const tx = rand();
      const ty = rand();
      const dist = Math.sqrt(tx * tx + ty * ty);
      const scale = dist > maxDistance ? maxDistance / dist : 1;

      animate(dx, tx * scale, { duration, ease: 'easeInOut' });
      animate(dy, ty * scale, { duration, ease: 'easeInOut' });
    };

    timer.current = setInterval(update, interval);
    return () => clearInterval(timer.current!);
  }, [enabled]);

  useAnimationFrame(() => {
    if (!enabled) return;
    x.set(lerp(x.get(), targetX + dx.get(), lerpFactor));
    y.set(lerp(y.get(), targetY + dy.get(), lerpFactor));
  });
};
