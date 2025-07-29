import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";

import RootLayOut from "./components/RootLayOut";
import UsersList from "./features/users/UsersList.jsx";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <UsersList />

        },

      ]
    },


    // {
    //   path: '*',
    //   element: <NotFound />
    // }
  ]);

  return <RouterProvider router={router} />
}
