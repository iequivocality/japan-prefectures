import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Tokyo = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag tokyo ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <rect width="900" height="600" style={{ fill: "#fff" }} />
        <path
          d="m 450,130.90122 c -99.35999,0 -180,80.64323 -180,180.00719 0,0.0226 0,0.0449 0,0.0675 96.83058,2.86333 174.55222,82.33678 174.6,179.8497 1.79709,0.0531 3.59011,0.09 5.4,0.09 1.80994,0 3.60285,-0.0369 5.4,-0.09 0.0478,-97.51292 77.76941,-176.98636 174.6,-179.8497 0,-0.0226 0,-0.0449 0,-0.0675 0,-99.36397 -80.64001,-180.00719 -180,-180.00719 z"
          style={{ fill: "#199332" }}
        />
      </svg>
    );
  },
);

Tokyo.displayName = "Tokyo";

export default Tokyo;