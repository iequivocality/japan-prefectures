import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Ehime = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag ehime  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path fill="#0e6d46" d="M0 40h300v120H0z" />
        <path
          d="M119.999 50s-11.069 7.451-11.755 36.403c-27.746-8.294-38.245-.108-38.245-.108s3.664 12.828 30.986 22.427c-16.469 23.832-11.864 36.349-11.864 36.349s13.295.51 30.877-22.535c17.583 23.045 30.877 22.535 30.877 22.535s4.596-12.526-11.864-36.349c27.322-9.6 30.986-22.373 30.986-22.373s-10.499-8.239-38.245.054C131.066 57.451 119.997 50 119.997 50z"
          fill="#fff"
        />
        <path
          d="M119.999 86.511c-8.873 0-16.089 7.162-16.089 16.035a16.11 16.11 0 0 0 16.089 16.089 16.11 16.11 0 0 0 16.089-16.089c0-8.873-7.216-16.035-16.089-16.035zm0 5.363a10.67 10.67 0 0 1 10.672 10.672c0 5.896-4.776 10.726-10.672 10.726s-10.672-4.83-10.672-10.726a10.67 10.67 0 0 1 10.672-10.672zM0 0h300v40H0zm0 160h300v40H0z"
          fill="#ffa600"
        />
      </svg>
    );
  },
);

Ehime.displayName = "Ehime";

export default Ehime;