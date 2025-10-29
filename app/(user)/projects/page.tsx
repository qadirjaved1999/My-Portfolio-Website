import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="mt-4 list-disc pl-5">
        <li><Link href="/projects/sample-case">Open case study: /projects/sample-case</Link></li>
      </ul>
    </div>
  );
}
