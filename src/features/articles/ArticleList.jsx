import { Button, Typography } from "@material-tailwind/react";
import { useGetArticlesQuery, useLazyGetArticlesQuery } from "./articleApi.js"
import RemoveArticle from "./RemoveArticle.jsx";

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
          <img className="h-[200px]" src={article.image} alt="" />
          <h1 className="font-bold">{article.title}</h1>
          <Typography color="blue-gray">{article.detail}</Typography>
          <RemoveArticle id={article.id} />
        </div>
      })}

    </div>
  )
}
