"use client"
import React from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenu, 
  NavbarMenuItem, 
  NavbarMenuToggle, 
  Link, 
  Divider
} from "@nextui-org/react";

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
    className="bg-white-800 dark:bg-black-300"
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
        <NavbarItem isActive >
          <Link color="foreground" href="#">
            <p className="sm-reg text-white-500">Home </p>
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" aria-current="page">
            <p className="sm-reg text-white-500">Case Studies </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <p className="sm-reg text-white-500">Contact </p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            <div className="flex items-center gap-1.5">
              <div>
                <Image src={vector} alt="download-icon"/>
              </div>
              <p className="sm-reg text-black-200">Resume</p>
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
