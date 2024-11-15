import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Kochi = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag kochi  ${className ?? ""}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 270 180"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M0 0H270V180H0z" fill="#7b171c" />
        <path
          d="M135 22L151.095748 93.37a16.5 16.5 0 1 1-32.191496 0zM75.018753 95.5a60 60 0 0 1 119.962494 0h-25.513871a34.5 34.5 0 0 0-68.934752 0zM75.018753 98.5a60 60 0 0 0 119.962494 0h-25.513871a34.5 34.5 0 0 1-68.934752 0z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Kochi.displayName = "Kochi";

export default Kochi;