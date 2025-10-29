import { NextResponse } from "next/server";
type Ctx = { params: { id: string } };
export async function GET(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/blog/${params.id}/comments`, items: [] });
}
export async function POST(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/blog/${params.id}/comments (POST)` });
}
