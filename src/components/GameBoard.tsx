import { useRef, MouseEvent } from 'react';
import { HEIGHT, WIDTH, CX, CY, CIRCLE_RADIUS, PUPIL_RADIUS } from '../constants';
import { Cone } from './Cone';
import { Eye } from './Eye';
import { Star } from './Star';
import { useClickStore } from '../store';

export const GameBoard = () => {
  const { setCurrentPosition } = useClickStore();
  const isFirstSetDone = useRef(false);

  const handleClick = (e: MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = WIDTH / rect.width;
    const scaleY = HEIGHT / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    if (!isFirstSetDone.current) {
      const dx = clickX - CX;
      const dy = clickY - CY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= CIRCLE_RADIUS && distance > PUPIL_RADIUS) {
        setCurrentPosition(clickX, clickY);
        isFirstSetDone.current = true;
      }
    } else {
      setCurrentPosition(clickX, clickY);
    }
  };

  return (
    <>
      <Star x={100} y={200} />
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        onClick={handleClick}
        style={{ width: '100%', height: '100vh', backgroundColor: 'black', display: 'block' }}
      >
        <Cone />
        <Eye />
      </svg>
    </>
  );
};
