import { StarIcon } from './icons';
import { CX, CY } from '../constants';
import { useAnimationStore } from '../store';
import { getNormalizeAngle } from '../utils';

type Props = {
  x: number;
  y: number;
};

export const Star = ({ x, y }: Props) => {
  const { angle, delta } = useAnimationStore();

  if (angle === undefined) return null;

  const starAngle = getNormalizeAngle(Math.atan2(y - CY, x - CX));
  const normalizedAngle = getNormalizeAngle(angle);
  const angleDiff = Math.abs(getNormalizeAngle(starAngle - normalizedAngle));

  if (angleDiff > delta) return null;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <StarIcon />
    </div>
  );
};
