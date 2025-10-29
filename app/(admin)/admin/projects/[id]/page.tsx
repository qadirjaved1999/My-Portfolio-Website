type Props = { params: { id: string } };
export default function AdminProjectEdit({ params }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin • Edit Project</h1>
      <p className="mt-2">ID: <code className="rounded bg-muted px-2 py-1">{params.id}</code></p>
    </div>
  );
}
