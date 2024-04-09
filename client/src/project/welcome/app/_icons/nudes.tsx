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
    viewBox="0 0 682.667 682.667"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M0 512h512V0H0Z" data-original="#000000" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
      <path
        fill="#f9d888"
        d="M0 0h-186.227c-27.643 0-50.051-22.409-50.051-50.052v-131.135h465.879v131.135C229.601-22.409 207.192 0 179.549 0H0"
        data-original="#f9d888"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(274.9 485.426)"
      />
      <path
        fill="#f8d070"
        d="M0 0c-39.962 0-73.054-29.979-77.97-68.627h-187.977a79.944 79.944 0 0 1-18.93-2.281v-77.77h465.878v131.136c0 .222-.013.439-.016.66C167.602-6.324 150.732 0 132.402 0Z"
        data-original="#f8d070"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(323.498 452.916)"
      />
      <path
        fill="#f9f097"
        d="M0 0h-132.402c-26.841 0-48.599-21.758-48.599-48.599v-20.028H-398.35c-27.642 0-50.051-22.408-50.051-50.051V-346.29c0-27.643 22.409-50.052 50.051-50.052H-1.452c27.642 0 50.051 22.409 50.051 50.052v297.691C48.599-21.759 26.841 0 0 0"
        data-original="#f9f097"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(455.9 422.916)"
      />
      <path
        fill="#f9d888"
        d="M0 0c0 42.723 8.303 83.5 23.353 120.834H10.757c-27.642 0-50.051-22.408-50.051-50.051v-227.612c0-27.643 22.409-50.052 50.051-50.052h46.711C17.767-150.81 0-78.692 0 0"
        data-original="#f9d888"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(46.794 233.455)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h74.311"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(352.544 378.228)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v76.594L51.785 1.606c.96-1.386 1.988-.707 1.988.98l-.717 74.151"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(74.252 152.142)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-32.039v-76.036H0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(357.871 228.178)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-29.676"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(355.509 190.16)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v-73.18"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(244.059 226.531)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-20.518-11.388-36.754-29.455-37.069-6.014-.106-21.557-.164-21.557-.164s-.097 26.972-.097 37.315c0 8.495-.054 37.151-.054 37.151h21.091C-10.255 37.233 0 20.519 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(295.221 189.375)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0s-13.77 11.574-30.007 6.683C-44.917 2.191-47.002-15-36.216-22.032c0 0 10.585-4.723 22.324-9.053 28.26-10.424 16.087-37.764-6.663-37.764-11.392 0-20.954 4.99-26.741 11.375"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(435.212 220.99)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v-52.804c0-8.992 4.46-15.047 12.038-19.888 3.691-2.358 8.352-4.037 14.145-4.045 5.017-.007 9.209 1.154 12.676 2.9 8.831 4.447 14.462 11.201 14.462 21.089V0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(159.504 228.879)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-365.776c-27.643 0-50.052-22.409-50.052-50.052v-84.8a49.893 49.893 0 0 0 18.931 3.715h217.348v20.029c0 26.84 21.758 48.598 48.599 48.598H1.452c26.841 0 48.599-21.758 48.599-48.598v61.056C50.051-22.409 27.643 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(454.449 485.426)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v-58.499c0-27.643 22.409-50.052 50.051-50.052h396.898c27.642 0 50.051 22.409 50.051 50.052v184.132"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(7.5 135.125)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v83.56c0 26.84-21.758 48.598-48.599 48.598h-132.402c-26.841 0-48.6-21.758-48.6-48.598V63.531h-217.348C-474.591 63.531-497 41.123-497 13.48v-139.113"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(504.5 290.758)"
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
