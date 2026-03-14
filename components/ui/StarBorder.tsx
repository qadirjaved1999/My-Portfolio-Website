"use client";

import React from "react";
import StarBorder from "./StarBorder";
import { cn } from "@/lib/utils";

interface StarBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  as?: "button" | "a" | "div";
  onClick?: () => void;
}

/**
 * Styled wrapper for React Bits StarBorder that matches Shadcn UI button styles.
 * Fully tailwind-customizable via className.
 */
const StarBorder: React.FC<StarBorderProps> = ({
  children,
  color = "#D12BB7",
  speed = "6s",
  as = "button",
  className = "",
  onClick,
}) => {
  return (
    <StarBorder
      as={as}
      color={color}
      speed={speed}
      onClick={onClick}
      className={cn(
        // base Shadcn-like style
        "relative inline-flex items-center justify-center rounded-full",
        "px-6 py-2 text-sm font-medium transition-all duration-300",
        "border border-[#D12BB7]/40 text-[#D12BB7]",
        "bg-transparent hover:bg-[#D12BB7]/10 hover:text-[#D12BB7]",
        "focus:outline-none focus:ring-2 focus:ring-[#D12BB7]/40 focus:ring-offset-1",
        className
      )}
    >
      {children}
    </StarBorder>
  );
};

export default StarBorder;
