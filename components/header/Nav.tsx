"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

interface Link {
  id: number;
  name: string;
  href: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const links: Link[] = [
  {
    id: 1,
    name: "home",
    href: "/",
  },
  {
    id: 2,
    name: "products",
    href: "/products",
  },
  {
    id: 3,
    name: "use cases",
    href: "/use-cases",
  },
  {
    id: 4,
    name: "Docs",
    href: "/docs",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex-[2] max-lg:hidden">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-8"
      >
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <motion.li key={link.id} variants={itemVariants}>
              <Link
                href={link.href}
                className={`border-b-2 px-2 py-4 font-semibold capitalize transition-all duration-200 ease-linear hover:border-b-accent/50 hover:bg-accent/10 ${isActive ? "border-b-accent/50 bg-accent/10" : "border-transparent"}`}
              >
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
export default Nav;
