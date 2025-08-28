import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/Home.jsx";
import RootLayOut from "./components/RootLayOut.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import AboutSection from "./pages/about/AboutSection.jsx";
import Projects from "./pages/home/Projects.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: 'about',
          element: <AboutSection/>
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path:'page',
          element:<Projects/>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />

    }



  ]);
  return <RouterProvider router={router} />
}