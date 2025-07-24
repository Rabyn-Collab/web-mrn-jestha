import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import RootLayOut from "./components/RootLayOut";
import CategoryList from "./pages/category_list/CategoryList";
import MealList from "./pages/meal_list/MealList";
import Meal from "./pages/meal/Meal";

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
        {
          path: 'meal-list',
          element: <MealList />
        },
        {
          path: 'meal/:id',
          element: <Meal />
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
