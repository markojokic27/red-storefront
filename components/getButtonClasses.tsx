import { twMerge } from "tailwind-merge";

export default function getButtonClasses({
  variant = "solid",
  colorScheme = "blue",
  size = "md",
  className,
}: {
  variant?: "solid" | "outline";
  colorScheme?: "blue" | "gray" | "white";
  size?: "sm" | "md" | "responsive";
  className?: string;
}) {
  return twMerge(
    "rounded-sm text-base font-bold italic weight-700 border-20 flex items-center justify-center leading-none",
    colorScheme === "blue"
      ? "border-blue-700 text-blue-700 bg-blue-700 hover:bg-blue-900 disabled:bg-blue-100"
      : colorScheme === "gray"
      ? "border-gray-700 text-gray-400 bg-gray-400 hover:bg-gray-600 disabled:bg-gray-100"
      : colorScheme === "white"
      ? "border-white text-white bg-white hover:bg-gray-600 disabled:bg-gray-100"
      : null,
    variant === "solid" && "text-white",
    variant === "outline" &&
      "border-1 bg-transparent hover:bg-transparent hover:border-blue-900 hover:text-blue-900 disabled:bg-transparent disabled:border-blue-100 disabled:text-blue-100",
    size === "sm" && "px-6 py-2",
    size === "md" && "px-8 py-2",
    size === "responsive" && "px-6 py-2 lg:px-8 lg:py-2",
    className
  );
}
