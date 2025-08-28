import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="shadow-lg px-5 py-3 flex justify-between items-baseline sticky  w-full top-0 bg-white">

      <h1>BR <span className="font-normal">Architects</span> </h1>

      <nav className="space-x-6">
        <NavLink to={'./Projects'} >Projects</NavLink>
        <NavLink to={'./About'}>About</NavLink>
        <NavLink to={'./Contact'}>Contact</NavLink>
      </nav>



    </div>
  )
}