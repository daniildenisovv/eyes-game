import { StarIcon } from './icons';
import { StarSize } from '../types';
import { useSelectStar } from '../hooks';
import { motion } from 'motion/react';

type Props = {
  x: number;
  y: number;
  id: string;
  size: StarSize;
  index: number;
};

export const Star = ({ x, y, size, id, index }: Props) => {
  const { handleSelect: handleStarSelect } = useSelectStar();

  return (
    <motion.div
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={() => handleStarSelect(id)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut', delay: index * 0.09 }}
    >
      <StarIcon size={size} />
    </motion.div>
  );
};
