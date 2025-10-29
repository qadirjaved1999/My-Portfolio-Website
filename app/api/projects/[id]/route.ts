import { NextResponse } from "next/server";
type Ctx = { params: { id: string } };
export async function GET(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/projects/${params.id}` });
}
export async function PATCH(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/projects/${params.id} (PATCH)` });
}
export async function DELETE(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/projects/${params.id} (DELETE)` });
}
