import { SVGProps, memo } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    viewBox="0 0 511 511"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={255.5}
      cy={255.5}
      r={248}
      fill="#fc686c"
      data-original="#fc686c"
    />
    <path
      fill="#ec6267"
      d="M255.5 485.5c-133.952 0-243.081-106.205-247.82-239-.107 2.988-.18 5.986-.18 9 0 136.967 111.033 248 248 248s248-111.033 248-248c0-3.014-.073-6.012-.18-9-4.739 132.795-113.868 239-247.82 239z"
      data-original="#ec6267"
    />
    <circle
      cx={255.5}
      cy={255.5}
      r={212.025}
      fill="#f1ebdd"
      data-original="#f9da86"
    />
    <path
      fill="#cfc2a4"
      d="M255.5 449.525c-114.082 0-207.104-90.103-211.821-203.025a215.023 215.023 0 0 0-.203 9c0 117.098 94.927 212.025 212.025 212.025S467.525 372.598 467.525 255.5c0-3.016-.079-6.014-.203-9-4.718 112.922-97.741 203.025-211.822 203.025z"
      data-original="#f1c976"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={15}
      d="M75.509 426.109C33.358 381.655 7.5 321.597 7.5 255.5c0-136.967 111.033-248 248-248s248 111.033 248 248-111.033 248-248 248c-59.923 0-114.882-21.253-157.751-56.631"
      data-original="#000000"
      style={{
        strokeWidth: 15,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={15}
      d="M356.833 441.788c-30.106 16.411-64.631 25.737-101.333 25.737-117.098 0-212.025-94.927-212.025-212.025 0-86.367 51.639-160.672 125.727-193.725m28.255-10.257c18.446-5.239 37.917-8.043 58.043-8.043 117.098 0 212.025 94.927 212.025 212.025 0 69.527-33.465 131.238-85.167 169.903"
      data-original="#000000"
      style={{
        strokeWidth: 15,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={15}
      d="m223.619 291.459 27.005-70.905c.552-1.349 2.462-1.351 3.016-.003l26.759 70.908M230.345 273.8h43.391m-132.254-46.869s-12.905-10.848-28.123-6.263c-13.973 4.209-15.928 20.321-5.818 26.912 0 0 9.92 4.426 20.922 8.484 26.485 9.769 15.076 35.392-6.245 35.392-10.677 0-19.638-4.676-25.062-10.661m72.048-61.254h39.717m-19.939-.003v71.921m182.5-71.918h39.717m-19.939-.003v71.921m-76.327-34.325 30.21 34.325m-38.883-71.918v71.918m38.883-53.227c0 10.322-9.051 18.691-19.748 18.691-5.305 0-18.978.082-18.978.082s-.086-13.57-.086-18.773c0-4.273-.048-18.691-.048-18.691h19.111c10.698 0 19.749 8.368 19.749 18.691z"
      data-original="#000000"
      style={{
        strokeWidth: 15,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
