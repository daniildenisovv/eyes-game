import { CX, CY, CIRCLE_RADIUS } from '../../constants';
import { EyeHighlight } from './EyeHighlight';
import { EyePupil } from './EyePupil';

const EYE_SIZE = CIRCLE_RADIUS * 2;
const EYE_OFFSET = CIRCLE_RADIUS;
const EYE_X = CX - EYE_OFFSET;
const EYE_Y = CY - EYE_OFFSET;

export const Eye = () => {
  return (
    <>
      <defs>
        <pattern
          id="eye-bg"
          patternUnits="userSpaceOnUse"
          width={EYE_SIZE}
          height={EYE_SIZE}
          x={EYE_X}
          y={EYE_Y}
        >
          <image
            href="/eye-bg.png"
            width={EYE_SIZE}
            height={EYE_SIZE}
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
        <clipPath id="eye-clip">
          <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} />
        </clipPath>
      </defs>

      <circle cx={CX} cy={CY} r={CIRCLE_RADIUS} fill="url(#eye-bg)" />
      <g clipPath="url(#eye-clip)">
        <EyePupil />
      </g>
      <EyeHighlight />
    </>
  );
};
