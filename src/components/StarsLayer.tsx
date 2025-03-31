import { useRef, memo } from 'react';

import { Star } from './Star';
import { useLayoutVars, useVisibleStars } from '../hooks';
import { AnimatePresence } from 'motion/react';

export const StarsLayer = memo(function StarsLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const { visibleStars } = useVisibleStars();
  const { WIDTH, HEIGHT } = useLayoutVars();

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <AnimatePresence>
        {visibleStars.map((star, index) => (
          <Star
            key={star.id}
            x={star.xPercent * WIDTH}
            y={star.yPercent * HEIGHT}
            size={star.size}
            id={star.id}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
});
