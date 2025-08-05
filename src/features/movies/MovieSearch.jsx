import { useSearchParams } from "react-router"
import { useSearchMovieQuery } from "./movieApi.js";
import MovieList from "./MovieList.jsx";
import SearchInput from "./SearchInput.jsx";

export default function MovieSearch() {

  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, data, error } = useSearchMovieQuery(searchParams.get('search'));

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data.status_message}</h1>



  return (
    <div>
      <SearchInput setSearchParams={setSearchParams} />

      {data && <MovieList movies={data.results} />}

    </div>
  )
}
