"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div>
      <header className="border-b border-border bg-card">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="font-medium">Admin Area</span>
          <div className="flex gap-4 text-sm items-center">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/blog">Blog</Link>
            <Link href="/admin/projects">Projects</Link>
            <Link href="/">Public →</Link>
            {user && (
              <button
                onClick={logout}
                className="btn btn-outline text-xs px-3 py-1"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
