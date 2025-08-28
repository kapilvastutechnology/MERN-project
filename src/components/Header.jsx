
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
        <div class="sticky top-0 flex justify-between p-4 bg-white w-dvw shadow-lg items-center flex-wrap ">
      <h1 className='tracking-[6px] '>Gaurnet au Catering</h1>
      <nav className='space-x-5 ' >
        <NavLink className={'hover:bg-gray-300 px-5 py-3 tracking-[5px]'} to={'/about'}>About</NavLink>
        <NavLink className={'hover:bg-gray-300 px-5 py-3 tracking-[5px]'} to={'/menu'}>Menu</NavLink>
        <NavLink className={'hover:bg-gray-300 px-5 py-3 tracking-[5px]'} to={'/contact'}>Contact</NavLink>
      </nav>
    </div>
   
  )
}



