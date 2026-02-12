"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.svg";
// import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Journey", href: "/Journey" },
  {
    name: "Internships",
    href: "https://hephaestus.international/internships",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" mt-2 fixed top-0 left-[1%] right-[1%] z-50 bg-black/80 backdrop-blur-sm border rounded-full border-white/10 px-6 py-1 w-[98%]">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Legal & Ethics Ventures Institute"
            width={50}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="ml-2 text-lg font-medium text-white hover:text-blue-400 transition-colors">
            Legal & Ethics Ventures Institute
          </span>
        </Link>
        {/* <ThemeToggle /> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-16 lg:pr-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-white hover:text-blue-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10">
          <nav className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
