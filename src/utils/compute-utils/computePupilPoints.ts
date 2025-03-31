import { CX, CY, PUPIL_DISTANCE } from '../../constants';
import { Point } from '../../types';

export function computePupilPoints(angle: number): Point {
  const x = CX + PUPIL_DISTANCE * Math.cos(angle);
  const y = CY + PUPIL_DISTANCE * Math.sin(angle);

  return { x, y };
}
