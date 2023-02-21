import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json();

  console.log(json);

  return NextResponse.json({ name: "John Doe" });
}

// not implemented yet, still waitng for the next release
