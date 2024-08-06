import * as React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
type IconProps = React.ComponentPropsWithoutRef<"div"> & {
  src: any;
  alt?: string;
  colorScheme?: "default" | "white";
};

const Icon: React.FC<IconProps> = ({
  src,
  alt = "",
  colorScheme = "default",
  className = "",
  ...rest
}) => {
  return (
    <div {...rest} className={twMerge("", className)}>
      <Image
        src={src}
        alt={alt}
        className={colorScheme === "white" ? "brightness-0 invert-[1]" : ""}
      />
    </div>
  );
};

export default Icon;
