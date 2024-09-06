import Image from "next/image";
import Container from "../container/Container";
import { MotionLink } from "../motion/motion";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  XOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container className="grid grid-cols-1 items-start gap-8 pb-24 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <MotionLink
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          href="/"
          className="flex flex-1 items-center gap-2"
        >
          <div className="w-12 overflow-hidden rounded-md max-md:w-8">
            <Image
              src="/logo.png"
              alt="Condueet Logo"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-light-lavender max-md:text-xl">
            Condueet
          </h2>
        </MotionLink>
        <div>
          <h4 className="mt-3 text-2xl font-bold text-light-lavender max-md:text-xl">
            Contact Information
          </h4>
          <ul className="mt-8 space-y-6">
            <li className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-accent" />
              <p className="self-start font-normal text-light-lavender">
                Address: Tel Aviv, Isreal, Yad Harutsim, Str 12
              </p>
            </li>
            <li className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-accent" />
              <p className="font-normal text-light-lavender">
                Email:{"  "}
                <a
                  href="mailto:condueet.ng@gmail.com"
                  className="text-light-lavender"
                >
                  condueet.ng@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mt-3 text-2xl font-bold text-light-lavender max-md:text-xl">
            Follow
          </h4>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="bg-light-sky hover:bg-light-sky/60 flex h-12 w-12 items-center justify-center rounded-full text-lg text-primary transition-colors max-md:h-9 max-md:w-9 md:text-xl"
            >
              <XOutlined />
            </a>
            <a
              href="#"
              className="bg-light-sky hover:bg-light-sky/60 flex h-12 w-12 items-center justify-center rounded-full text-lg text-primary transition-colors max-md:h-9 max-md:w-9 md:text-xl"
            >
              <LinkedinOutlined />
            </a>
            <a
              href="#"
              className="bg-light-sky hover:bg-light-sky/60 flex h-12 w-12 items-center justify-center rounded-full text-lg text-primary transition-colors max-md:h-9 max-md:w-9 md:text-xl"
            >
              <InstagramOutlined />
            </a>
            <a
              href="#"
              className="bg-light-sky hover:bg-light-sky/60 flex h-12 w-12 items-center justify-center rounded-full text-lg text-primary transition-colors max-md:h-9 max-md:w-9 md:text-xl"
            >
              <FacebookOutlined />
            </a>
          </div>
        </div>
      </Container>
      <hr className="h-0.5 border-t-0 bg-light-lavender dark:bg-white/10" />
      <Container className="flex items-center justify-between py-6">
        <p className="text-center font-normal text-light-lavender">
          © {new Date().getFullYear()} Condueet. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
