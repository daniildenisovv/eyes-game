import { SVGProps } from 'react';

export const StarIconLg = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_2001_533)">
        <path
          d="M45.0121 17.0123C45.0121 17.0123 45.3152 38.9239 48.1957 41.8069C51.0762 44.6899 72.9875 45.0123 72.9875 45.0123C72.9875 45.0123 51.0759 45.3154 48.1929 48.1959C45.3098 51.0764 44.9875 72.9877 44.9875 72.9877C44.9875 72.9877 44.6844 51.0761 41.8039 48.1931C38.9234 45.3101 17.0121 44.9877 17.0121 44.9877C17.0121 44.9877 38.9237 44.6846 41.8067 41.8041C44.6897 38.9236 45.0121 17.0123 45.0121 17.0123Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2001_533"
          x="0.420206"
          y="0.420328"
          width="89.1591"
          height="89.1593"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_533" />
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
            in2="effect1_dropShadow_2001_533"
            result="effect2_dropShadow_2001_533"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2001_533"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
