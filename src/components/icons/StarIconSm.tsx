import { SVGProps } from 'react';

export const StarIconSm = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd_2001_484)">
        <path
          d="M33.0071 17.007C33.0071 17.007 33.1803 29.5279 34.8263 31.1754C36.4723 32.8228 48.9931 33.007 48.9931 33.007C48.9931 33.007 36.4722 33.1802 34.8247 34.8262C33.1773 36.4722 32.9931 48.993 32.9931 48.993C32.9931 48.993 32.8199 36.4721 31.1739 34.8246C29.5279 33.1772 17.0071 32.993 17.0071 32.993C17.0071 32.993 29.528 32.8198 31.1755 31.1738C32.8229 29.5278 33.0071 17.007 33.0071 17.007Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_2001_484"
          x="0.415323"
          y="0.415079"
          width="65.1698"
          height="65.1699"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2001_484" />
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
            in2="effect1_dropShadow_2001_484"
            result="effect2_dropShadow_2001_484"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2001_484"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
