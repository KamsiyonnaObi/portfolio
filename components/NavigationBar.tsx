"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { DownloadIcon } from "./svg/Download";
import { Close, Hamburger } from "./svg/NavbarIcons";

const links = [
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const linkClass =
  "focus-ring rounded-sm sm-reg text-white-500 hover:text-Accent-light dark:text-white-800 dark:hover:text-Accent-dark";

export default function NavigationBar() {
  const pathname = usePathname();
  // The menu counts as open only on the page it was opened on, so it closes
  // by itself once the route changes
  const [openOn, setOpenOn] = React.useState<string | null>(null);
  const isMenuOpen = openOn === pathname;

  React.useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="sticky top-0 z-40 w-full bg-white-800 dark:bg-black-300">
      <nav
        aria-label="Primary"
        className="flex h-16 w-full items-center justify-between gap-6 px-6 lg:px-12 xl:px-[85px]"
      >
        <Link
          href="/"
          aria-label="Kamsiyonna Obi, home"
          className="focus-ring relative block h-[30px] w-[30px] rounded-full sm:h-10 sm:w-10"
        >
          <Image
            className="rounded-full"
            src="/kamsidev.png"
            alt=""
            sizes="40px"
            fill
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass}
                aria-current={current(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/files/resume.pdf"
              className="focus-ring flex items-center gap-1.5 rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon />
              <span className="sm-reg text-black-200 dark:text-white-900">
                Resume
              </span>
            </a>
          </li>
          <li
            aria-hidden="true"
            className="h-6 w-px bg-[#CCE1FF] dark:bg-[#2C3C56]"
          />
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            className="focus-ring rounded-md p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(isMenuOpen ? null : pathname)}
          >
            {isMenuOpen ? <Close /> : <Hamburger />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-white-800 px-6 pt-[22px] md:hidden dark:bg-black-300"
      >
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href} className="px-6 py-3">
              <Link
                href={link.href}
                className="focus-ring rounded-sm text-lg font-semibold text-black-200 hover:text-Accent-light dark:text-white-900 dark:hover:text-Accent-dark"
                aria-current={current(link.href)}
                onClick={() => setOpenOn(null)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex w-full items-center justify-center rounded-[100px] bg-white-900 py-[15px] text-Accent-light dark:bg-black-200 dark:text-Accent-dark"
            >
              <span className="body-reg">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
