import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Hiroshima = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag hiroshima  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H900V600H0z" fill="#ab3748" />
        <path
          d="M8.154964-49.330483A25.753829 25.753829 0 1 0 38.643969-31.727648 40.38433 40.38433 0 0 1-21.810834 13.987963 42 42 0 0 0 49.58513 6.427663 50 50 0 1 1 8.154964-49.330483z"
          fill="#fff"
          transform="translate(450 300) scale(3.6)"
        />
      </svg>
    );
  },
);

Hiroshima.displayName = "Hiroshima";

export default Hiroshima;