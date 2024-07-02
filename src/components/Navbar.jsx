import { NavLink, Outlet } from "react-router-dom"
import { IconScanPosition, IconMoneybag, IconEye, IconFlag } from '@tabler/icons-react'

export const Navbar = () => {
  return (
    <>
      <nav className="w-dvw flex h-[50px] bg-red-400 justify-around items-center">
        <NavLink to="/" className="font-bold text-xl text-black">
          <IconFlag className="text-white"/>
        </NavLink>
        <NavLink to="/vision" className="font-bold text-xl text-black">
          <IconEye className="text-white"/>
        </NavLink>
        <NavLink to="/precios" className="font-bold text-xl text-black">
          <IconMoneybag size={24} className="text-white"/>
        </NavLink>
        <NavLink to="/map" className="font-bold text-xl text-black">
          <IconScanPosition size={24} className="text-white"/>
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}