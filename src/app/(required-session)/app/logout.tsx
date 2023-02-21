"use client";

import { useSupabase } from "@/components/supabase-provider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Logout() {
  const { supabase } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    // router.prefetch("/");

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }

    router.push("/");
    setIsLoading(false);
  };

  return (
    <Button variant="subtle" disabled={isLoading} onClick={handleLogout}>
      Logout
    </Button>
  );
}
