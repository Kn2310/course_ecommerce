"use client";

import React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsCart2 } from "react-icons/bs";
import ShineBorder from "@/components/magicui/shine-border";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-neutral-300/30 dark:bg-neutral-900/20 p-4 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Link
            href="/"
            className="text-neutral-900 dark:text-neutral-100 text-lg font-bold"
          >
            Re-Store
          </Link>
          {theme === "dark" ? (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("light")}
            >
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme("dark")}
            >
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          )}
        </div>
        <ul className="flex gap-4 text-neutral-900 dark:text-neutral-100">
          <li className="hover:">
            <Link href="/catalog">Catalog</Link>
          </li>
          <li className="hover:">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-4 items-center text-neutral-900 dark:text-neutral-100">
          <Button variant="outline" size="icon">
            <BsCart2 />
          </Button>
          <Link href="/register">
            <ShineBorder
              className="text-center text-sm font-normal capitalize"
              color={theme === "dark" ? "white" : "black"}
            >
              Sign up
            </ShineBorder>
          </Link>
          <li className="hover:">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
