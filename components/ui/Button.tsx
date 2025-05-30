import clsx from "clsx";
import { fontWeight, fontFamily, fontSize } from "@/theme/typography";
import { paddingClass } from "@/theme/spacing";
import { variantClasses } from "@/theme/color";
import { ButtonProps } from "@/types/components";
import Link from "next/link";

export default function Button({
  children,
  href,
  target = "_self",
  size = "buttonText",
  padding = "md",
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center justify-center rounded-lg transition duration-150 ease-in-out",
    paddingClass[padding],
    fontSize[size],
    fontFamily.sans,
    fontWeight.medium,
    className
  );

  if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        target={target}
        className={clsx(baseStyles, variantClasses[variant])}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseStyles, variantClasses[variant])}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variantClasses[variant])}
      {...rest}
    >
      {children}
    </button>
  );
}
