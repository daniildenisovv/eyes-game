import { ConePoints } from '../../types';

export function computeConePoints({
  angle,
  cx,
  cy,
  length,
  delta,
}: {
  angle: number;
  delta: number;
  cx: number;
  cy: number;
  length: number;
}): ConePoints {
  const a1 = angle - delta;
  const a2 = angle + delta;

  const ray1 = {
    x: cx + length * Math.cos(a1),
    y: cy + length * Math.sin(a1),
  };

  const ray2 = {
    x: cx + length * Math.cos(a2),
    y: cy + length * Math.sin(a2),
  };

  return {
    ray1,
    ray2,
    polygon: [{ x: cx, y: cy }, ray1, ray2],
  };
}
