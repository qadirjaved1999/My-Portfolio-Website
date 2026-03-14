"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import AnimatedNavLinks from "./AnimatedNavLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle glassmorphism + rounded style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {[
        "home",
        "about",
        "services",
        "experience",
        "projects",
        "skills",
        "blog",
      ].map((id) => (
        <a
          key={id}
          href={`/#${id}`}
          className="relative font-medium text-foreground/90 hover:text-primary transition-colors"
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-1/2 z-50 w-[92%] max-w-[1400px] -translate-x-1/2 transition-all duration-500 
      ${scrolled
          ? "top-4 backdrop-blur-2xl bg-background/60 border border-border/40 shadow-[0_6px_25px_rgba(209,43,183,0.25)] rounded-full"
          : "bg-transparent border-transparent shadow-none rounded-none top-0"
        }`}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-center items-center text-lg font-bold tracking-tight text-primary hover:opacity-90"
        >
          <Image
            src="/images/logo/logo3.svg"
            alt="logo"
            width={30}
            height={30}
            className="w-12 h-12 transition-all duration-300"
          />
          <h3 className="text-2xl font-bold ml-2">Qadir Javed</h3>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <AnimatedNavLinks />
        </nav>

        {/* Right Side Buttons */}
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full border-[#D12BB7] text-[#D12BB7] hover:bg-[#D12BB7]/10"
          >
            Let’s Talk
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-[--radius] border border-border px-3 py-2 text-sm hover:bg-accent/40 transition-colors"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-lg transition-all duration-300 rounded-b-2xl">
          <div className="mx-auto max-w-[1200px] px-4 py-4 text-sm flex flex-col gap-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
