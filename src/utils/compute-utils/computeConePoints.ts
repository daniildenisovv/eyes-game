import { ConePoints } from '../../types';
import { CX, CY, LENGTH } from '../../constants';

export function computeConePoints(angle: number, delta: number): ConePoints {
  const a1 = angle - delta;
  const a2 = angle + delta;

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
  };
}
