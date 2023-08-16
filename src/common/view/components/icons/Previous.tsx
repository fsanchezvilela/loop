import type { SVGProps } from 'react';
const SvgPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#previous_svg__a)">
      <path
        fill="#fff"
        d="M4 0a1 1 0 0 1 1 1v7.482L14.637.783A3.93 3.93 0 0 1 18.81.44 3.93 3.93 0 0 1 21 4.007V20a3.93 3.93 0 0 1-2.191 3.568 3.994 3.994 0 0 1-1.817.44c-.843 0-1.657-.271-2.388-.809L5 15.516v7.483a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm1.851 13.637 9.97 7.976a1.965 1.965 0 0 0 2.085.17A1.941 1.941 0 0 0 19.001 20V4.007c0-.78-.399-1.43-1.094-1.782a2.053 2.053 0 0 0-.926-.229c-.401 0-.791.127-1.128.374L5.817 10.388c-.519.38-.816.967-.816 1.611s.298 1.231.851 1.637l-.001.001Z"
      />
    </g>
    <defs>
      <clipPath id="previous_svg__a">
        <path fill="#fff" d="M24 0H0v24h24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrevious;
