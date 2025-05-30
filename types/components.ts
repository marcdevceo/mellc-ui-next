import { NavLink } from "@/data/navlinks";
import { bgColor, fontSize, marginClass, paddingClass, variantClasses } from "@/theme";
import React from "react";

export type NavBarProps = {
    children?: React.ReactNode;
    background?: keyof typeof bgColor;
    padding?: keyof typeof paddingClass;
    margin?: keyof typeof marginClass;
    title?: string;
    titleHref?: string;
    logo?: string;
    logoHref?: string;
    links?: NavLink[];
} & React.HTMLAttributes<HTMLElement>;

export type FooterProps = {
  children?: React.ReactNode;
  background?: keyof typeof bgColor;
  padding?: keyof typeof paddingClass;
  margin?: keyof typeof marginClass;
  companyName?: string;
  logo?: string;
} & React.HTMLAttributes<HTMLElement>;

export type CardProps = {
  children: React.ReactNode;
  padding?: keyof typeof paddingClass;
  background?: keyof typeof bgColor;
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  size?: keyof typeof fontSize;
  padding?: keyof typeof paddingClass;
  variant?: keyof typeof variantClasses;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;