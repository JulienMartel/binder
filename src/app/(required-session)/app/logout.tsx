"use client";

import { useSupabase } from "@/components/supabase-provider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Logout() {
  const { supabase } = useSupabase();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { toast } = useToast();

  const handleLogout = async () => {
    setIsLoading(true);
    // router.prefetch("/");

    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: "Error signing up",
        description: error.message,
        variant: "destructive",
      });
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
