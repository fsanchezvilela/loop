import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        fill="#fff"
        d="m19.756 18.578-4.974-4.975a8.346 8.346 0 1 0-1.179 1.179l4.974 4.974a.833.833 0 0 0 1.179-1.178ZM8.333 15A6.667 6.667 0 1 1 15 8.333 6.674 6.674 0 0 1 8.333 15Z"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSearch;
