"use client"
import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link, Divider} from "@nextui-org/react";

import theme from '../public/theme.svg'
import vector from '../public/Vector.svg'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Case Studies",
    "Contact",
    "Resume",
  ];

  return (
    <Navbar
      className="bg-white-800 dark:bg-black-300 "
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <p className="font-bold font-Graphik text-lg text-Accent-light dark:text-white-800">Kamsiyonna</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden border border-black-300" justify="end">
        <NavbarMenuToggle className="border border-black-300" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 items-center" >
        <NavbarBrand>
          <p className="font-bold font-Graphik text-3xl text-black-300 dark:text-white-800">Kamsiyonna</p>
          <span className="font-thin font-Graphik text-3xl text-black-300 dark:text-white-800">Obi</span>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Home 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Case Studies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <div className="flex items-center gap-1.5">
              <div>
                <Image src={vector} alt="download-icon"/>
              </div>
              <p>Resume</p>
            </div>
          </Link>
        </NavbarItem>
        {/* <Divider orientation="vertical" /> */}
        <NavbarItem>
          <Link color="foreground" href="#">
            <div className="flex items-center w-6 h-6">
              <div>
                <Image className="object-fit" src={theme} alt="theme-icon"/>
              </div>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
