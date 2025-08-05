import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import RootLayOut from "./components/RootLayOut";
import Home from "./features/home/Home.jsx";
import MovieSearch from "./features/movies/MovieSearch.jsx";
import PopularMovies from "./features/movies/PopularMovies.jsx";

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
          path: 'search-movie',
          element: <MovieSearch />
        },
        {
          path: 'popular-movie',
          element: <PopularMovies />
        },

      ]
    },


  ]);

  return <RouterProvider router={router} />
}
