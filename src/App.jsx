import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import RootLayOut from "./components/RootLayOut";
import CategoryList from "./pages/category_list/CategoryList";
import MealList from "./pages/meal_list/MealList";
import Meal from "./pages/meal/Meal";
import About from "./pages/about/About.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";

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
          path: 'about',
          element: <About />
        },
        {
          path: 'search',
          element: <SearchPage />
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
