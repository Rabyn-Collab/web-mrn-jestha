import { Button, Typography } from "@material-tailwind/react";
import { useGetArticlesQuery, useLazyGetArticlesQuery } from "./articleApi.js"

export default function ArticleList() {
  const { isLoading, error, data } = useGetArticlesQuery();
  // const [getArticles, { isLoading, data, error }] = useLazyGetArticlesQuery();




  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{error.data}</h1>;


  return (
    <div className="p-5">
      {/* <Button onClick={() => getArticles()}>Get Articles</Button> */}


      {data && data.map((article) => {
        return <div key={article.id} className="space-y-3">
          <img src={article.image} alt="" />
          <h1 className="font-bold">{article.title}</h1>
          <Typography color="blue-gray">{article.detail}</Typography>


        </div>
      })}

    </div>
  )
}
