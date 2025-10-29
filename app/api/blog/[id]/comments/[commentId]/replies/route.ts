import { NextResponse } from "next/server";
type Ctx = { params: { id: string; commentId: string } };
export async function GET(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/blog/${params.id}/comments/${params.commentId}/replies`, items: [] });
}
export async function POST(_req: Request, { params }: Ctx) {
  return NextResponse.json({ ok: true, route: `/api/blog/${params.id}/comments/${params.commentId}/replies (POST)` });
}
