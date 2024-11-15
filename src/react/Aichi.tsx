import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Aichi = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag aichi ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        ref={ref}
        width={width ?? 285.71428}
        height={height ?? 200}
        className={newClassname}
      >
        <path fill="#a63c47" fill-rule="evenodd" d="M0 0h1000v700H0z" />
        <path
          fill="#fff"
          d="M601 257a160.6 160.6 0 0 0-59.6 62s42.7 23.4 42.2 73c0 3.8-.3 7.6-.8 11.1a143.3 143.3 0 0 1-172.6 131A168.3 168.3 0 0 0 601 257z"
        />
        <path
          fill="#fff"
          d="M439.5 529.8a138 138 0 0 0 130.2-92.2 91.6 91.6 0 0 1-37.8 31.5 167.8 167.8 0 0 1 62-217.2c16-10 33.7-17.3 52.7-21.4 0 0-44.6-20.6-105.8-8 0 0-11.7-55.6-40-81.3l-1-1.2-.8 1.2c-28.4 25.7-40 81.4-40 81.4-61.3-12.7-105.9 7.9-105.9 7.9A167.8 167.8 0 0 1 467.8 469s-51.1-20.2-51.7-77.2c-.5-49.5 42.2-73 42.2-73a160.7 160.7 0 0 0-59.4-61.8 168 168 0 0 0-5.7 264.7c14.4 5.2 30 8 46.3 8z"
        />
      </svg>
    );
  },
);

Aichi.displayName = "Aichi";

export default Aichi;