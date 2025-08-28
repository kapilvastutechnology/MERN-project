import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut.jsx";

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
     
      ]
    },
    {
      path: '*',
      element: <NotFound />

    }



  ]);
  return <RouterProvider router={router} />
}