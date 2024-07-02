import { NavLink, Outlet } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="w-dvw flex h-[50px] bg-red-400 justify-around items-center">
        <NavLink to="/" className="font-bold text-xl text-black ">
          Misión
        </NavLink>
        <NavLink to="/vision">
          Visión
        </NavLink>
        <NavLink to="/precios">
          Precios
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}