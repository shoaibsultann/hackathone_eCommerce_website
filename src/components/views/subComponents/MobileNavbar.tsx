import React from 'react'
import {IoMdClose} from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"

const MobileNavbar = () => {
  return (
    <div><div className="flex lg:hidden">
    <GiHamburgerMenu size={25}/>
  </div>
  <div className="flex lg:hidden">
    <IoMdClose/>
  </div></div>
  )
}

export default MobileNavbar