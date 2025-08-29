"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

import {motion} from "framer-motion"
import { cn } from "@/lib/utils";


const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="flex items-center justify-between px-3 sm:px-9 h-14 border-b border-white/10">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-4 text-sm  h-full">
          {routes.map((route) => (
            <li
              className={cn(" hover:text-white transition-colors relative flex items-center duration-200", {
                "text-white": currentPath === route.path,
                "text-white/50": currentPath !== route.path,
              })}
              key={route.name}
            >
              <Link href={route.path}>{route.name}</Link>
              {
                currentPath==route.path &&(
                  <motion.div layoutId="underline"
                  className="h-1 w-full bg-accent absolute bottom-0"></motion.div>
                )
              }
            </li>
            
          ))}
        </ul>
      </nav>
    </header>
  );
}
