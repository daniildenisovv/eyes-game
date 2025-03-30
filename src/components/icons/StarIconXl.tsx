import { SVGProps } from 'react';

export const StarIconXl = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="98"
      height="98"
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_2001_535)">
        <path
          d="M49.0143 17.0141C49.0143 17.0141 49.3606 42.0558 52.6526 45.3508C55.9446 48.6457 80.9861 49.0141 80.9861 49.0141C80.9861 49.0141 55.9443 49.3605 52.6494 52.6525C49.3545 55.9445 48.9861 80.9859 48.9861 80.9859C48.9861 80.9859 48.6397 55.9441 45.3477 52.6492C42.0557 49.3543 17.0143 48.9859 17.0143 48.9859C17.0143 48.9859 42.056 48.6395 45.3509 45.3475C48.6458 42.0555 49.0143 17.0141 49.0143 17.0141Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2001_535"
          x="0.422159"
          y="0.422037"
          width="97.1562"
          height="97.1559"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_535" />
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
            in2="effect1_dropShadow_2001_535"
            result="effect2_dropShadow_2001_535"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2001_535"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
