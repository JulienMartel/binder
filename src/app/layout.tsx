import "server-only";

import "./global.css";

// do not cache this layout
export const revalidate = 0;

import SupabaseListener from "../components/supabase-listener";
import SupabaseProvider from "@/components/supabase-provider";
import { createServerClient } from "@/lib/supabase-server";
import Providers from "./providers";

import type { Database } from "@/lib/db_types";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export type TypedSupabaseClient = SupabaseClient<Database>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {/* <Login /> */}
          <Providers>{children}</Providers>
        </SupabaseProvider>
      </body>
    </html>
  );
}
