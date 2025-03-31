import { useCallback, useEffect, useState } from 'react';

export const useLayoutVars = () => {
  const calcVars = useCallback(() => {
    const vw = window.visualViewport?.width ?? window.innerWidth;
    const vh = window.visualViewport?.height ?? window.innerHeight;

    const MAX_CIRCLE_RADIUS = 132;
    const MAX_WIDTH = 430;
    const WIDTH = vw;
    const HEIGHT = vh;
    const CIRCLE_RADIUS = Math.min(MAX_CIRCLE_RADIUS, (vw / MAX_WIDTH) * MAX_CIRCLE_RADIUS);
    const PUPIL_RADIUS = CIRCLE_RADIUS * 0.4;
    const PUPIL_DISTANCE = CIRCLE_RADIUS * 0.8;
    const PUPIL_SIZE = PUPIL_RADIUS * 2;
    const LENGTH = Math.max(WIDTH, HEIGHT) * 0.588;
    const CX = WIDTH / 2;
    const CY = HEIGHT / 2;

    return {
      WIDTH,
      HEIGHT,
      CIRCLE_RADIUS,
      PUPIL_RADIUS,
      PUPIL_DISTANCE,
      PUPIL_SIZE,
      LENGTH,
      CX,
      CY,
    };
  }, []);

  const [vars, setVars] = useState(calcVars);

  useEffect(() => {
    const onResize = () => setVars(calcVars());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [calcVars]);

  return vars;
};
