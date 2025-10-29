import Link from "next/link";

export default function AdminBlogList() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin • Blog</h1>
      <ul className="mt-4 list-disc pl-5">
        <li><Link href="/admin/blog/new">New Post</Link></li>
        <li><Link href="/admin/blog/123">Edit Post 123</Link></li>
      </ul>
    </div>
  );
}
