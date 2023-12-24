"use client";
import React from "react";
import Image from "next/image";
import {
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

  const menuItems = ["Home", "Case Studies", "Contact", "Resume"];

  return (
    <Navbar
      className="flex px-6  xl:px-[61px] mx-auto lg:justify-center justify-between bg-white-800 dark:bg-black-300 max-w-full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",

          "items-center",
          "data-[active=true]:*text-Accent-light",
        ],
      }}
      maxWidth="xl"
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
        <NavbarItem isActive>
          <Link className="sm-reg text-white-500 dark:text-white-800" href="/">
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
          <Link color="foreground" href="#">
            <div className="flex items-center gap-1.5">
              <div>
                <DownloadIcon />
              </div>
              <p className="sm-reg text-black-200 dark:text-white-900">
                Resume
              </p>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem className="py-5">
          <Divider orientation="vertical" />
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects" size="lg">
            Case Studies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact" size="lg">
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/" size="lg">
            Resume
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
