import { CX, CY, PUPIL_DISTANCE } from '../../constants.ts';
import { Point } from '../../types.ts';

export function computePupilPositionTowardTarget(angle: number): Point {
  const x = CX + PUPIL_DISTANCE * Math.cos(angle);
  const y = CY + PUPIL_DISTANCE * Math.sin(angle);

  return { x, y };
}
