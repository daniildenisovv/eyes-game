import { CX, CY, LENGTH } from '../constants';
import { useEffect } from 'react';
import { computeConePoints } from '../utils';
import { useAnimationStore, useConeStore } from '../store';

export const Cone = () => {
  const { angle, delta } = useAnimationStore();
  const { setConePoints, conePoints } = useConeStore();

  useEffect(() => {
    if (angle === undefined) {
      return;
    }

    setConePoints(computeConePoints(angle, delta));
  }, [angle, delta]);

  if (conePoints === null) {
    return null;
  }
  const conePolygonPoints = conePoints.polygon.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <>
      <defs>
        <linearGradient
          id="coneGradient"
          gradientUnits="userSpaceOnUse"
          x1={CX}
          y1={CY}
          x2={CX + LENGTH * Math.cos(conePoints.angle)}
          y2={CY + LENGTH * Math.sin(conePoints.angle)}
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <polygon points={conePolygonPoints} fill="url(#coneGradient)" />
    </>
  );
};
