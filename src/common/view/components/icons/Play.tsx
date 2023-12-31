import type { SVGProps } from 'react';
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#play_svg__a)">
      <path
        fill="#fff"
        d="M13.593 6.415 4.375.53v14.963l9.214-5.905a1.875 1.875 0 0 0 .004-3.173Z"
      />
    </g>
    <defs>
      <clipPath id="play_svg__a">
        <path fill="#fff" d="M.5.5h15v15H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlay;
