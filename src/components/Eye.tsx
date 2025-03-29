import { useEffect, useRef, useState } from 'react';
import { CIRCLE_RADIUS, CX, CY, PUPIL_RADIUS } from '../constants.ts';
import { useMotionValue, useMotionValueEvent } from 'motion/react';
import { Point } from '../types.ts';
import { computePupilPositionTowardTarget } from '../utils/compute-utils';
import { animate } from 'motion';
import { useClickStore, useConeStore } from '../store';

type Props = {
  angle: number | null;
  pupilCenterPoint: Point;
  onPupilCenterPointChange: (point: Point) => void;
};

const Pupal = ({ angle, pupilCenterPoint, onPupilCenterPointChange }: Props) => {
  const { currentX, currentY } = useClickStore();
  const x = useMotionValue(CX);
  const y = useMotionValue(CY);
  const animationAngle = useMotionValue(angle);
  const isFirstAnimated = useRef(false);

  const updatePupilByPoints = () => {
    const px = x.get();
    const py = y.get();
    onPupilCenterPointChange({ x: px, y: py });
  };

  const updatePupilByAngle = () => {
    onPupilCenterPointChange(computePupilPositionTowardTarget(animationAngle.get()));
  };

  useMotionValueEvent(x, 'change', updatePupilByPoints);
  useMotionValueEvent(y, 'change', updatePupilByPoints);
  useMotionValueEvent(animationAngle, 'change', updatePupilByAngle);

  useEffect(() => {
    if (currentX == null || currentY == null || isFirstAnimated.current) return;
    const initialAngle = Math.atan2(currentY - CY, currentX - CX);
    const { x: newX, y: newY } = computePupilPositionTowardTarget(initialAngle);
    animate(x, newX, { duration: 1, ease: 'easeInOut' });

    animate(y, newY, {
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        isFirstAnimated.current = true;
      },
    });
  }, [currentY, currentY]);

  useEffect(() => {
    if (angle === null) {
      return;
    }
    animate(animationAngle, angle, { duration: 1, ease: 'easeInOut' });
  }, [angle]);

  return (
    <>
      <circle r={PUPIL_RADIUS} fill="white" cx={pupilCenterPoint.x} cy={pupilCenterPoint.y} />
    </>
  );
};

export const Eye = () => {
  const { angle } = useConeStore();
  const [pupilCenterPoint, setPupilCenterPoint] = useState<Point>({ x: CX, y: CY });

  return (
    <>
      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} stroke="white" strokeWidth={2} fill="black" />;
      <Pupal
        angle={angle}
        pupilCenterPoint={pupilCenterPoint}
        onPupilCenterPointChange={setPupilCenterPoint}
      />
    </>
  );
};
