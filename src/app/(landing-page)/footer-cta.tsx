import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <footer className="bg-neutral-900 dark:bg-white" aria-label="Site Footer">
      <div className="mx-auto max-w-screen-2xl px-12 pt-12 pb-2">
        <div className="py-36 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-50 dark:text-neutral-900 lg:text-5xl">
            Explore new reads.
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-neutral-500 dark:text-neutral-400">
            Build your dream library with ease! Just a few clicks and you&apos;re
            ready to go.
          </p>

          <Link href="/signup">
            <Button variant="opposite" className="mt-8" size="lg">
              Get Started
            </Button>
          </Link>
        </div>

        <div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            © Binder 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
