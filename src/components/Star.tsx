import { useMemo } from 'react';
import { StarIcon } from './icons';
import { CX, CY } from '../constants';
import { useAngleStore } from '../store';
import { getNormalizeAngle } from '../utils';
import { StarSize } from '../types';
import { useSelectStar } from '../hooks';
import { motion } from 'motion/react';

type Props = {
  x: number;
  y: number;
  id: string;
  size: StarSize;
};

export const Star = ({ x, y, size, id }: Props) => {
  const { angle, delta } = useAngleStore();
  const { handleSelect: handleStarSelect } = useSelectStar();

  const starAngle = useMemo(() => getNormalizeAngle(Math.atan2(y - CY, x - CX)), [x, y]);
  const normalizedAngle = useMemo(() => (angle ? getNormalizeAngle(angle) : 0), [angle]);
  const angleDiff = useMemo(
    () => Math.abs(getNormalizeAngle(starAngle - normalizedAngle)),
    [starAngle, normalizedAngle],
  );
  const isVisible = angleDiff <= delta;

  return isVisible ? (
    <motion.div
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={() => handleStarSelect(id)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <StarIcon size={size} />
    </motion.div>
  ) : null;
};
