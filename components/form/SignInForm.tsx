"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "@/validators/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { api } from "@/lib/axios_interceptor";
import { toast } from "react-toastify";
import { ReloadIcon } from "@radix-ui/react-icons";
import SubmitButton from "./SubmitButton";
import { signIn } from "next-auth/react";

type Props = {
  onSignInSuccess(): void;
};

const SignInForm = ({ onSignInSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    try {
      const response = await api.post("auth/login", values);
      const user = await api.get("auth/profile", {
        headers: {
          Authorization: `Bearer ${response.data["access_token"]}`,
        },
      });
      const res = await signIn("credentials", {
        id: user.data.id,
        email: user.data.email,
        name: user.data.name,
        role: user.data.role,
        avatar: user.data.avatar,
      });
      if (res?.error) {
        toast.error("invalid credentials");
      } else {
        onSignInSuccess();
      }
    } catch (e: any) {
      console.log(e);
      toast.error(e.toString());
    } finally {
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passowrd</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton loading={loading} buttonName="In" />
      </form>
    </Form>
  );
};

export default SignInForm;
