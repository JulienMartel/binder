import "server-only";

import "./global.css";

// do not cache this layout
export const revalidate = 0;

export const metadata = {
  title: {
    default: "Binder",
    template: "%s | Binder",
  },
  description: "Find your next favorite book",
  openGraph: {
    title: "Binder",
    description: "Find your next favorite book",
    url: "https://binder.jubag.dev",
    siteName: "Binder",
    images: [
      {
        url: "https://binder.jubag.dev/og-sm.png",
        width: 800,
        height: 600,
        alt: "Binder Logo",
      },
      {
        url: "https://binder.jubag.dev/og-lg.png",
        width: 1800,
        height: 1600,
        alt: "Binder Logo",
      },
    ],
    locale: "en-CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binder",
    description: "Find your next favorite book",
    creator: "@ju3ag",
    images: {
      url: "https://binder.jubag.dev/og-twitter.png",
      alt: "Binder Logo",
    },
  },
  appLinks: {
    web: {
      url: "https://binder.jubag.dev/app",
      should_fallback: true,
    },
  },
};

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
