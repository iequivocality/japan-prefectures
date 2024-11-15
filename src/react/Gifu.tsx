import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Gifu = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag gifu  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <defs id="defs4" />
        <rect
          width="900"
          height="600"
          x="0"
          y="0"
          id="bg"
          style={{ fill: "#ffffff" }}
        />
        <path
          d="m 617.86516,300.03685 a 167.86517,167.86517 0 0 1 -335.73032,0 167.86517,167.86517 0 1 1 335.73032,0 z"
          id="circ"
          style={{
            fill: "none",
            stroke: "#00693f",
            strokeWidth: "24.26966286",
          }}
        />
        <path
          d="m 476.72191,173.8346 0,21.03371 -44.54494,0 0,32.35955 0,147.23596 -58.24719,0 0,-147.23596 12.94382,0 0,135.07584 32.35955,0 0,-167.46067 -77.66292,0.0252 0,32.35955 0,179.59551 122.96629,0 0,-179.59551 12.18539,0 0,45.30337 32.35955,0 12.08427,0 0,101.93259 -12.08427,0 0,-88.98877 -32.35955,0 0,121.34832 76.80337,0 0,-166.65169 -44.44382,0 0,-12.94382 44.44382,0 0,-32.35955 -44.44382,0 0,-21.03371 -32.35955,0 z"
          id="rect3143"
          style={{ fill: "#00693f" }}
        />
      </svg>
    );
  },
);

Gifu.displayName = "Gifu";

export default Gifu;
