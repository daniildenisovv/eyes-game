import { SVGProps } from 'react';

export const StarIconMd = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="75"
      height="76"
      viewBox="0 0 75 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_2001_537)">
        <path
          d="M38.0093 17.0092C38.0093 17.0092 38.2366 33.4429 40.397 35.6052C42.5574 37.7675 58.9909 38.0092 58.9909 38.0092C58.9909 38.0092 42.5572 38.2365 40.3949 40.3969C38.2326 42.5573 37.9909 58.9908 37.9909 58.9908C37.9909 58.9908 37.7635 42.5571 35.6032 40.3948C33.4428 38.2325 17.0093 37.9908 17.0093 37.9908C17.0093 37.9908 33.443 37.7635 35.6053 35.6031C37.7676 33.4427 38.0093 17.0092 38.0093 17.0092Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2001_537"
          x="0.417276"
          y="0.417215"
          width="75.1654"
          height="75.1656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.6504" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.71 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_537" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8.296" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.71 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2001_537"
            result="effect2_dropShadow_2001_537"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2001_537"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
