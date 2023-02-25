"use client";

import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";

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
    images: ["https://binder.jubag.dev/og-twitter.png"],
  },
  appLinks: {
    web: {
      url: "https://binder.jubag.dev/app",
      should_fallback: true,
    },
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
}
