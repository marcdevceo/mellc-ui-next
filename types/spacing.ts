import {
  alignItemsClass,
  bgColor,
  flexDirection,
  gapClass,
  justifyContentClass,
  marginClass,
  paddingClass,
  spacingX,
} from "@/theme";

export type SpacerProps = {
  children?: React.ReactNode;
  size?: keyof typeof spacingX;
  className?: string;
};

export type ContainerProps = {
  children: React.ReactNode;
  bgVarient?: keyof typeof bgColor;
  flex?: keyof typeof flexDirection;
  justifyContent?: keyof typeof justifyContentClass;
  alignItems?: keyof typeof alignItemsClass;
  margin?: keyof typeof marginClass;
  width?: string;
  centered?: boolean;
  padding?: keyof typeof paddingClass;
  gap?: keyof typeof gapClass;
  className?: string;
};
