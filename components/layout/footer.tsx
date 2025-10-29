import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Qadir.dev</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Building fast web experiences with Next.js.
          </p>
        </div>

        <nav className="text-sm">
          <div className="font-medium">Explore</div>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <nav className="text-sm">
          <div className="font-medium">Social</div>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            <li><a href="https://github.com/" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com/" target="_blank">LinkedIn</a></li>
            <li><a href="https://x.com/" target="_blank">X (Twitter)</a></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Qadir.dev — All rights reserved.
      </div>
    </footer>
  );
}
