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
  <div className="border-[#75808A] py-3 items-center border-b-[0.1px]">
<div className="container font-primary flex flex-row items-center lg:justify-normal text-lg px-3 tablet:px-[2rem]">
<div className="flex items-center space-x-5"> 
<label for="my-drawer-3" aria-label="open sidebar" className="tablet:hidden border p-2 px-2 rounded-md cursor-pointer border-indigo-50 mr-5 btn btn-square btn-ghost">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
        </label>

</div>



<Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/images/logo.png"
        alt="Kemea Logo" width={120} height={20} priority />
   

<Menubar className="hidden md:flex flex-row flex-auto space-x-7 laptop:ml-28 ml-2 font-normal text-[15.5px] border-none">
  <MenubarMenu>
    <MenubarTrigger className="flex select-none items-center rounded-sm px-3 py-1.5 font-normal outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3.8px] cursor-pointer text-base" >Buy</MenubarTrigger>
    <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
      <MenubarItem className="font-normal hover:text-primary-content hover:underline">
      Homes for sales
      </MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">New Projects</MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Exceptional properties</MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">My Kemea - assisted  search services</MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Affordability calculator</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger className="flex select-none items-center rounded-sm px-3 py-1.5 font-medium outline-none focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:underline hover:underline underline-offset-[3px] cursor-pointer text-base" >Rent</MenubarTrigger>
    <MenubarContent className="absolute top-[-5px] shadow-[0_0_3px_-0px_rgba(0,0,0,0.2)] space-y-3 p-3 font-light border-none rounded-xl min-w-[302px]">
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">
      Homes for rent
      
      </MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Short Term rent</MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">Exceptional properties</MenubarItem>
      <MenubarItem className="font-normal relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:text-primary hover:underline cursor-pointer">My Kemea - assisted  search services</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
        <a href="#" className="hover:underline underline-offset-2">
            My Kemea
        </a>
        <a href="#" className="hover:underline underline-offset-2 hidden tablet:block">
            Promote with us
        </a>
</Menubar>
    <div className="flex space-x-4 flex-auto justify-end">
        <button className="btn rounded-full h-0 min-h-[42px] px-7 font-normal bg-white shadow-none border-none">
            Log in
        </button>

        <button className="btn hover:bg-primary text-white rounded-full h-0 min-h-[42px] px-7 font-normal bg-primary">
            Sign up
        </button>
    </div>
</div>
<input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-white">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
  </div>
);
};

export default Header;