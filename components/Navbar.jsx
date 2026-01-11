"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/constants";
import { cn } from "@/lib/cn";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      id={cn(pathname === "/" && "top-gradient")}
      className="container mx-auto py-6 px-3 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={186} height={48} />
      </Link>
      <ul className="flex-center gap-6">
        {navLinks.map(({ label, href }, index) => (
          <li
            className="last-of-type:py-2 last-of-type:px-4 rounded-md last-of-type:bg-primary last-of-type:cursor-pointer"
            key={index}
          >
            <Link className="text-sm capitalize" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
