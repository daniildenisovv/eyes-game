import { computeConePoints } from '../utils';
import { useAngleStore } from '../store';
import { useId, useMemo } from 'react';
import { useLayoutVars } from '../hooks';

export const Cone = () => {
  const { angle, delta } = useAngleStore();
  const { LENGTH, CX, CY } = useLayoutVars();

  const conePolygon = useMemo(() => {
    if (!angle) return null;
    const conePoints = computeConePoints({ angle, delta, length: LENGTH, cy: CY, cx: CX });
    return conePoints.polygon.map(p => `${p.x},${p.y}`).join(' ');
  }, [angle, delta, LENGTH, CY, CX]);
  const coneGradientId = useId();

  const linearGradientPoints = useMemo(() => {
    if (!angle) return null;
    return {
      x1: CX,
      y1: CY,
      x2: CX + LENGTH * Math.cos(angle),
      y2: CY + LENGTH * Math.sin(angle),
    };
  }, [angle, LENGTH, CY, CX]);

  if (!conePolygon || !linearGradientPoints) return null;

  return (
    <>
      <defs>
        <linearGradient
          id={coneGradientId}
          gradientUnits="userSpaceOnUse"
          {...linearGradientPoints}
        >
          <stop offset="0" stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={conePolygon} fill="black" />
      <polygon points={conePolygon} fill={`url(#${coneGradientId})`} />
    </>
  );
};
