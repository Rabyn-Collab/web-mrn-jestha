import { createBrowserRouter } from "react-router"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import RootLayOut from "./components/RootLayOut";

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
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
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
