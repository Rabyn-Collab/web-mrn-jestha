import { createBrowserRouter } from "react-router"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";
import Page1 from "./pages/home/nested-pages/Page1";
import Page2 from "./pages/home/nested-pages/Page2";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        }
      ]
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
