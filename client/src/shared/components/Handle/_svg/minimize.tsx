import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    {...props}
  >
    <title>Minimize</title>
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      d="M.61.703h5.8"
    />
  </svg>
);
export default SvgComponent;
