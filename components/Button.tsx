import * as React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import Icon from "./Icon";
import getButtonClasses from "./getButtonClasses"; 

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  AriaButtonProps & {
    variant?: "solid" | "outline";
    colorScheme?: "blue" | "gray" | "white";
    size?: "sm" | "md" | "responsive";
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export const Button: React.FC<ButtonProps> = ({
  variant,
  colorScheme,
  size,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}) => {
  return (
    <AriaButton
      {...rest}
      isDisabled={rest.disabled}
      className={getButtonClasses({ variant, colorScheme, size, className })}
    >
      {Boolean(iconLeft) && <Icon src={iconLeft} className="mr-2" />}
      {children}
      {Boolean(iconRight) && <Icon src={iconRight} className="ml-2" />}
    </AriaButton>
  );
};

export default Button;