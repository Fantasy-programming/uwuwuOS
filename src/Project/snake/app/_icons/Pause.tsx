import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="48"
    height="48"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M13 5v22a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3zm10-3h-1a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"
      data-name="Layer 30"
      data-original="#000000"
    />
    <title>pause button</title>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
