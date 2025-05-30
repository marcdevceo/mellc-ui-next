import {
  alignItemsClass,
  flexDirection,
  gapClass,
  justifyContentClass,
  marginClass,
  paddingClass,
  spacingX,
  spacingY,
  bgColor,
} from "@/theme";
import { ContainerProps, SpacerProps } from "@/types/spacing";
import clsx from "clsx";

export default function SpacerX({
  size = "sm",
  children,
  className = "",
}: SpacerProps) {
  return <span className={clsx(spacingX[size], className)}>{children} </span>;
}
export function SpacerY({ size = "lg" }: SpacerProps) {
  return <div className={`${spacingY[size]}`} />;
}

export function Main({
  children,
  flex = "column",
  bgVarient = "none",
  margin = "primary",
  gap = "none",
  padding = "none",
  justifyContent = "left",
  alignItems = "left",
  width = "",
  centered = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        bgColor[bgVarient],
        "flex min-h-screen",
        flexDirection[flex],
        justifyContentClass[justifyContent],
        alignItemsClass[alignItems],
        gapClass[gap],
        marginClass[margin],
        paddingClass[padding],
        width,
        centered && "mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FlexContainer({
  children,
  bgVarient = "none",
  flex = "row",
  margin = "none",
  gap = "none",
  padding = "none",
  justifyContent = "left",
  alignItems = "left",
  width = "",
  centered = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "flex",
        bgColor[bgVarient],
        flexDirection[flex],
        justifyContentClass[justifyContent],
        alignItemsClass[alignItems],
        gapClass[gap],
        marginClass[margin],
        paddingClass[padding],
        width,
        centered && "mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Container({
  children,
  margin = "none",
  padding = "none",
  className = "",
  width = "w-full",
  centered = false,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        marginClass[margin],
        paddingClass[padding],
        width,
        centered && "mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
