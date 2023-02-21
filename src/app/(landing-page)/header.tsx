import { headingFont } from "@/lib/fonts";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SplashHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-b-neutral-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between py-3 px-4">
        <h1 className={`${headingFont} text-2xl tracking-tight`}>Binder</h1>

        <nav className="flex items-center space-x-2">
          <ThemeToggle />

          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
