import React from "react";
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"


const Header = () => {
return (
<div className="w-full font-primary border-[#75808A] h-[4rem] border-b-[0.1px] flex flex-row items-center justify-between lg:justify-normal text-lg px-8 lg:px-20">
    <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/images/logo.png"
        alt="Next.js Logo" width={120} height={37} priority />

<Menubar className="hidden md:flex flex-row flex-auto space-x-12 lg:ml-28 ml-10 font-normal text-[15.5px] border-none">
  <MenubarMenu>
    <MenubarTrigger className="flex select-none items-center rounded-sm px-3 py-1.5 font-medium outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3.8px] cursor-pointer text-base" >Buy</MenubarTrigger>
    <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
      <MenubarItem className="hover:text-primary-content hover:underline">
      Homes for sales
      </MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">New Projects</MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Exceptional properties</MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">My Kemea - assisted  search services</MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Affordability calculator</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger className="flex select-none items-center rounded-sm px-3 py-1.5 font-medium outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3px] cursor-pointer text-base" >Rent</MenubarTrigger>
    <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
      Homes for rent
      </MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Short Term rent</MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Exceptional properties</MenubarItem>
      <MenubarItem className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">My Kemea - assisted  search services</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
        <a href="#" className="hover:underline underline-offset-2">
            My Kemea
        </a>
        <a href="#" className="hover:underline underline-offset-2">
            Promote with us
        </a>
</Menubar>
    <div className="hidden md:flex space-x-4">
        <button className="btn rounded-full h-0 min-h-[42px] px-7 font-normal bg-white shadow-none border-none">
            Log in
        </button>

        <button className="btn hover:bg-primary text-white rounded-full h-0 min-h-[42px] px-7 font-normal bg-primary">
            Sign up
        </button>
    </div>
    <div className="md:hidden border p-2 rounded-md cursor-pointer ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
</div>
);
};

export default Header;