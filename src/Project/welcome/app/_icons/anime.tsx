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
        fill="#c6c1c8"
        d="M0 0h-463.523c-9.245 0-16.739-7.494-16.739-16.738v-267.49c0-9.244 7.494-16.738 16.739-16.738H0c9.244 0 16.738 7.494 16.738 16.738v267.49C16.738-7.494 9.244 0 0 0"
        data-original="#c6c1c8"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(487.762 437.73)"
      />
      <path
        fill="#665e66"
        d="M0 0h-81.547l6.162 36.747h69.222z"
        data-original="#665e66"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(296.773 100.017)"
      />
      <path
        fill="#756e78"
        d="M0 0h-225.814a18.026 18.026 0 0 1-17.04-12.142l-2.714-7.855c-.973-2.815 1.118-5.749 4.096-5.749H15.657c2.978 0 5.07 2.934 4.097 5.749l-2.714 7.855A18.028 18.028 0 0 1 0 0"
        data-original="#756e78"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(368.907 100.017)"
      />
      <path
        fill="#ffece4"
        d="M0 0v-248.241c0-.753.61-1.363 1.362-1.363h444.276c.752 0 1.362.61 1.362 1.363V0c0 .753-.61 1.362-1.362 1.362H1.362A1.362 1.362 0 0 1 0 0"
        data-original="#ffece4"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(32.5 411.367)"
      />
      <path
        fill="#ffddce"
        d="M0 0h-38.638v-154.653c0-42.148-34.167-76.314-76.314-76.314h-330.686v-18.637c0-.753.611-1.363 1.363-1.363H0c.753 0 1.362.61 1.362 1.363V-1.363C1.362-.61.753 0 0 0"
        data-original="#ffddce"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(478.138 412.73)"
      />
      <path
        fill="#fff"
        d="M0 0c-48.723 0-84.601-53.772-51.657-105.189.939-1.467 2.272-2.656 3.87-3.349 53.406-23.178 112.386-7.008 112.386 43.94C64.599-28.921 35.677 0 0 0"
        data-original="#ffffff"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(383.344 322.326)"
      />
      <path
        fill="#f1f1f4"
        d="M0 0c0-15.872-4.846-30.612-13.139-42.822C.105-33.742 8.442-19.504 8.442-.349 8.442 11.274 5.373 22.18 0 31.603Z"
        data-original="#f1f1f4"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(439.5 258.077)"
      />
      <path
        fill="#fff"
        d="M0 0c48.723 0 84.601-53.773 51.657-105.19-.939-1.467-2.272-2.656-3.87-3.349-53.406-23.178-112.386-7.008-112.386 43.94C-64.599-28.922-35.677 0 0 0"
        data-original="#ffffff"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(128.417 322.327)"
      />
      <path
        fill="#756e78"
        d="M0 0c-19.391 0-35.11-16.52-35.11-36.899 0-20.34 15.699-36.89 35.11-36.89 19.394 0 35.109 16.535 35.109 36.89C35.109-16.52 19.39 0 0 0"
        data-original="#756e78"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(145.26 305.485)"
      />
      <path
        fill="#9dc6fb"
        d="M0 0c-6.42-7.39-15.67-12.029-25.94-12.029-10.281 0-19.531 4.649-25.93 12.039l4.717 4.717c5.577 5.578 13.226 8.334 21.113 8.244h.199c7.888.09 15.536-2.666 21.113-8.244z"
        data-original="#9dc6fb"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(171.172 243.726)"
      />
      <path
        fill="#fff"
        d="M0 0c0-6.911-5.602-12.513-12.513-12.513-6.91 0-12.511 5.602-12.511 12.513 0 6.91 5.601 12.512 12.511 12.512C-5.602 12.512 0 6.91 0 0"
        data-original="#ffffff"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(146.209 289.459)"
      />
      <path
        fill="#e4936b"
        d="m0 0 .69-.009a38.631 38.631 0 0 1 31.855 16.11l38.393 53.517a32.467 32.467 0 0 0 35.55 12.219l42.68-12.569c2.201-.649 2.735-3.522.914-4.918L42.386-18.193c-11.705-8.971-28.269-7.775-38.563 2.785l-7.244 7.431C-6.341-4.981-4.184.05 0 0"
        data-original="#e4936b"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(286.09 303.092)"
      />
      <path
        fill="#e4936b"
        d="m0 0-.69-.009a38.631 38.631 0 0 0-31.855 16.11l-38.393 53.517a32.467 32.467 0 0 1-35.55 12.219l-42.68-12.569c-2.201-.649-2.735-3.522-.914-4.918l107.696-82.543c11.705-8.971 28.269-7.775 38.563 2.785l7.244 7.431C6.341-4.981 4.184.05 0 0"
        data-original="#e4936b"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(225.91 303.092)"
      />
      <path
        fill="#756e78"
        d="M0 0c19.39 0 35.11-16.52 35.11-36.899 0-20.34-15.7-36.89-35.11-36.89-19.394 0-35.11 16.535-35.11 36.89C-35.11-16.52-19.39 0 0 0"
        data-original="#756e78"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(366.769 305.485)"
      />
      <path
        fill="#9dc6fb"
        d="M0 0c6.42-7.39 15.67-12.029 25.94-12.029 10.281 0 19.531 4.649 25.93 12.039l-4.717 4.717c-5.577 5.578-13.226 8.334-21.113 8.244h-.199c-7.888.09-15.536-2.666-21.113-8.244Z"
        data-original="#9dc6fb"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(340.828 243.726)"
      />
      <path
        fill="#fff"
        d="M0 0c0-6.911-5.602-12.513-12.513-12.513-6.91 0-12.511 5.602-12.511 12.513 0 6.91 5.601 12.512 12.511 12.512C-5.602 12.512 0 6.91 0 0"
        data-original="#ffffff"
        style={{
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
        }}
        transform="translate(367.746 289.459)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-164.785a18.027 18.027 0 0 1-17.04-12.142l-2.714-7.855c-.973-2.815 1.118-5.749 4.097-5.749H76.687c2.977 0 5.069 2.934 4.096 5.749l-2.714 7.855A18.026 18.026 0 0 1 61.029 0H35"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(307.878 100.017)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-11.979a1.362 1.362 0 0 1-1.363-1.362v-248.242c0-.752.611-1.363 1.363-1.363h444.275c.752 0 1.362.611 1.362 1.363V-1.362c0 .753-.61 1.362-1.362 1.362H35"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(45.842 412.73)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-463.523c-9.245 0-16.739-7.494-16.739-16.738v-267.49c0-9.244 7.494-16.738 16.739-16.738H0c9.244 0 16.738 7.494 16.738 16.738v267.49C16.738-7.494 9.244 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(487.762 437.73)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-54.01-24.691-114.733-8.801-114.733 42.895 0 35.676 28.921 64.597 64.598 64.597 2.188 0 4.35-.108 6.482-.32"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(178.791 214.834)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-19.391 0-35.11-16.52-35.11-36.899 0-20.34 15.699-36.89 35.11-36.89 19.394 0 35.109 16.535 35.109 36.89C35.109-16.52 19.39 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(145.26 305.485)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0a29.636 29.636 0 0 0-6.099-32.268l-7.245-7.431"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(253.592 308.968)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 4.717 4.717c5.577 5.578 13.226 8.334 21.113 8.244h.199c7.888.09 15.536-2.666 21.114-8.244L51.87-.01"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(119.302 243.735)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-6.911-5.602-12.513-12.513-12.513-6.91 0-12.511 5.602-12.511 12.513 0 6.91 5.601 12.512 12.511 12.512C-5.602 12.512 0 6.91 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(146.209 289.459)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(145.231 268.59)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 15.971 22.262a32.464 32.464 0 0 0 35.55 12.218L94.2 21.911c2.201-.648 2.736-3.521.914-4.918L-12.582-65.55c-11.705-8.971-28.269-7.774-38.563 2.785l-7.244 7.432c-2.92 2.995-.762 8.026 3.421 7.977l.691-.009a38.626 38.626 0 0 1 31.854 16.109l1.592 2.22"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(341.058 350.448)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0-.69-.009a38.631 38.631 0 0 0-31.855 16.11l-38.393 53.517a32.467 32.467 0 0 1-35.55 12.219l-42.68-12.569c-2.201-.649-2.735-3.522-.914-4.918l107.696-82.543c11.705-8.971 28.269-7.775 38.563 2.785l7.244 7.431C6.341-4.981 4.184.05 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(225.91 303.092)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c54.01-24.691 114.734-8.801 114.734 42.895 0 35.676-28.921 64.597-64.598 64.597a65.51 65.51 0 0 1-6.483-.32"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(333.236 214.834)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c19.39 0 35.11-16.52 35.11-36.899 0-20.34-15.7-36.89-35.11-36.89-19.394 0-35.11 16.535-35.11 36.89C-35.11-16.52-19.39 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(366.769 305.485)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0-4.717 4.717c-5.577 5.578-13.226 8.334-21.113 8.244h-.199c-7.888.09-15.536-2.666-21.114-8.244L-51.87-.01"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(392.698 243.735)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-6.911-5.602-12.513-12.513-12.513-6.91 0-12.511 5.602-12.511 12.513 0 6.91 5.601 12.512 12.511 12.512C-5.602 12.512 0 6.91 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(367.746 289.459)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(366.769 268.59)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 3.579-12.305A33.335 33.335 0 0 0 .285-38.549l-3.612-6.125"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(265 235.436)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 6.163-36.747"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(290.61 136.764)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 6.162 36.747"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        transform="translate(215.227 100.017)"
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
