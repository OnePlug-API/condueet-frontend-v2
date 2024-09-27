"use client";

import { RegisterFormSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CustomInput } from "./custom-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countries } from "@/lib/country";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

type FormShema = z.infer<typeof RegisterFormSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormShema>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phoneNumber: "",
      country: "",
      password: "",
      readPrivacyPolicy: false,
    },
  });

  const onSubmit = (values: FormShema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-xl space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-lavender-text">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-lavender-text">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    {...field}
                    className={cn("h-11 focus-visible:ring-lavender-text")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                  placeholder="Enter your email address"
                  {...field}
                  className={cn("h-11 focus-visible:ring-lavender-text")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-lavender-text">
                  Company
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your company"
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-lavender-text">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={field.value}
                    defaultCountry={"NG"}
                    onChange={field.onChange}
                    inputComponent={CustomInput}
                    className="rounded-lg border border-solid border-gray-200 px-4 py-2 focus:border-none focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={cn("h-11 focus-visible:ring-lavender-text")}
                    >
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
        </div>
        <FormField
          control={form.control}
          name="readPrivacyPolicy"
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
                  Read our privacy policy{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-accent"
                  >
                    Learn More
                  </Link>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={cn(
            "h-14 w-full bg-primary text-lg font-medium hover:bg-primary/75",
          )}
          size={"lg"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
