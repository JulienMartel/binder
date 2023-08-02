"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useStep3Coords from "./hooks/step3-coords";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Demo() {
  const [ref] = useStep3Coords();

  const [book, setBook] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const showError = useCallback(() => {
    setIsLoading(false);
    toast({
      title: "Error",
      description: "Something happened on our end. Please try again later.",
      variant: "destructive",
    });
  }, [toast]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!book) return undefined;

    setIsLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        body: book,
      });

      if (!res.ok) {
        throw new Error();
      }

      const recommendations = (await res.json()) as string[];

      setRecommendations(recommendations);
    } catch (err) {
      showError();
    }
  }

  return (
    <section className="mx-auto grid max-w-screen-2xl place-items-center py-36 px-4 lg:min-h-screen lg:grid-cols-2 lg:py-0">
      <div className="hidden lg:block" ref={ref}></div>

      <div className="grid w-full place-items-center">
        {recommendations.length ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            className="flex w-full flex-col justify-center rounded-lg bg-white px-9 py-8 shadow-md dark:bg-neutral-900"
          >
            <h3 className="text-2xl font-bold tracking-tight">
              Recommendations
            </h3>
            <p className="text-sm">
              Based off{" "}
              <span className="text-neutral-500 dark:text-neutral-400">
                {book}
              </span>
            </p>

            <ul className="mt-4 space-y-1.5">
              {recommendations.map((rec) => (
                <li key={rec}>
                  <a
                    className="group flex cursor-pointer items-center justify-between space-x-1 rounded-3xl border border-neutral-200 px-4 py-2 text-sm transition-colors hover:bg-neutral-800 hover:opacity-100 dark:border-neutral-700 lg:text-base"
                    href={`https://google.com/search?q=${rec}`}
                    target="_blank"
                  >
                    {rec}
                    <Icons.externalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex w-full flex-col justify-center rounded-lg bg-white px-9 py-8 shadow-md dark:bg-neutral-900"
          >
            <h3 className="text-2xl font-bold tracking-tight">Try it out</h3>

            <div className="mt-4 grid w-full items-center gap-1.5">
              <Label htmlFor="book">Your favorite book</Label>
              <Input
                disabled={isLoading}
                onChange={(e) => setBook(e.target.value)}
                value={book}
                id="book"
                placeholder="1984 by George Orwell"
              />
            </div>

            <div className="mt-3">
              <Button disabled={isLoading}>
                {isLoading ? (
                  <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.wand className="mr-2 h-4 w-4" />
                )}
                {isLoading ? "Please wait" : "Generate"}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
