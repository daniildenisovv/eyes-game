import { CX, CY, LENGTH } from '../constants';
import { computeConePoints } from '../utils';
import { useAnimationStore } from '../store';

export const Cone = () => {
  const { angle, delta } = useAnimationStore();

  const conePoints = angle ? computeConePoints(angle, delta) : null;

  if (conePoints === null || angle === undefined) {
    return null;
  }

  return (
    <>
      <defs>
        <linearGradient
          id="coneGradient"
          gradientUnits="userSpaceOnUse"
          x1={CX}
          y1={CY}
          x2={CX + LENGTH * Math.cos(angle)}
          y2={CY + LENGTH * Math.sin(angle)}
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <polygon
        points={conePoints.polygon.map(p => `${p.x},${p.y}`).join(' ')}
        fill="url(#coneGradient)"
      />
    </>
  );
};
