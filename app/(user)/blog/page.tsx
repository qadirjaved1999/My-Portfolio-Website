// app/(user)/blog/[slug]/page.tsx
import Link from "next/link";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <div className="py-10">
      <div className="mb-6">
        <Link href="/#blog" className="btn btn-outline">← Back to Blog</Link>
      </div>
      <h1 className="text-3xl font-semibold">Blog: {params.slug}</h1>
      <p className="mt-2 text-muted-foreground">Article content…</p>
    </div>
  );
}
