"use client";
import React from "react";
import Image from "next/image";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { DownloadIcon } from "./svg/Download";
import { Close, Hamburger } from "./svg/NavbarIcons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderIcon = (isOpen: boolean) => {
    if (isOpen) {
      return <Close />;
    } else {
      return <Hamburger />;
    }
  };

  return (
    <Navbar
      className="flex xl:px-[85px] mx-auto lg:justify-center justify-between bg-white-800 dark:bg-black-300 max-w-full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",

          "items-center",
          "data-[active=true]:bg-Accent-light",
          "data-[active=true]:dark:bg-Accent-dark",
        ],
      }}
      maxWidth="full"
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link color="foreground" href="/">
          <div className=" w-[30px] h-[30px] sm:w-10 sm:h-10 rounded-full absolute">
            <Image
              className="rounded-full"
              src="/kamsidev.png"
              alt="logo"
              fill
            />
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent className="md:hidden " justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          icon={renderIcon(isMenuOpen)}
          className=""
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-9 items-center"
        justify="end"
      >
        <NavbarItem>
          <Link
            className="sm-reg text-white-500 dark:text-white-800"
            href="/home"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/projects" aria-current="page">
            <p className="sm-reg text-white-500 dark:text-white-800">
              Case Studies{" "}
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            <p className="sm-reg text-white-500 dark:text-white-800">
              Contact{" "}
            </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a
            href="/files/resume.pdf"
            className="sm-reg text-white-500 dark:text-white-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-1.5">
              <div>
                <DownloadIcon />
              </div>
              <p className="sm-reg text-black-200 dark:text-white-900">
                Resume
              </p>
            </div>
          </a>
        </NavbarItem>
        <NavbarItem className="py-5">
          <Divider orientation="vertical" />
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-[22px]">
        <NavbarMenuItem className="py-3 px-6" isActive>
          <Link
            className="sm-reg text-white-500 dark:text-white-800"
            href="/home"
            size="lg"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="py-3 px-6">
          <Link
            className="sm-reg text-white-500 dark:text-white-800"
            href="/projects"
            size="lg"
          >
            Case Studies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="py-3 px-6">
          <Link
            className="*:sm-reg text-white-500 dark:text-white-800"
            href="/contact"
            size="lg"
          >
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex items-center justify-center rounded-lg pt-5">
          <a
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Accent-light dark:text-Accent-dark bg-white-800 dark:bg-black-300 flex items-center justify-center rounded-[100px] py-[15px] w-full"
          >
            <p className="body-reg">Resume</p>
          </a>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
