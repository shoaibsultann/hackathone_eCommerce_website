import { NavbarItemType } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import { FC } from 'react'

const DropDown: FC<{item: NavbarItemType}> = ({item}) => {
  return (
    <div>
      {item.dropDownData?.map((item: NavbarItemType, index:number)=>(
        <li className="hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </div>
  )
}

export default DropDown 