import { useGetNowPlayingMovieQuery } from "../movies/movieApi.js"
import MovieList from "../movies/MovieList.jsx";
import SearchInput from "../movies/SearchInput.jsx";

export default function Home() {
  const { isLoading, data, error } = useGetNowPlayingMovieQuery();

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data.status_message}</h1>


  return (
    <div>
      <SearchInput isHome={true} />

      {data && <MovieList movies={data.results} />}

    </div>
  )
}
