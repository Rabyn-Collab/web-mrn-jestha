import { createBrowserRouter } from "react-router"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
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

    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={router} />
}
