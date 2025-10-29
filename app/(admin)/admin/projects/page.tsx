import Link from "next/link";

export default function AdminProjects() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin • Projects</h1>
      <ul className="mt-4 list-disc pl-5">
        <li><Link href="/admin/projects/new">New Project</Link></li>
        <li><Link href="/admin/projects/alpha">Edit Project “alpha”</Link></li>
      </ul>
    </div>
  );
}
