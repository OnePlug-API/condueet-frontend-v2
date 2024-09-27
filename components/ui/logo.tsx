import { Fragment } from "react";
import { MotionLink } from "../motion/motion";
import Image from "next/image";

const CondueetLogo = () => {
  return (
    <Fragment>
      <MotionLink
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        href="/"
        className="flex flex-1 items-center gap-2"
      >
        <div className="w-12 max-md:w-8">
          <Image
            src="/logo.png"
            alt="Condueet Logo"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight text-primary max-md:text-xl">
          Condueet
        </h2>
      </MotionLink>
    </Fragment>
  );
};
export default CondueetLogo;
