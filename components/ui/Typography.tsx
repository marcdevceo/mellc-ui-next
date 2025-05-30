import { ListsProps, TextProps } from "@/types/typography";
import { textColor } from "@/theme";
import {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
} from "@/theme/typography";
import clsx from "clsx";

export default function Title({
  children,
  align = "center",
  color = "primary",
  size = "title",
  weight = "bold",
  font = "heading",
  className = "",
}: TextProps) {
  return (
    <h1
      className={`${align === "left" ? "w-auto" : "w-full"} sm:${
        fontSize[size]
      } ${fontFamily[font]} ${fontWeight[weight]} ${textColor[color]} ${
        textAlign[align]
      } ${className}`}
    >
      {children}
    </h1>
  );
}

export function Subtitle({
  children,
  align = "left",
  color = "secondary",
  size = "subtitle",
  weight = "semibold",
  font = "heading",
  className = "",
}: TextProps) {
  return (
    <h2
      className={`${align === "left" ? "w-auto" : "w-full"} ${fontSize[size]} ${
        fontFamily[font]
      } ${fontWeight[weight]} ${textColor[color]} ${
        textAlign[align]
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function Text({
  children,
  align = "left",
  color = "neutral",
  size = "body",
  weight = "normal",
  font = "sans",
  className = "",
}: TextProps) {
  return (
    <p
      className={`w-full ${fontSize[size]} ${fontWeight[weight]} ${fontFamily[font]} ${textColor[color]} ${textAlign[align]} ${className}`}
    >
      {children}
    </p>
  );
}

export function List<T>({ color="neutral", lists, renderItem}: ListsProps<T>) {
  return (
    <ul className={clsx("list-disc pl-6", textColor[color])}>
      {lists.map((item, index) => renderItem(item, index))}
    </ul>
  );
}
