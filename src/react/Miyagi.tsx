import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Miyagi = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag miyagi ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-75 0 150 100"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-75 0H75v100H-75z" fill="#00594c" />
        <path
          d="M-.348034 81.981808a61.954782 61.954782 0 0 1 15.244-28.455577 24.778368 24.778368 0 0 1 12.321733-7.122671 7.5 7.5 0 0 1 7.801207 11.701811 24.772462 24.772462 0 0 1 -21.357786 10.19367 39.354517 39.354517 0 0 1 -27.812471-13.802399 24.776318 24.776318 0 0 0 -13.066348-8.093082 7.5 7.5 0 0 0 -7.801207 11.701811 24.772462 24.772462 0 0 0 13.690628 9.384483 13.956369 13.956369 0 0 0 11.7496-2.175715A47.261774 47.261774 0 0 0 6.928834 43.790055a24.742838 24.742838 0 0 0 .104282-17.394913 7.5 7.5 0 0 0 -14.066232-.03 24.775416 24.775416 0 0 0 0 17.239716 7.5 7.5 0 0 0 4.516088 4.460166"
          stroke-width="9"
          fill="none"
          stroke="#fff"
        />
        <path
          d="M4.035262 83H-5.977597A44.304561 44.304591 0 0 1 -.962178 69.545306zm-6.848508-40.958057A3 3 0 0 0 .96585 43.84027a41.761775 41.761775 0 0 1 -4.993095 8.463769z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Miyagi.displayName = "Miyagi";

export default Miyagi;