import Hero from "./hero";
import Demo from "./demo";
import FooterCTA from "./footer-cta";
import SplashHeader from "./header";
import MouseListener from "./mouse-listener";
import Explainer from "./explainer";

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
    creator: "@JU3AG",
    creatorId: "1035428482115940353",
    images: ["https://binder.jubag.dev/og-twitter.png"],
  },
  appLinks: {
    web: {
      url: "https://binder.jubag.dev/app",
      should_fallback: true,
    },
  },
};

export default async function Home() {
  return (
    <main>
      <SplashHeader />
      <Hero />
      <Explainer />
      <Demo />
      <FooterCTA />
      <MouseListener />
    </main>
  );
}
