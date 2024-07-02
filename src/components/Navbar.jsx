import { NavLink, Outlet } from "react-router-dom"
import { IconScanPosition, IconMoneybag, IconEye, IconFlag } from '@tabler/icons-react'

export const Navbar = () => {
  return (
    <>
      <nav className="w-dvw flex h-[50px] bg-red-400 justify-around items-center">
        <NavLink to="/"  className={({isActive}) => {
          return isActive ? 'text-red-900 border-b-2 border-red-900 w-[25%] justify-center flex items-center h-full' : 'text-white w-[25%] justify-center flex items-center h-full'
        }}>
          <IconFlag size={26} className=""/>
        </NavLink>
        <NavLink to="/vision" className={({isActive}) => {
          return isActive ? 'text-red-900 border-b-2 border-red-900 w-[25%] justify-center flex items-center h-full' : 'text-white w-[25%] justify-center flex items-center h-full'
        }}>
          <IconEye size={26} className=""/>
        </NavLink>
        <NavLink to="/precios" className={({isActive}) => {
          return isActive ? 'text-red-900 border-b-2 border-red-900 w-[25%] justify-center flex items-center h-full' : 'text-white w-[25%] justify-center flex items-center h-full'
        }}>
          <IconMoneybag size={26} className=""/>
        </NavLink>
        <NavLink to="/map" className={({isActive}) => {
          return isActive ? 'text-red-900 border-b-2 border-red-900 w-[25%] justify-center flex items-center h-full' : 'text-white w-[25%] justify-center flex items-center h-full'
        }} >
          <IconScanPosition size={30} className=""/>
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}