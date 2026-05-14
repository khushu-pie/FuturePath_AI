"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Mentorship", href: "/mentorship" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-[100] border-b border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/70"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30">
            <Icons.Compass size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">
            FUTUREPATH
          </span>
        </Link>

        <div className="hidden gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-blue-50 dark:bg-blue-900/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white sm:block">
            <Icons.Bell size={20} />
          </button>
          <button className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
            <Icons.User size={16} />
            Sign In
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
