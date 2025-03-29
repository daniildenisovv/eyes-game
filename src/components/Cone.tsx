import { CX, CY, DELTA, INITIAL_DELTA, LENGTH } from '../constants';
import { useEffect, useMemo } from 'react';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { animate } from 'motion';
import { computeConePoints } from '../utils';
import { useClickStore, useConeStore } from '../store';
import { ConePoints } from '../types.ts';

type Props = {
  angle: number;
  conePoints: ConePoints;
  onConePointsChange: (angle: number, delta: number) => void;
};

const ConeVisual = ({ angle, conePoints, onConePointsChange }: Props) => {
  const newAngle = useMotionValue(angle);
  const delta = useMotionValue(INITIAL_DELTA);

  const conePolygonPoints = useMemo(
    () => conePoints.polygon.map(p => `${p.x},${p.y}`).join(' '),
    [conePoints],
  );

  const updatePoints = () => {
    onConePointsChange(newAngle.get(), delta.get());
  };

  useMotionValueEvent(newAngle, 'change', updatePoints);
  useMotionValueEvent(delta, 'change', updatePoints);

  useEffect(() => {
    animate(newAngle, angle, { duration: 1, ease: 'easeInOut' });
  }, [angle]);

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
  const { setAngle, angle, setConePoints, conePoints } = useConeStore();

  const handleConePointsChange = (angle: number, delta: number) => {
    const newConePoints = computeConePoints(angle, delta);
    setConePoints(newConePoints);
  };

  useEffect(() => {
    if (currentX === undefined || currentY === undefined) {
      return;
    }
    const angle = Math.atan2(currentY - CY, currentX - CX);
    const initialConePoints = computeConePoints(angle, INITIAL_DELTA);
    setAngle(angle);
    setConePoints(initialConePoints);
  }, [currentX, currentY]);

  if (currentX === undefined || currentY === undefined || angle === null || conePoints === null) {
    return null;
  }

  return (
    <ConeVisual angle={angle} conePoints={conePoints} onConePointsChange={handleConePointsChange} />
  );
};
