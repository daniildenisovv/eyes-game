import { Point } from '../../types';

export function computePupilPoints({
  angle,
  cx,
  cy,
  pupilDistance,
}: {
  angle: number;
  cx: number;
  cy: number;
  pupilDistance: number;
}): Point {
  const x = cx + pupilDistance * Math.cos(angle);
  const y = cy + pupilDistance * Math.sin(angle);

  return { x, y };
}
