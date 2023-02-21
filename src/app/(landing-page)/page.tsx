import Hero from "./hero";
import Demo from "./demo";
import FooterCTA from "./footer-cta";
import SplashHeader from "./header";
import MouseListener from "./mouse-listener";
import Explainer from "./explainer";

export const revalidate = 0;

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
