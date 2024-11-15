import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Akita = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag akita ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 285.71428}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0h1000v700H0z" fill="#900" />
        <path
          fill="#fff"
          d="m150 90 425 170c50.34555 22.200475 69.8334 31.99913 103.1941 49.71588 33.96635 18.038395 71.63535 36.391155 100 61.17647C801.266 391.052805 824.721 419.36213 825 450c.2995 32.9105-24.90235 64.21875-46.8059 68.9659L260 610c23.96628-7.47605 43.24213-14.2485 57.827545-26.6495a74.34491 74.34491 0 1 1 62.48999 5.512635c10.45154-2.1936 18.913105-6.37725 34.3396-16.0333L575 470.700635c18.91055-12.60068 35.2189-38.59927 32.22015-61.567175-5.2518-40.224235-47.7778-66.381065-82.22015-89.721695z"
        />
      </svg>
    );
  },
);

Akita.displayName = "Akita";

export default Akita;