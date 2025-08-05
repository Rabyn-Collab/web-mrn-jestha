import { useSearchParams } from "react-router";
import { useGetPopularMovieQuery } from "./movieApi.js"
import MovieList from "./MovieList.jsx";
import { Button } from "@material-tailwind/react";

export default function PopularMovies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const { data, error, isLoading } = useGetPopularMovieQuery(page);

  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data.status_message}</h1>

  return (
    <div>

      {data && <MovieList movies={data.results} />}

      <div className="flex justify-center gap-5 items-center mb-7">
        <Button onClick={() => setSearchParams({ page: Number(page) - 1 })} disabled={page === 1}>Prev</Button>
        <h1 className="font-bold text-xl">{page}</h1>
        <Button onClick={() => setSearchParams({ page: Number(page) + 1 })}>Next</Button>
      </div>

    </div>
  )
}
