import { MotionDiv } from "@/components/motion/motion";
import RegisterForm from "@/components/register/form";
import CondueetLogo from "@/components/ui/logo";
import condueetLady from "@assets/condueet-lady-working.svg";
import Image from "next/image";

export default function Page() {
  return (
    <section className="grid h-screen grid-cols-[1.2fr_1.8fr] overflow-y-hidden">
      <div className="flex h-screen flex-col items-center space-y-8 bg-[#e9effc] py-6">
        <CondueetLogo />
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
      <section className="h-screen overflow-y-auto py-8">
        <div className="w-full">
          <header className="mb-4 space-y-2 text-center">
            <h3 className="text-3xl font-semibold text-lavender-text">
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
