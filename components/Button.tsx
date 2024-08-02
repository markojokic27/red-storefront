"use client";

import * as React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  AriaButtonProps & {
    variant?: "solid" | "outline";
    colorScheme?: "blue" | "gray";
    size?: "sm" | "md";
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  colorScheme = "blue",
  size = "md",
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
      className={twMerge(
        "leading-4 rounded-sm text-base font-bold italic weight-700",
        colorScheme === "blue"
          ? "border-blue-700 text-blue-700 bg-blue-700 hover:bg-blue-900 disabled:bg-blue-100"
          : colorScheme === "gray"
            ? "border-gray-700 text-gray-400 bg-gray-400 hover:bg-gray-600 disabled:bg-gray-100"
            : null,
        variant === "solid" && "text-white",
        variant === "outline" &&
          "border-2 bg-transparent hover:bg-transparent hover:border-blue-900 hover:text-blue-900 disabled:bg-transparent disabled:border-blue-100 disabled:text-blue-100",
        size === "sm" && "px-6 py-2",
        size === "md" && "px-8 py-2",
        className,
      )}
    >
      {Boolean(iconLeft) && iconLeft}
      {children}
      {Boolean(iconRight) && iconRight}
    </AriaButton>
  );
};
export default Button;
