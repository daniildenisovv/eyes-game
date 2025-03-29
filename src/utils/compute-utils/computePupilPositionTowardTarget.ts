import { CX, CY, PUPIL_DISTANCE } from '../../constants.ts';
import { Point } from '../../types.ts';

export function computePupilPositionTowardTarget(targetX: number, targetY: number): Point {
  const angle = Math.atan2(targetY - CY, targetX - CX);
  const x = CX + PUPIL_DISTANCE * Math.cos(angle);
  const y = CY + PUPIL_DISTANCE * Math.sin(angle);

  return { x, y };
}
