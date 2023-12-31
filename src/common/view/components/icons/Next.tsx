import type { SVGProps } from 'react';
const SvgNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#next_svg__a)">
      <path
        fill="#fff"
        d="M20 0a1 1 0 0 0-1 1v7.482L9.363.783A3.93 3.93 0 0 0 5.19.44 3.93 3.93 0 0 0 3 4.007V20a3.93 3.93 0 0 0 2.191 3.568c.577.292 1.189.44 1.817.44.843 0 1.657-.271 2.388-.809L19 15.516v7.483a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Zm-1.851 13.637-9.97 7.976a1.965 1.965 0 0 1-2.085.17A1.941 1.941 0 0 1 4.999 20V4.007c0-.78.399-1.43 1.094-1.782.303-.153.618-.229.926-.229.401 0 .791.127 1.128.374l10.036 8.018c.519.38.816.967.816 1.611s-.298 1.231-.851 1.637l.001.001Z"
      />
    </g>
    <defs>
      <clipPath id="next_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNext;
