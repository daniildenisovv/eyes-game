import { CX, CY, LENGTH } from '../constants';
import { computeConePoints } from '../utils';
import { useAngleStore } from '../store';
import { useMemo } from 'react';

export const Cone = () => {
  const { angle, delta } = useAngleStore();

  const conePolygon = useMemo(() => {
    if (!angle) return null;
    const conePoints = computeConePoints(angle, delta);
    return conePoints.polygon.map(p => `${p.x},${p.y}`).join(' ');
  }, [angle, delta]);

  const linearGradientPoints = useMemo(() => {
    if (!angle) return null;
    return {
      x1: CX,
      y1: CY,
      x2: CX + LENGTH * Math.cos(angle),
      y2: CY + LENGTH * Math.sin(angle),
    };
  }, [angle]);

  if (!conePolygon || !linearGradientPoints) return null;

  return (
    <>
      <defs>
        <linearGradient id="coneGradient" gradientUnits="userSpaceOnUse" {...linearGradientPoints}>
          <stop offset="0" stopColor="white" stopOpacity="0.4" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon points={conePolygon} fill="url(#coneGradient)" />
    </>
  );
};
