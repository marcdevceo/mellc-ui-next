"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@/data/navlinks";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { bgColor } from "@/theme";
import Card from "./Card";

type MobileNavProps = {
  links: NavLink[];
};

export default function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button onClick={() => setOpen(!open)} className="text-text-primary">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slideout Menu */}
      {open && (
        <div
          className={clsx(
            "absolute top-16 left-0 right-0 z-50 border-t border-border py-4 flex flex-col items-center gap-4 shadow-lg",
            bgColor.primary
          )}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className=" px-4"
              >
                <Card
                  className={clsx(
                    "w-full text-center cursor-pointer transition-colors",
                    isActive
                      ? "bg-transparent text-white font-semibold"
                      : "bg-transparent text-text-primary hover:bg-accent"
                  )}
                  padding="sm"
                  rounded
                >
                  {link.label}
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
