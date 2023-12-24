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
      className="flex justify-between bg-white-800 dark:bg-black-300 max-w-full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",

          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <div className=" w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] rounded-full absolute">
          <Image className="rounded-full" src="/kamsidev.png" alt="logo" fill />
        </div>
      </NavbarBrand>

      <NavbarContent className="sm:hidden " justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          icon={renderIcon(isMenuOpen)}
          className=""
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 items-center"
        justify="end"
      >
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            <p className="sm-reg text-white-500 dark:text-white-800">Home </p>
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
        {/* <Divider orientation="vertical" /> */}

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
