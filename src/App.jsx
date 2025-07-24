import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
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
