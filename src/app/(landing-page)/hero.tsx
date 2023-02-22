"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Book from "./book";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
      className="mx-auto grid min-h-screen max-w-screen-2xl grid-rows-2 place-items-center px-4 lg:grid-cols-2 lg:grid-rows-1 lg:px-12"
    >
      <div className="mt-24 lg:mt-0">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Find your next favorite book.
        </h1>

        <p className="mt-4 text-xl text-neutral-700 dark:text-neutral-400">
          Easily store, find, & share books you love.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
          <a href="#learn-more">
            <Button size="lg" variant="subtle">
              Learn More
            </Button>
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <Book />
      </div>

      <div className="block p-16 lg:hidden">
        <Logo />
      </div>
    </motion.section>
  );
}
