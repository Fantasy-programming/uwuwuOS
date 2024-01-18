import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={1}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
