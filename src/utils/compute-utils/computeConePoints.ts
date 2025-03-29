import { ConePoints } from '../../types.ts';
import { CX, CY, LENGTH } from '../../constants.ts';

export function computeConePoints(targetX: number, targetY: number, delta: number): ConePoints {
  const baseAngle = Math.atan2(targetY - CY, targetX - CX);
  const a1 = baseAngle - delta;
  const a2 = baseAngle + delta;

  const ray1 = {
    x: CX + LENGTH * Math.cos(a1),
    y: CY + LENGTH * Math.sin(a1),
  };

  const ray2 = {
    x: CX + LENGTH * Math.cos(a2),
    y: CY + LENGTH * Math.sin(a2),
  };

  return {
    ray1,
    ray2,
    polygon: [{ x: CX, y: CY }, ray1, ray2],
    angle: baseAngle,
  };
}
