import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World", desc: "Kickoff post", img: "/og-image.png" },
];

export default function BlogList() {
  return (
    <section id="blog" className="scroll-mt-20 py-20">
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map(b => (
          <article key={b.slug} className="card overflow-hidden">
            <div className="h-40 bg-muted" />
            <div className="p-6">
              <h3 className="text-lg font-medium">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              <Link href={`/blog/${b.slug}`} className="btn btn-outline mt-4">Learn More</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
