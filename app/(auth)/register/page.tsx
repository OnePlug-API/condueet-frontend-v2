import { MotionDiv } from "@/components/motion";
import RegisterForm from "@/components/register/form";
import CondueetLogo from "@/components/ui/logo";
import condueetLady from "@assets/condueet-lady-working.svg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Condueet - Get Access",
  description: "Create an account",
};

export default function Page() {
  return (
    <section className="grid grid-cols-[1.2fr_1.8fr] overflow-y-hidden max-md:grid-cols-1 md:h-screen">
      <div className="h-full space-y-8 overflow-hidden bg-[#e9effc] py-6 max-md:hidden">
        <div className="flex flex-col items-center justify-center">
          <CondueetLogo />
        </div>
        <p className="w-full text-center text-lavender-text">
          Join Condueet to enjoy seamless API <br /> integrations and financial
          services
        </p>
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full"
        >
          <Image
            src={condueetLady}
            alt="Condueet lady working"
            priority
            height={200}
            width={200}
            className="mx-auto w-full max-w-md"
          />
        </MotionDiv>
      </div>
      <section className="h-full w-full overflow-y-auto py-8 max-md:mx-auto max-md:px-4 md:p-8">
        <div className="w-full">
          <header className="mb-4 space-y-2 text-center">
            {/* <div className="flex flex-col items-center justify-center pb-6 md:hidden">
              <CondueetLogo />
            </div> */}
            <h3 className="text-3xl font-semibold text-lavender-text max-md:text-xl">
              Get Access
            </h3>
            <p>To get access, please provide the details below</p>
          </header>
          <RegisterForm />
        </div>
      </section>
    </section>
  );
}
