"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center justify-center"
    >
      <Toggle
        pressed={isDark}
        onPressedChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        className="relative flex h-10 w-20 items-center justify-between rounded-full px-2 transition-all duration-300 bg-linear-to-r from-[#0C0516] via-[#5416B5] to-[#7F3AA1]
        shadow-inner"
      >
        <motion.div
          className={`absolute top-0.5 left-0.5 h-8 w-8 rounded-full flex items-center justify-center 
          bg-background shadow-lg transition-all duration-500`}
          animate={{
            x: isDark ? 40 : 0,
            backgroundColor: isDark ? "#0F083B" : "#fff",
          }}
        >
          {isDark ? (
            <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" className="text-white text-xl" />
          ) : (
            <Icon icon="line-md:moon-filled-to-sunny-filled-loop-transition" className="text-yellow-400 text-xl" />
          )}
        </motion.div>
      </Toggle>
    </motion.div>
  );
}
