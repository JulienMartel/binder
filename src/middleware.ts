import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isRoot = () => req.nextUrl.pathname === "/";
  const startsWith = (route: string) => req.nextUrl.pathname.startsWith(route);

  if (!session && startsWith("/app")) {
    // no auth, redirect to login
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  } else if (
    session &&
    (startsWith("/login") || startsWith("/signup") || isRoot())
  ) {
    // already authed, redirect to app
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/app";
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

// export const config = {
//   matcher: ["/app", "/app/(.*)"],
// };
