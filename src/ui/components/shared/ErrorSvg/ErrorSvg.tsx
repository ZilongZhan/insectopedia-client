import type { SVGProps } from "react";

const ErrorSvg: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Error icon</title>
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#E15B64"
      />
      <path
        d="M14.5 25H17.5V22H14.5V25ZM14.5 6V19H17.5V6H14.5Z"
        fill="#EFEFEF"
      />
    </svg>
  );
};

export default ErrorSvg;
