import { CX, CY, DELTA, INITIAL_DELTA, LENGTH } from '../constants';
import { useEffect, useMemo } from 'react';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { animate } from 'motion';
import { computeConePoints } from '../utils';
import { useClickStore, useConeStore } from '../store';
import { ConePoints } from '../types.ts';

type Props = {
  currentX: number;
  currentY: number;
  conePoints: ConePoints;
  onConePointsChange: (points: ConePoints) => void;
};

const ConeVisual = ({ currentX, currentY, conePoints, onConePointsChange }: Props) => {
  const x = useMotionValue(currentX);
  const y = useMotionValue(currentY);
  const delta = useMotionValue(INITIAL_DELTA);

  const conePolygonPoints = useMemo(
    () => conePoints.polygon.map(p => `${p.x},${p.y}`).join(' '),
    [conePoints],
  );

  const updatePoints = () => {
    onConePointsChange(computeConePoints(x.get(), y.get(), delta.get()));
  };

  useMotionValueEvent(x, 'change', updatePoints);
  useMotionValueEvent(y, 'change', updatePoints);
  useMotionValueEvent(delta, 'change', updatePoints);

  useEffect(() => {
    animate(x, currentX, { duration: 1, ease: 'easeInOut' });
    animate(y, currentY, { duration: 1, ease: 'easeInOut' });
  }, [currentX, currentY]);

  useEffect(() => {
    animate(delta, DELTA, { duration: 1, ease: 'easeInOut', delay: 0.3 });
  }, []);

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

export const Cone = () => {
  const { currentX, currentY } = useClickStore();
  const { setConePoints, conePoints } = useConeStore();

  useEffect(() => {
    if (currentX === undefined || currentY === undefined || conePoints) {
      return;
    }

    const initial = computeConePoints(currentX, currentY, INITIAL_DELTA);
    setConePoints(initial);
  }, [currentX, currentY, conePoints]);

  if (currentX === undefined || currentY === undefined || !conePoints) {
    return null;
  }

  return (
    <ConeVisual
      currentX={currentX}
      currentY={currentY}
      conePoints={conePoints}
      onConePointsChange={setConePoints}
    />
  );
};
