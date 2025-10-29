import { ReactNode } from "react";
import Link from "next/link";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/">Home</Link>
          <div className="flex gap-4">
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="mt-16 border-t border-border px-4 py-6 text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl">© {new Date().getFullYear()} — Portfolio</div>
      </footer>
    </div>
  );
}
