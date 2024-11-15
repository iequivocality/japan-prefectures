import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Chiba = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag chiba ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-450 -294 900 600"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <path d="M-450-294h900v600h-900z" fill="#006da5" />
        <path
          d="M0-200 40-140 0-100-40-140 0-200 28.867513-50 173.205081-100 57.735027 0 173.205081 100 28.867513 50 0 200-28.867513 50-173.205081 100-57.735027 0-173.205081-100 -28.867513-50z"
          fill="#fece60"
        />
        <path
          d="M0-183.775019 28.418839-141.146761 6.398899-119.126821 21.99365-38.094119 131.9619-76.188238 26.39238 15.237648 0 152.376476-26.39238 15.237648-131.9619-76.188238-21.99365-38.094119-6.398899-119.126821-28.418839-141.146761zM34.641016 20 50.861163 5.95294 131.9619 76.188238 30.585979 41.070589zM-34.641016 20-50.861163 5.95294-131.9619 76.188238-30.585979 41.070589z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Chiba.displayName = "Chiba";

export default Chiba;