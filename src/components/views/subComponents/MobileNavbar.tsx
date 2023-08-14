import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";
const MobileNavbar = () => {
  return (
    <div>
      <div className="w-full p-4 bg-gray-100">
        {NavbarArray.map((item: NavbarItemType, index: number) => {
          return (
            <li
              key={index}
              className="py-2 px-3 hover:bg-gray-600 rounded-md duration-300 hover:text-white list-none flex justify-between"
            >
              <Link href={item.href}>{item.label}</Link>
              {item.isDropDown ? (
                <HiOutlineChevronDown
                  className="mt-1 rotate-180 group-hover:rotate-0 duration-300 "
                  size={15}
                />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
