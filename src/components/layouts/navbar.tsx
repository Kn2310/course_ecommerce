"use client";

import React from "react";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { setTheme } = useTheme();

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ul className="flex space-x-4 text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-50">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
