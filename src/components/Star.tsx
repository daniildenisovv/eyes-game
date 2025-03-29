import { StarIcon } from './icons';
import { isPointInTriangle } from '../utils';
import { useConeStore } from '../store/cone-store';
import { CX, CY } from '../constants';

type Props = {
  x: number;
  y: number;
};

export const Star = ({ x, y }: Props) => {
  const conePoints = useConeStore(state => state.conePoints);

  const isShouldShow =
    conePoints && isPointInTriangle({ x, y }, { x: CX, y: CY }, conePoints.ray1, conePoints.ray2);

  if (!isShouldShow) return null;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <StarIcon />
    </div>
  );
};
