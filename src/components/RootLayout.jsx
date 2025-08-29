import { Outlet } from "react-router";
import Header from "./Header.jsx";
export default function RootLayOut() {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      
      <Outlet />
=======
        <Header/>
        <Outlet/>
        <footer className='bg-gray-200 p-7 mt-20'>{footer}</footer>
>>>>>>> d489703cfaf5dbb97258d2aa5357d83123cbf742
    </div>
  )
}