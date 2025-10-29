import Link from "next/link";

const projects = [
  {
    slug: "sample-case",
    title: "SEOtalos",
    desc: "Analytics tool that delivers real results.",
    img: "/og-image.png",
    repo: "https://github.com/",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map(p => (
          <article key={p.slug} className="card overflow-hidden">
            <div className="h-40 bg-muted" />
            <div className="p-6">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/projects/${p.slug}`} className="btn btn-primary">Case Study</Link>
                <a href={p.repo} target="_blank" className="btn btn-outline">Git Repo</a>
                <a href={p.demo} target="_blank" className="btn btn-outline">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
