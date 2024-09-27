"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "../container";

interface Link {
  id: number;
  name: string;
  href: string;
}

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

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Check if the click is outside the dropdown menu and if it's open
      if (ref.current && !ref.current.contains(event.target as Node) && open) {
        setOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Clean up event listeners on unmount
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const pathname = usePathname();

  return (
    <Fragment>
      <button onClick={toggleOpen} className="lg:hidden">
        {open ? <X className="w-8" /> : <Menu className="w-8" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full z-50 w-full overflow-hidden bg-light-lavender lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            ref={ref}
          >
            <Container className="flex items-center py-4">
              <motion.ul className="w-full space-y-3">
                {links.map((link, index) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.li
                      key={link.id}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={
                          "block py-2 capitalize " +
                          (isActive ? "text-accent" : "")
                        }
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default DropdownMenu;
