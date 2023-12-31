import type { SVGProps } from 'react';
const SvgReplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#replay_svg__a)">
      <path
        fill="#fff"
        d="M21.962 12.875A10.03 10.03 0 1 1 19.122 5H16a1 1 0 1 0 0 2h4.143A1.858 1.858 0 0 0 22 5.143V1a1 1 0 0 0-2 0v2.078A11.985 11.985 0 1 0 23.95 13.1a1.006 1.006 0 0 0-1-1.1.982.982 0 0 0-.988.875Z"
      />
    </g>
    <defs>
      <clipPath id="replay_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReplay;
