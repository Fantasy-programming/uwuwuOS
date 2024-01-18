import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.88 12.88" {...props}>
    <circle cx={6.44} cy={6.44} r={6.44} fill="none" />
    <title>Expand</title>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6.5 3.34v6.32M9.66 6.5H3.34"
    />
  </svg>
);
export default SvgComponent;
