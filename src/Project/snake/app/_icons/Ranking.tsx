import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      d="M44 20H32v18h12zm-3 13a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-2h-3a1 1 0 0 1 0-2h3v-2h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zM30 4H18v34h12zm-4 14h-4a1 1 0 0 1 0-2h1c0-5.28.12-4.72-.29-4.29a1 1 0 0 1-1.42-1.42c1.92-1.92 2.28-2.56 3.09-2.21S25 8.5 25 16h1a1 1 0 0 1 0 2zm-10-4H4v24h12zm-3 9a1 1 0 0 1-1 1H9v2h3a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3v-2H8a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zM1 40h46v4H1z"
      data-name="47. ranking list"
      data-original="#000000"
    />
    <title>ranking list</title>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
