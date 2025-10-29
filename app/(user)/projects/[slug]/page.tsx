type Props = { params: { slug: string } };

export default function CaseStudyPage({ params }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Case Study</h1>
      <p className="mt-2">Slug: <code className="rounded bg-muted px-2 py-1">{params.slug}</code></p>
    </div>
  );
}
