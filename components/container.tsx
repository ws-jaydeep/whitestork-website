import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "wide" | "narrow" | "full";

const widthClassName: Record<ContainerWidth, string> = {
  default: "max-w-7xl",
  wide: "max-w-[1320px]",
  narrow: "max-w-[1100px]",
  full: "max-w-none",
};

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  width?: ContainerWidth;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function Container<T extends ElementType = "div">({
  as,
  width = "default",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10",
        widthClassName[width],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
