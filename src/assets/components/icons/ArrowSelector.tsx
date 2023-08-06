import type { SVGProps } from 'react';
const SvgArrowSelector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#fff"
      d="M14.033 6.157a.75.75 0 0 0-1.066 0L9.532 9.592a.75.75 0 0 1-1.065 0L5.032 6.157a.75.75 0 1 0-1.065 1.058l3.443 3.443a2.25 2.25 0 0 0 3.18 0l3.443-3.443a.75.75 0 0 0 0-1.058Z"
    />
  </svg>
);
export default SvgArrowSelector;
