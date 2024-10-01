import Link from "next/link";
import Container from "../container";
import { MotionDiv, MotionH2, MotionP } from "../motion";
import clsx from "clsx";

const Hero = ({
  largeText,
  smallText,
}: {
  largeText: string;
  smallText?: string;
}) => {
  return (
    <div className="h-screen max-h-[600px] bg-primary text-white md:max-h-[700px]">
      <Container className="flex h-full items-center justify-center">
        <div className="space-y-8 lg:max-w-4xl xl:max-w-5xl">
          <MotionH2
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={clsx(
              "text-center text-6xl font-extrabold leading-normal tracking-wider max-lg:text-4xl max-md:text-3xl max-md:font-bold max-md:tracking-wide",
              { "mb-12": !smallText },
            )}
          >
            {largeText}
          </MotionH2>
          {smallText && (
            <MotionP
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 mt-8 text-center text-base text-fade"
            >
              {smallText}
            </MotionP>
          )}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <Link
              href="/register"
              className="flex h-12 w-64 items-center justify-center rounded bg-accent py-3 text-center font-semibold transition-colors hover:bg-accent/60 max-md:py-2 max-md:text-sm"
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
