"use client";

import { LoginFormSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CondueetLogo from "../ui/logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

type FormSchema = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <div className="flex w-[90%] max-w-[400px] flex-col items-center rounded-2xl bg-white p-8 shadow">
      <CondueetLogo />
      <div className="mb-6 mt-8 w-full space-y-1 text-center">
        <h3 className="text-xl font-bold">Welcome back</h3>
        <p>Login with your email and password</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-lavender-text">
                  Work Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className={cn("h-11 focus-visible:ring-lavender-text")}
                  />
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
                <FormLabel className="text-base text-lavender-text">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                      className={cn("h-11 focus-visible:ring-lavender-text")}
                    />
                    <Button
                      type="button"
                      variant={"ghost"}
                      size={"icon"}
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-1 top-1/2 -translate-y-1/2 hover:bg-transparent"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel className="text-base text-gray-600">
                    Remember me
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className={cn(
              "h-12 w-full bg-primary text-lg font-medium hover:bg-primary/75",
            )}
            size={"lg"}
          >
            Login
          </Button>
        </form>
      </Form>
      <div className="my-4 flex w-full items-center justify-end">
        <Link
          href="/forgot-password"
          className="transition-colors hover:text-primary"
        >
          Forgot password?
        </Link>
      </div>
      <div className="w-full text-center">
        Starting out?{" "}
        <Link href="/register" className="font-medium text-primary">
          Get Access
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
