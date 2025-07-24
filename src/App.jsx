import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import RootLayOut from "./components/RootLayOut";
import CategoryList from "./pages/category_list/CategoryList";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <CategoryList />

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
