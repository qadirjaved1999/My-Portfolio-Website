"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply shadow or background
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
        "contact",
      ].map((id) => (
        <a
          key={id}
          href={`/#${id}`}
          className="relative font-medium text-foreground/90 hover:text-primary transition-colors"
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
      <Link href="/admin" className="font-medium hover:text-primary transition-colors">
        Admin
      </Link>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${scrolled
          ? "bg-background/80 border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent border-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex text-lg font-bold tracking-tight text-primary hover:opacity-90"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Unsplash"
            width={120}
            height={120}
          />
          <span className="text-red-500">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLinks />
        </nav>
        <div className="flex justify-center items-center gap-2">
          <Button>Hire me</Button>
          {/* <ThemeToggle /> */}
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
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-lg transition-all duration-300">
          <div className="mx-auto max-w-[1200px] px-4 py-4 text-sm flex flex-col gap-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
