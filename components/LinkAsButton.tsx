import * as React from "react";
import Link from "next/link";
import  getButtonClasses  from "./getButtonClasses"; 
import Icon from "./Icon";

type LinkAsButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "outline";
  colorScheme?: "blue" | "gray" | "white";
  size?: "sm" | "md" | "responsive";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({
  variant,
  colorScheme,
  size,
  iconLeft,
  iconRight,
  className,
  children,
  href,
  ...rest
}) => {
  return (
    <Link 
      href={href!}
      {...rest}
      className={getButtonClasses({ variant, colorScheme, size, className })}
    >
      {Boolean(iconLeft) && <Icon src={iconLeft} className="mr-2" />}
      {children}
      {Boolean(iconRight) && <Icon src={iconRight} className="ml-2" />}
    </Link>
  );
};
