"use client";
import React from "react";
import clsx from "clsx";

interface GradientTextProps {
  text: string;
  gradient?: string;
  animationSpeed?: number;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  gradient = "linear-gradient(90deg, #D12BB7, #7F3AA1, #0F083B, #1E90FF)",
  animationSpeed = 4,
  className,
}) => {
  return (
    <span
      className={clsx(
        "font-bold bg-clip-text text-transparent inline-block",
        className
      )}
      style={{
        backgroundImage: gradient,
        backgroundSize: "300% 300%",
        animation: `gradientFlow ${animationSpeed}s ease infinite`,
      }}
    >
      {text}

      {/* Inline keyframes to keep it scoped */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
};

export default GradientText;
