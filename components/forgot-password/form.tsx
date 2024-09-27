"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import Link from "next/link";

const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
});

type FormType = z.infer<typeof FormSchema>;

const ForgotPasswordForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: FormType) => {
    console.log(values);
  };

  return (
    <div className="flex w-[90%] max-w-[400px] flex-col items-center rounded-2xl bg-white p-8 shadow">
      <CondueetLogo />
      <div className="mb-6 mt-8 w-full space-y-2 text-center">
        <h3 className="text-xl font-bold text-primary">Forgot Password</h3>
        <p>Please provide the registered company email to continue</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
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

      <div className="mt-4 w-full text-center">
        Starting out?{" "}
        <Link href="/register" className="font-medium text-primary">
          Get Access
        </Link>
      </div>
    </div>
  );
};
export default ForgotPasswordForm;
