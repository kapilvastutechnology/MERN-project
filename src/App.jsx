import { createBrowserRouter} from "react-router"
import Contact from "./pages/contact/Contact"
import { RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import RootLayout from "./components/RootLayout"
import Menu from "./pages/menu/Menu"
import Footer from "./components/Footer"
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout footer={<Footer/>} />,
      children:[
        {
          index:true,
          element:<Home/>
        },

        {
         path:'about',
         element:<About/>
        },

        {
        path:'contact',
        element:<Contact/>
        },

        {
        path:'menu',
        element:<Menu/>
        }
      ]
    },
   
  ]);
  return <RouterProvider router={router}/>
}
