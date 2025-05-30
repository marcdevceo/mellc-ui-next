import { bgColor, marginClass, paddingClass } from "@/theme";
import { FooterProps } from "@/types/components";
import Image from "next/image";

export default function Footer({
  children,
  background = "neutral",
  padding = "sm",
  margin = "none",
  companyName = "",
  logo = "",
  ...rest
}: FooterProps) {
  return (
    <footer
      className={`${bgColor[background]} ${paddingClass[padding]} ${marginClass[margin]}`}
      {...rest}
    >
      <div className="container mx-auto text-center font-bold">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {companyName}{" "}
          {logo ? (
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="h-8 w-auto"
            />
          ) : null}{" "}
          All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ using Next.js and Tailwind CSS.
        </p>
      </div>
      {children}
    </footer>
  );
}
