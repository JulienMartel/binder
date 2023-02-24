import "server-only";

// import { createServerClient } from "@/lib/supabase-server";
import { Logout } from "./logout";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const revalidate = 0;

export default async function AppPage1() {
  // const supabase = createServerClient();
  // const { data } = await supabase.from("posts").select("*");

  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Thanks for signing up :)
      </h1>
      <p className="max-w-lg leading-7 [&:not(:first-child)]:mt-6">
        Binder is still under construction. You&apos;ll get an email (soon) when
        we fully launch. Get your friends to sign up,{" "}
        <span className="underline">all early users will get free prizes.</span>
      </p>
      <p className="max-w-lg text-xl leading-7 text-neutral-700 dark:text-neutral-400 [&:not(:first-child)]:mt-6">
        We are starting with a book app but plan to extend the premise into a
        broader platform for creating a context-aware{" "}
        <span className="font-semibold">personal assistant</span> with
        personalized intelligence.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button disabled>
          <Icons.twitter className="mr-2 h-4 w-4" /> Share
        </Button>
        <Logout />
      </div>
    </section>
  );
}
