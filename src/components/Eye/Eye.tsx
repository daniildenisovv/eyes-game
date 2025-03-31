import { EyeHighlight } from './EyeHighlight';
import { EyePupil } from './EyePupil';
import { useId } from 'react';
import { useLayoutVars } from '../../hooks';

export const Eye = () => {
  const { CY, CX, CIRCLE_RADIUS } = useLayoutVars();
  const eyePatternId = useId();
  const eyeClipId = useId();

  const eyeSize = CIRCLE_RADIUS * 2;
  const eyeOffset = CIRCLE_RADIUS;
  const eyeX = CX - eyeOffset;
  const eyeY = CY - eyeOffset;

  return (
    <>
      <defs>
        <pattern
          id={eyePatternId}
          patternUnits="userSpaceOnUse"
          width={eyeSize}
          height={eyeSize}
          x={eyeX}
          y={eyeY}
        >
          <image
            href="/eye-bg.png"
            width={eyeSize}
            height={eyeSize}
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
        <clipPath id={eyeClipId}>
          <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} />
        </clipPath>
      </defs>

      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} fill={`url(#${eyePatternId})`} />
      <g clipPath={`url(#${eyeClipId})`}>
        <EyePupil />
      </g>
      <EyeHighlight />
    </>
  );
};
