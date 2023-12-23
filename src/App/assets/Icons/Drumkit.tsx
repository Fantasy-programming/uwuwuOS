import { SVGProps, memo } from "react";
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
        fill="#dbedff"
        d="m0 0-46.75 5.639c-16.158 1.249-33.262 1.922-50.973 1.922-17.565 0-34.534-.663-50.575-1.891L-195.025.072c-49.287-8.33-81.901-22.803-81.901-39.266 0-25.823 80.232-49.755 179.203-49.755 98.972 0 179.204 23.932 179.204 49.755C81.481-22.778 49.05-8.342 0 0"
        data-original="#dbedff"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(353.457 296.443)"
      />
      <path
        fill="#b5dcff"
        d="M0 0c0 17.416 18.543 32.878 47.215 42.616l-29.734-3.561C-31.806 30.725-64.42 16.251-64.42-.212c0-20.117 48.697-39.085 117.012-46.486C20.877-36.118 0-18.484 0 0"
        data-original="#b5dcff"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(140.951 257.46)"
      />
      <path
        fill="#ffe97b"
        d="M0 0c-3.559-4.969-9.153-8.007-15.243-8.523a24.581 24.581 0 0 1-18.161-10.505c-6.988-10.031-5.431-23.962 3.593-32.208 10.601-9.687 26.995-8.301 35.857 2.714 4.489 5.579 6.149 12.514 5.171 19.079-.88 5.9 1.13 11.868 5.123 16.298l140.127 155.486c8.545 9.48 7.367 24.194-2.577 32.195-9.944 8.001-24.569 6.002-32.001-4.374z"
        data-original="#ffe97b"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(342.34 325.052)"
      />
      <path
        fill="#ffe97b"
        d="M0 0c3.559-4.969 9.152-8.007 15.242-8.523a24.581 24.581 0 0 0 18.162-10.505c6.988-10.031 5.431-23.962-3.593-32.208-10.601-9.687-26.995-8.301-35.857 2.714-4.489 5.579-6.149 12.514-5.171 19.079.88 5.9-1.13 11.868-5.123 16.298l-140.127 155.486c-8.545 9.48-7.367 24.194 2.577 32.195 9.944 8.001 24.569 6.002 32.001-4.374z"
        data-original="#ffe97b"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(169.541 325.052)"
      />
      <path
        fill="#f4dd45"
        d="M0 0a24.58 24.58 0 0 0 18.162 10.506c6.089.516 11.683 3.555 15.242 8.523l121.888 170.162c4.096 5.717 10.375 8.885 16.851 9.245a22.383 22.383 0 0 1-3.13 3.074c-9.944 8.001-24.569 6.002-32.001-4.374L15.123 26.974C11.564 22.005 5.97 18.967-.12 18.45A24.581 24.581 0 0 1-18.281 7.945c-6.988-10.03-5.431-23.962 3.593-32.208a24.562 24.562 0 0 1 16.815-6.473C-5.574-22.379-6.589-9.457 0 0"
        data-original="#f4dd45"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(327.216 298.078)"
      />
      <path
        fill="#f4dd45"
        d="M0 0c-4.489 5.579-6.148 12.516-5.17 19.079.879 5.9-1.13 11.868-5.124 16.299l-140.127 155.485c-7.836 8.695-7.489 21.787.292 30.071a22.106 22.106 0 0 1-12.714-4.875c-9.945-8.001-11.122-22.715-2.578-32.196L-25.294 28.378c3.994-4.431 6.003-10.399 5.124-16.299-.978-6.563.681-13.5 5.17-19.079 8.862-11.015 25.257-12.4 35.857-2.714.221.202.416.422.628.63C13.535-9.816 5.38-6.687 0 0"
        data-original="#f4dd45"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(178.495 283.53)"
      />
      <path
        fill="#477b9e"
        d="M0 0c92.597 0 169.661 18.323 179.204 41.831v37.122c0-25.822-80.232-46.755-179.204-46.755-98.972 0-179.204 20.933-179.204 46.755V46.755C-179.204 20.933-98.972 0 0 0"
        data-original="#477b9e"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(255.734 178.296)"
      />
      <path
        fill="#365e7d"
        d="M0 0c-35.947 8.551-58.506 20.868-58.506 34.56V2.361c0-13.691 22.559-26.007 58.506-34.559z"
        data-original="#365e7d"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(135.037 222.69)"
      />
      <path
        fill="#477b9e"
        d="M0 0c-98.972 0-179.204 20.933-179.204 46.755v-30.23c0-25.821 80.232-46.754 179.204-46.754 98.972 0 179.204 20.933 179.204 46.754v25.306C169.661 18.323 92.597 0 0 0"
        data-original="#477b9e"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(255.734 37.73)"
      />
      <path
        fill="#365e7d"
        d="M0 0c-35.947 8.551-58.506 20.867-58.506 34.56V4.33c0-13.691 22.559-26.008 58.506-34.559z"
        data-original="#365e7d"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(135.037 49.926)"
      />
      <path
        fill="#f87c68"
        d="M0 0c-98.972 0-179.204 20.933-179.204 46.755V-97.811c0-25.822 80.232-46.754 179.204-46.754 98.972 0 179.204 20.932 179.204 46.754V46.755C179.204 20.933 98.972 0 0 0"
        data-original="#f87c68"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(255.734 180.296)"
      />
      <path
        fill="#ec625e"
        d="M0 0c-35.947 8.552-58.506 20.868-58.506 34.56v-144.566c0-13.692 22.559-26.009 58.506-34.559z"
        data-original="#ec625e"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(135.037 192.491)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-25.822-80.232-46.755-179.204-46.755-98.971 0-179.204 20.933-179.204 46.755"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(434.998 227.05)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-25.822 80.232-46.755 179.204-46.755 98.972 0 179.204 20.933 179.204 46.755"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(76.59 82.485)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 51.611-146.537"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(204.183 182.268)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 63.121 135.697"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(141.063 46.57)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 55.774-166.062"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(85.288 212.632)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0-51.611-146.537"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(307.406 182.268)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0-63.12 135.697"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(370.526 46.57)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0-55.774-166.062"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(426.3 212.632)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-3.559-4.969-9.153-8.007-15.243-8.523a24.581 24.581 0 0 1-18.161-10.505c-6.988-10.031-5.431-23.962 3.592-32.208 10.602-9.687 26.996-8.301 35.858 2.714 4.489 5.579 6.148 12.514 5.17 19.079-.879 5.9 1.131 11.868 5.124 16.298l140.127 155.486c8.545 9.48 7.367 24.194-2.577 32.195-9.945 8.001-24.569 6.002-32.002-4.374z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(342.4 325.052)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c3.559-4.969 9.153-8.007 15.243-8.523a24.581 24.581 0 0 0 18.161-10.505c6.988-10.031 5.432-23.962-3.592-32.208-10.602-9.687-26.996-8.301-35.858 2.714-4.489 5.579-6.148 12.514-5.17 19.079.879 5.9-1.131 11.868-5.124 16.298l-140.127 155.486c-8.545 9.48-7.367 24.194 2.577 32.195 9.945 8.001 24.569 6.002 32.002-4.374z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(169.6 325.052)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v-24.454"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(255.794 370.472)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 12.227-21.177"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(203.14 356.362)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 12.227 21.177"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(296.222 335.185)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0a649.51 649.51 0 0 1-33.281-1.668c4.27-9.502 2.094-21.079-5.807-28.298-10.601-9.686-26.995-8.301-35.858 2.714-4.488 5.578-6.148 12.516-5.17 19.079.045.303.078.605.108.907-49.286-8.33-81.902-22.803-81.902-39.266 0-25.823 80.233-46.755 179.204-46.755 98.972 0 179.204 20.932 179.204 46.755 0 16.416-32.431 30.852-81.481 39.194.028-.278.057-.557.099-.835.978-6.563-.682-13.501-5.17-19.079-8.863-11.015-25.257-12.4-35.858-2.714-7.892 7.211-10.071 18.771-5.821 28.267A649.45 649.45 0 0 1 35-.01"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(238.5 303.781)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v99.672C0 73.85-80.232 52.917-179.204 52.917c-98.971 0-179.204 20.933-179.204 46.755v-202.993c0-25.822 80.233-46.754 179.204-46.754C-80.232-150.075 0-129.143 0-103.321V-35"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(434.998 157.577)"
      />
    </g>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
