"use client";

import { motion } from "framer-motion";

import { LeftLine, RightLine } from "./explainer-svg-lines";
import { Icons } from "@/components/icons";
import useStep2Coords from "./hooks/step2-coords";
import { Logo } from "@/components/logo";

export default function Explainer() {
  const [ref] = useStep2Coords();

  return (
    <section className="mx-auto grid max-w-screen-2xl place-items-center px-4 lg:px-12">
      <div className="min-h-96 grid w-full grid-rows-5 place-items-center lg:grid-cols-5 lg:grid-rows-1">
        <Features />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="grid h-1/2 w-1/2 rotate-90 place-items-center text-neutral-300 dark:text-neutral-700 lg:h-5/6 lg:w-5/6 lg:rotate-0"
        >
          <LeftLine />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="grid h-full w-full place-items-center"
          ref={ref}
        >
          <div className="h-32 w-32 lg:hidden">
            <Logo />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="relative grid h-1/2 w-1/2 place-items-center text-neutral-300 dark:text-neutral-700 lg:h-5/6 lg:w-5/6"
        >
          <div className="w-full rotate-90 lg:rotate-0">
            <RightLine />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white dark:bg-neutral-900">
              <Icons.wand width={36} height={36} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
          className="grid h-full w-5/6 place-items-center"
        >
          <RecommendationList />
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <motion.div
      // id="learn-more"
      // className="scroll-m-12 lg:scroll-m-48"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
    >
      {/* mobile */}
      <div className="grid h-full w-full grid-rows-2 place-items-center lg:hidden">
        <div className="grid h-full grid-cols-2 place-items-end">
          <p className="p-3 text-center text-sm leading-6">
            Import lists from serivces like{" "}
            <span className="font-medium">goodreads</span>.
          </p>

          <p className="p-3 text-center text-sm leading-6">
            Easily add new books to your lists.
          </p>
        </div>

        <div className="grid h-full w-full grid-cols-2 ">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-100 dark:bg-red-400">
            <Icons.import
              width={36}
              height={36}
              className="text-red-400 dark:text-red-50"
            />
          </div>
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-amber-100 dark:bg-amber-400">
            <Icons.plus
              width={36}
              height={36}
              className="text-amber-400 dark:text-amber-50"
            />
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden h-full w-full grid-rows-2 place-items-center gap-10 lg:grid">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-red-100 dark:bg-red-400">
            <Icons.import
              width={36}
              height={36}
              className="text-red-400 dark:text-red-50"
            />
          </div>
          <p className="mt-3 text-center text-lg font-medium leading-6 text-neutral-900 dark:text-neutral-50">
            Import lists from serivces like{" "}
            <span className="italic">goodreads</span>.
          </p>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-100 dark:bg-amber-400">
            <Icons.plus
              width={36}
              height={36}
              className="text-amber-400 dark:text-amber-50"
            />
          </div>
          <p className="mt-3 text-center text-lg font-medium leading-6 text-neutral-900 dark:text-neutral-50">
            Easily add new books to your lists.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function RecommendationList() {
  return (
    <div className="flex h-full w-full flex-col justify-center space-y-3">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-neutral-900"></div>
        <div className="h-6 w-full rounded-t-xl bg-amber-200 dark:bg-amber-300"></div>
        <div className="w-full space-y-2 rounded-b-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-700">
          <div className="h-5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="h-5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="h-5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="h-5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
        </div>
      </div>
      <p className="mt-4 text-center text-lg font-medium leading-6 text-slate-900 dark:text-slate-50">
        Get reading recommendations based on your preferences.
      </p>
      <p></p>
    </div>
  );
}
