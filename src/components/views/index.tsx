'use client';
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "/public/logo.webp";
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { NavbarArray, NavbarItemType } from "../utils/NavbarArrayAndTypes";
import DropDown from "./subComponents/DropDown";
import MobileNavbar from "./subComponents/MobileNavbar";

const Index = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between py-6 items-center space-x-20 mx-8">
        <div className="w-36 flex-shrink-0">
          <Image src={logo} alt="logo" width={160} height={200} />
        </div>

        {/* <ul className="flex gap-x-3">
        <li className="text-lg">
          <Link href={"/"}>Female</Link>
          </li>
        <li className="text-lg"> <Link href={"/"}>Male</Link></li>
        <li className="text-lg"> <Link href={"/"}>Kids</Link></li>
        <li className="text-lg"> <Link href={"/"}>All Products</Link></li>
      </ul> */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <div>
            <ul className="flex space-x-4 font-medium text-lg text-purple-950 ">
              {NavbarArray.map((item: NavbarItemType, index: number) => (
                <div className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                  <Link href={item.href}>{item.label}</Link>
                  {item.isDropDown ? (
                    <HiOutlineChevronDown
                      className="mt-1 rotate-180 group-hover:rotate-0 duration-300 "
                      size={15}
                    />
                  ) : (
                    ""
                  )}
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-5 bg-gray-100 min-w-[7rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                </div>
              ))}
            </ul>
          </div>

          <div className="border flex items-center text-gray-600 px-3 rounded-lg">
            <BiSearch />
            <input
              type="text"
              className="pr-5 pl-1 py-1 text-xs w-72 md:w-36 flex-grow"
              placeholder="Search"
            />
          </div>

          <div className="flex-shrink-0 relative h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
            <div className="w-4 h-4 absolute top-1 right-2 bg-red-500 text-xs font-light rounded-full flex items-center justify-center">
              3
            </div>
            <ShoppingCart className="h-6 w-6" />
          </div>
        </div>

        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={25} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={29} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar/>}
    </div>
  );
};

export default Index;
