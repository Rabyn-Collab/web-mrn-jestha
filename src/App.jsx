import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";

import RootLayOut from "./components/RootLayOut";
import UsersList from "./features/users/UsersList.jsx";
import UserAddForm from "./features/users/UserAddForm.jsx";
import UserUpdateForm from "./features/users/UserUpdateForm.jsx";

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
        {
          path: 'add-form',
          element: <UserAddForm />
        },
        {
          path: 'update-form/:id',
          element: <UserUpdateForm />
        }

      ]
    },


    // {
    //   path: '*',
    //   element: <NotFound />
    // }
  ]);

  return <RouterProvider router={router} />
}
