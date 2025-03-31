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

const ANIMATION_DURATION = 0.25;
const ANIMATION_EASE = 'easeOut';
const ANIMATION_DELAY_STEP = 0.2;

const variants = {
  enter: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
      delay: index * ANIMATION_DELAY_STEP,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: ANIMATION_EASE,
      delay: 0,
    },
  },
  initial: {
    opacity: 0,
    scale: 0,
  },
};

export const Star = ({ x, y, size, id, index }: Props) => {
  const { handleSelect: handleStarSelect } = useSelectStar();

  const handleStarClick = () => {
    handleStarSelect(id);
  };

  return (
    <motion.div
      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={handleStarClick}
      custom={index}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <StarIcon size={size} />
    </motion.div>
  );
};
