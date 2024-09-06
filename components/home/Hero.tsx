"use client";

import Link from "next/link";
import Container from "../container/Container";
import { MotionDiv, MotionH2, MotionP } from "../motion/motion";

const Hero = () => {
  return (
    <div className="h-screen max-h-[600px] bg-primary text-white md:max-h-[700px]">
      <Container className="flex h-full items-center justify-center">
        <div className="lg:max-w-4xl xl:max-w-5xl">
          <MotionH2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-6xl font-extrabold leading-normal tracking-wider max-lg:text-4xl max-md:text-3xl max-md:font-bold max-md:tracking-wide"
          >
            Simplifying Finances for an Enjoyable Retirement
          </MotionH2>
          <MotionP
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 mt-8 text-center text-base text-fade"
          >
            Effortlessly manage your pensions funds, investments and savings in
            one secure place.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <Link
              href="/register"
              className="w-64 rounded bg-accent py-3 text-center font-semibold transition-colors hover:bg-accent/60 max-md:w-full max-md:py-2 max-md:text-sm"
            >
              Get Started
            </Link>
          </MotionDiv>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
