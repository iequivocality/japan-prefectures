import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Fukuoka = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag fukuoka  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-823.5 -576 1647 1152"
        ref={ref}
        width={width ?? 285.9375}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-823.5-576h1647v1152h-1647z" fill="#0068b2" />
        <g transform="translate(9 0) scale(38.5)">
          <path
            id="a"
            d="M-2.915713 -5.29387a3 3 0 1 1 5.831425 0 8.442992 8.442992 0 0 1 -3.379161 4.940045 8.681837 8.681837 0 0 0 -0.943527 -1.785952 6.442992 6.442992 0 0 0 2.378879 -3.624846 1 1 0 1 0 -1.943808 0 6.442992 6.442992 0 0 0 0.829151 1.947082 6.204148 6.204148 0 0 1 -1.406975 1.486268 8.442992 8.442992 0 0 1 -1.365984 -2.962597z"
            fill="#fff"
          />
          <g id="b">
            <use xlinkHref="#a" transform="rotate(72)" />
            <use xlinkHref="#a" transform="rotate(144)" />
          </g>
          <use xlinkHref="#b" transform="rotate(144)" />
        </g>
      </svg>
    );
  },
);

Fukuoka.displayName = "Fukuoka";

export default Fukuoka;
