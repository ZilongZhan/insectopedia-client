import type { ComponentProps, PropsWithChildren } from "react";

import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  modifier?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  modifier,
  action,
  children,
  ...buttonProps
}) => {
  const modifierClass = modifier ? ` button--${modifier}` : "";

  return (
    <button
      className={`button${modifierClass}`}
      onClick={action}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
