import React, { forwardRef } from "react";
import { PrefectureFlagProps } from "./types";

const Okayama = forwardRef<SVGSVGElement, PrefectureFlagProps>(
  ({ width, height, className }, ref) => {
    const newClassname = `prefecture-flag okayama ${className}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        ref={ref}
        width={width ?? 300}
        height={height ?? 200}
        className={newClassname}
      >
        <rect width="1350" height="900" style={{ fill: "#650065" }} />
        <path
          d="m 1007.4455,322.34028 -117.395,0.17607 C 840.31141,241.56201 775.41683,201.05401 674.9993,200 583.49889,200 503.51434,249.17009 459.95318,322.51635 l -117.39877,-0.17607 332.44622,196.80901 332.44617,-196.80902 0,0 0,1e-5 z m -455.94788,-16.86067 92.32153,54.65714 0,-97.71379 c 10.14789,-1.67777 20.55821,-2.58182 31.18016,-2.58182 10.62195,0 21.03227,0.90406 31.17678,2.58182 l 0,97.71379 92.3266,-54.65714 c 15.79071,13.52037 29.33308,29.57685 40.00921,47.54987 L 674.99931,449.82901 511.48502,353.02948 c 10.67782,-17.97302 24.21852,-34.02949 40.0126,-47.54987 z"
          id="path5"
          style={{ fill: "#fed61c" }}
        />
        <path
          d="m 864.09835,429.92937 c 0.69076,6.59598 1.05983,13.28843 1.05983,20.07064 0,87.76055 -59.46697,161.59441 -140.29127,183.51211 l -49.8676,-93.08676 -49.86421,93.08508 c -80.826,-21.91602 -140.29466,-95.74988 -140.29466,-183.51043 0,-6.78389 0.36907,-13.47466 1.06151,-20.07064 l -55.26661,-32.7208 c -3.66198,17.02322 -5.63603,34.67284 -5.63603,52.79144 0,138.07004 111.92826,249.99999 250,249.99999 138.07003,0 250,-111.92998 250,-250 0,-18.1186 -1.97406,-35.76822 -5.63604,-52.79144 l -55.26492,32.7208 z"
          id="path7"
          style={{ fill: "#fed61c" }}
        />
      </svg>
    );
  },
);

Okayama.displayName = "Okayama";

export default Okayama;
