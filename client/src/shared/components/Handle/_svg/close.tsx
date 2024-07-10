import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 7 7"
    {...props}
  >
    <title>close button</title>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M1.182 5.99 5.99 1.182m0 4.95L1.182 1.323"
    />
  </svg>
);
export default SvgComponent;
