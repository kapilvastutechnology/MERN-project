import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="shadow-lg px-5 py-3 flex justify-between items-baseline sticky w-full top-0 bg-white">

      <h1>BR <span className="font-normal">Architects</span> </h1>
      <nav className="space-x-6">
<<<<<<< HEAD
        <NavLink>Projects</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
=======
        <NavLink >Projects</NavLink>
        <NavLink >About</NavLink>
        <NavLink >Contact</NavLink>
>>>>>>> d489703cfaf5dbb97258d2aa5357d83123cbf742
      </nav>
    </div>
  )
}