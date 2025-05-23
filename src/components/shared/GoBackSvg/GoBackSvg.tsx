import type { SVGProps } from "react";

import "./GoBackSvg.css";

const GoBackSvg: React.FC<SVGProps<SVGSVGElement>> = ({ ...svgProps }) => {
  return (
    <svg
      className="go-back-icon"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <title>Go back icon</title>
      <path
        d="M5 0C2.243 0 0 2.243 0 5C0 7.757 2.243 10 5 10C7.757 10 10 7.757 10 5C10 2.243 7.757 0 5 0ZM6.23048 7.10285C6.408 7.28033 6.408 7.56815 6.23048 7.74567C6.14176 7.83439 6.02542 7.87879 5.90909 7.87879C5.79276 7.87879 5.67642 7.83442 5.5877 7.74564L3.16345 5.32145C3.07821 5.23621 3.0303 5.12061 3.0303 5.00006C3.0303 4.87952 3.07818 4.76388 3.16345 4.67864L5.5877 2.25433C5.76518 2.07682 6.053 2.07682 6.23052 2.25433C6.40803 2.43182 6.40803 2.71964 6.23052 2.89715L4.1277 5.00006L6.23048 7.10285Z"
        fill="black"
      />
    </svg>
  );
};

export default GoBackSvg;
