import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Saitama = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag saitama ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-247.5 -90 945 630"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-247.5-90h945v630h-945z" fill="#fff" />
        <g id="c">
          <g id="b">
            <path
              id="a"
              d="M224.32 106.709c-38.064-18.05-46.25-72.399-16.814-98.437 6.09-5.428 15.689-9.135 24.272-8.098 16.726 1.986 28.951 16.417 26.634 33.827-1.545 11.342-8.87 20.345-18.668 24.516-15.689 6.73-20.212 28.928-4.656 41.947 4.325 3.95 10.35 3.751 8.849 8.694-1.434 4.965-11.607 1.302-19.617-2.45M307.068 21.115c22.705 33.364 6.244 81.975-30.385 90.89-7.635 1.853-17.101.64-23.92-4.171-13.24-9.18-17.763-27.759-8.275-41.77 6.951-10.13 15.425-13.527 27.362-13.704 13.924-.176 24.648-14.652 23.412-27.935-.441-5.12-7.37-12.578-2.714-15.6 3.354-2.274 9.82 5.229 14.52 12.29"
              fill="#ed1c24"
            />
            <use transform="rotate(180 225 225)" xlinkHref="#a" />
          </g>
          <use transform="rotate(90 225 225)" xlinkHref="#b" />
        </g>
        <use transform="rotate(45 225 225)" xlinkHref="#c" />
      </svg>
    );
  },
);

Saitama.displayName = "Saitama";

export default Saitama;
