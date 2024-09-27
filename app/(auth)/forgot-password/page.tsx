import ForgotPasswordForm from "@/components/forgot-password/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condueet - Forgot Password",
  description: "Reset your password",
};

export default function Page() {
  return (
    <section className="grid min-h-screen place-items-center bg-[url('/background-1.png')] bg-cover bg-center bg-no-repeat py-8">
      <ForgotPasswordForm />
    </section>
  );
}
