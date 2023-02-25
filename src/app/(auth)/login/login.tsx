"use client";

import React, { useState } from "react";

import { Icons } from "@/components/icons";
import { Logo } from "@/components/logo";
import { useSupabase } from "@/components/supabase-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export function Login() {
  const { supabase } = useSupabase();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormSchemaType> = async (formData) => {
    const { email, password } = formData;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error logging in",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space w-full max-w-xl rounded-xl py-8 px-4 shadow dark:bg-neutral-800"
    >
      <figure className="mx-auto mb-6 h-14 w-14">
        <Link href="/">
          <Logo />
        </Link>
      </figure>
      <h3 className="text-center text-3xl font-semibold tracking-tight">
        Login
      </h3>
      <p className="mt-1 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Or,{" "}
        <Link href="/signup" className="underline">
          create an account
        </Link>
      </p>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="block text-red-800 dark:text-red-500">
              {errors.email?.message}
            </span>
          )}

          <div className="relative space-y-1">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pr-11"
              {...register("password")}
            />

            {errors.password && (
              <span className="block text-red-800 dark:text-red-500">
                {errors.password?.message}
              </span>
            )}

            <Button
              size="sm"
              className="absolute right-2 top-0.5 h-min p-1.5"
              type="button"
              variant="ghost"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <Icons.eyeOff className="h-4 w-4" />
              ) : (
                <Icons.eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <Button disabled={isSubmitting} className="mt-4">
          Login
        </Button>
      </form>
    </motion.section>
  );
}
