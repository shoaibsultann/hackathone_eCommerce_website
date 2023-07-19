import Image from "next/image";
import logo from "/public/logo.webp";
import {BiSearch} from "react-icons/bi"
import {HiOutlineChevronDown} from "react-icons/hi"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { NavbarArray, NavbarItemType } from "../utils/NavbarArrayAndTypes";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-6 items-center ">
      <div className="w-32">
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

      <div>
        <ul className="flex space-x-12 font-small text-lg">
          {NavbarArray.map((item: NavbarItemType, index: number) => (

            <li className="flex items-center gap-1">
              <Link href={item.href}>{item.label}</Link>
              {item.isDropDown ? < HiOutlineChevronDown/>: ""}
            </li>

          ))}
        </ul>
      </div>

      <div className="border flex items-center text-gray-600 px-1 rounded-lg">
        <BiSearch/>
        <input type="text" className="pr-5 pl-1 py-1 text-xs w-72" placeholder="Search" />
      </div>

      <div className="relative h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
        <div className="w-4 h-4 absolute top-1 right-2 bg-red-500 text-xs font-light rounded-full flex items-center justify-center">
          3
        </div>
        <ShoppingCart className="h-6 w-6" />  
      </div>
      <div>
        success abc
      </div>
    </div>
  );
};

export default Header;
