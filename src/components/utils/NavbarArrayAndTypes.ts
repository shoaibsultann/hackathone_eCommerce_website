export interface NavbarItemType{
  label:string,
  href: string,
  isDropDown: boolean,
  dropDownData?: any,
};

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/female",
    isDropDown: true,
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: true,
  },
  {
    label: "Kids",
    href: "/kids",
    isDropDown: false,
  },
  {
    label: "All Products",
    href: "/allproducts",
    isDropDown: false,
  }
];