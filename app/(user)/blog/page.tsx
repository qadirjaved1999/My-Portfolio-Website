import Link from "next/link";

export default function BlogListPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog List</h1>
      <ul className="mt-4 list-disc pl-5">
        <li><Link href="/blog/hello-world">Open: /blog/hello-world</Link></li>
      </ul>
    </div>
  );
}
