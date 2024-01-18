import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    viewBox="0 0 512 512" // Define the viewBox attribute
    preserveAspectRatio="xMidYMid meet" // Preserve aspect ratio
    {...props}
  >
    <path
      fill="#303c42"
      d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0z"
      data-original="#303c42"
    />
    <path
      fill="#e6e6e6"
      d="M256 490.667C126.604 490.667 21.333 385.396 21.333 256S126.604 21.333 256 21.333 490.667 126.604 490.667 256 385.396 490.667 256 490.667z"
      data-original="#e6e6e6"
    />
    <path
      fill="#303c42"
      d="M202.667 362.667c-1.75 0-3.521-.438-5.104-1.302A10.653 10.653 0 0 1 192 352V160c0-3.906 2.125-7.49 5.563-9.365 3.375-1.865 7.604-1.729 10.875.396l149.333 96c3.042 1.958 4.896 5.344 4.896 8.969s-1.854 7.01-4.896 8.969l-149.333 96a10.62 10.62 0 0 1-5.771 1.698z"
      data-original="#303c42"
    />
    <path
      fill="#78909c"
      d="M213.333 179.542v152.916L332.271 256z"
      data-original="#78909c"
    />
    <path
      d="M213.333 256v76.458L332.271 256z"
      data-original="#000000"
      style={{
        opacity: 0.1,
      }}
    />
    <title>Play Icon</title>
    <linearGradient
      id="a"
      x1={-34.243}
      x2={-27.58}
      y1={632.742}
      y2={626.075}
      gradientTransform="matrix(21.3333 0 0 -21.3333 996.333 13791.667)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        stopColor="#000000;stop-opacity:0.1"
        style={{
          stopColor: '#000',
          stopOpacity: 0.1,
        }}
      />
      <stop
        offset={1}
        stopColor="#000000;stop-opacity:0"
        style={{
          stopColor: '#000',
          stopOpacity: 0,
        }}
      />
    </linearGradient>
    <path
      d="m362.314 253.301-.289.19c.214.844.642 1.618.642 2.509 0 3.625-1.854 7.01-4.896 8.969l-149.333 96a10.62 10.62 0 0 1-5.771 1.698c-1.75 0-3.521-.438-5.104-1.302l120.663 120.663c65.57-18.082 119.585-63.87 148.788-124.027l-104.7-104.7z"
      style={{
        fill: 'url(#a)',
      }}
    />
    <linearGradient
      id="b"
      x1={-45.578}
      x2={-23.828}
      y1={639.555}
      y2={629.414}
      gradientTransform="matrix(21.3333 0 0 -21.3333 996.333 13791.667)"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset={0}
        stopColor="#ffffff;stop-opacity:0.2"
        style={{
          stopColor: '#fff',
          stopOpacity: 0.2,
        }}
      />
      <stop
        offset={1}
        stopColor="#ffffff;stop-opacity:0"
        style={{
          stopColor: '#fff',
          stopOpacity: 0,
        }}
      />
    </linearGradient>
    <path
      d="M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0z"
      style={{
        fill: 'url(#b)',
      }}
    />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
