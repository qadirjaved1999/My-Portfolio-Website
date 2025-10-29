// app/(user)/projects/[slug]/page.tsx
import Link from "next/link";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  return (
    <div className="py-10">
      <div className="mb-6">
        <Link href="/#projects" className="btn btn-outline">← Back to Projects</Link>
      </div>
      <h1 className="text-3xl font-semibold">Case Study: {params.slug}</h1>
      <p className="mt-2 text-muted-foreground">Deep dive content…</p>
    </div>
  );
}
