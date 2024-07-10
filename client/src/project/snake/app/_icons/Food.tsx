import { SVGProps, memo } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="33"
    height="33"
    viewBox="0 0 512.001 512"
    {...props}
  >
    <path
      d="M509.148 188.172c-6.347-23.707-22.421-42.723-44.086-52.871 2.043-23.836-6.39-47.266-23.742-64.617-17.355-17.352-40.78-25.793-64.617-23.743-10.148-21.668-29.168-37.738-52.871-44.09C300.125-3.5 275.622.912 256 14.599 236.383.91 211.875-3.5 188.172 2.852c-23.707 6.351-42.723 22.425-52.871 44.09-23.836-2.044-47.266 6.39-64.617 23.742-17.356 17.351-25.79 40.78-23.746 64.617-21.665 10.148-37.735 29.164-44.086 52.87C-3.5 211.876.91 236.384 14.598 256 .91 275.621-3.5 300.129 2.852 323.832c6.351 23.703 22.421 42.723 44.086 52.871-2.043 23.836 6.39 47.266 23.746 64.617 17.351 17.352 40.78 25.793 64.617 23.743 10.144 21.664 29.164 37.738 52.867 44.085 23.707 6.352 48.21 1.946 67.832-11.746 13.707 9.563 29.8 14.602 46.336 14.598 7.133 0 14.355-.938 21.496-2.852 23.703-6.347 42.723-22.421 52.871-44.086 23.836 2.04 47.262-6.39 64.617-23.742 17.352-17.355 25.785-40.78 23.743-64.617 21.664-10.148 37.738-29.168 44.085-52.871 6.352-23.707 1.942-48.21-11.746-67.832 13.688-19.617 18.098-44.125 11.746-67.828zM407.434 277.96c0 65.871-53.594 119.465-119.465 119.465-65.875 0-119.465-53.59-119.465-119.465V263.5c0-49.086 39.934-89.02 89.02-89.02h3.613c47.093 0 85.406 38.313 85.406 85.403 0 30.726-24.996 55.722-55.719 55.722-30.726 0-55.722-24.996-55.722-55.722v-14.461h30v14.46c0 14.184 11.539 25.723 25.722 25.723 14.18 0 25.719-11.539 25.719-25.722 0-30.551-24.852-55.406-55.406-55.406h-3.614c-32.546 0-59.023 26.476-59.023 59.023v14.46c0 49.333 40.137 89.47 89.469 89.47s89.465-40.137 89.465-89.47v-23.765c0-66.875-54.407-121.351-121.282-121.433h-.156c-32.406 0-62.875 12.605-85.809 35.511-22.972 22.942-35.62 53.457-35.62 85.922v68.864H104.57v-68.864c0-40.484 15.774-78.535 44.418-107.144 28.602-28.563 66.598-44.29 107.008-44.29h.195c83.395.106 151.243 68.04 151.243 151.434zm0 0"
      data-original="#000000"
    />
    <title>Food snake</title>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;