import Link from "next/link";
import Container from "../container";
import DropdownMenu from "./dropdown";
import Nav from "./nav";
import CondueetLogo from "../ui/logo";

const Header = () => {
  return (
    <header className="relative z-20 bg-light-lavender">
      <Container className="flex items-center justify-between py-6">
        <CondueetLogo />

        <Nav />

        <div className="flex flex-1 items-center justify-end gap-4 max-lg:mr-8 max-md:hidden">
          <Link
            href="/login"
            className="rounded bg-white px-6 py-2 text-sm text-primary transition-colors hover:bg-white/60"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded bg-accent px-6 py-2 text-sm text-white transition-colors hover:bg-accent/60"
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
