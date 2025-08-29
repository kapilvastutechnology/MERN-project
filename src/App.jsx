import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import RootLayOut from "./components/RootLayOut.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Home from "./pages/home/Home.jsx";
=======
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import AboutSection from "./pages/about/AboutSection.jsx";
import Projects from "./pages/home/Projects.jsx";
import RootLayout from "./components/RootLayout.jsx";
>>>>>>> d489703cfaf5dbb97258d2aa5357d83123cbf742

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
     
      ]
    },
    {
      path: '*',
      element: <NotFound/>

    }



  ]);
  return <RouterProvider router={router} />
}