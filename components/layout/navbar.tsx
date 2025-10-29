"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="/#home" className="hover:opacity-80">
        Home
      </a>
      <a href="/#about" className="hover:opacity-80">
        About
      </a>
      <a href="/#services" className="hover:opacity-80">
        Services
      </a>
      <a href="/#experience" className="hover:opacity-80">
        Experience
      </a>
      <a href="/#projects" className="hover:opacity-80">
        Projects
      </a>
      <a href="/#skills" className="hover:opacity-80">
        Skills
      </a>
      <a href="/#blog" className="hover:opacity-80">
        Blog
      </a>
      <a href="/#contact" className="hover:opacity-80">
        Contact
      </a>
      <a href="/admin" className="hover:opacity-80">
        Admin
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          Qadir<span className="text-muted-foreground">.dev</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((s) => !s)}
            className="rounded-[--radius] border border-border px-3 py-2 text-sm"
            aria-label="Menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-[1200px] px-4 py-4 text-sm">
            <div className="flex flex-col gap-4">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
