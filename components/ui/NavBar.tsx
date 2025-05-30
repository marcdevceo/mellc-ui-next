"use client";

import { bgColor, marginClass, paddingClass } from "@/theme";
import { NavBarProps } from "@/types/components";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function NavBar({
  children,
  background = "neutral",
  padding = "md",
  margin = "none",
  title = "",
  logo = "",
  titleHref = "#",
  logoHref = "#",
  links = [],
  ...rest
}: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`${bgColor[background]}
        ${paddingClass[padding]}
        ${marginClass[margin]},
        `}
      {...rest}
    >
      <div className="flex items-center justify-between">
        {/* Site name or logo */}
        <div className="text-xl text-center font-bold text-primary">
          {logo ? (
            <Link href={logoHref}>
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
          ) : title ? (
            <Link
              href={titleHref}
              className="hover:text-accent transition-colors"
            >
              {title}
            </Link>
          ) : null}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center w-full sm:w-auto gap-4 sm:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-colors",
                  isActive
                    ? "text-primary font-bold"
                    : "text-text-primary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Mobile Nav Toggle */}
        <MobileNav links={links} />
      </div>

      {children}
    </nav>
  );
}
