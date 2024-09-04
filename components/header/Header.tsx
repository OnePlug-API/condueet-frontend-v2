import Link from "next/link";
import Container from "../container/Container";
import Image from "next/image";
import Nav from "./Nav";
import DropdownMenu from "./DropdownMenu";
import { MotionLink } from "../motion/motion";

const Header = () => {
  return (
    <header className="relative z-20 bg-light-lavender">
      <Container className="flex items-center justify-between py-6">
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
          <h2 className="text-2xl font-bold max-md:text-xl">Condueet</h2>
        </MotionLink>

        <Nav />

        <div className="flex flex-1 items-center justify-end gap-4 max-lg:mr-8 max-md:hidden">
          <Link
            href="/login"
            className="rounded bg-white px-6 py-2 text-sm text-primary"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded bg-accent px-6 py-2 text-sm text-white"
          >
            Register
          </Link>
        </div>
        <DropdownMenu />
      </Container>
    </header>
  );
};
export default Header;
