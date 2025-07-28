import { Button, Card, CardBody, CardFooter, CardHeader, Carousel, Typography } from "@material-tailwind/react";

import { useNavigate } from "react-router";
import SearchInput from "../search/SearchInput.jsx";
import { useApiHooks } from "../../hooks/apiHook.js";

export default function CategoryList() {

  const [data, load, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');

  const nav = useNavigate();


  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-pink-600">{err}</h1>

  return (
    <div>
      <SearchInput />

      < div className="p-5 grid grid-cols-4 gap-5" >

        {data && data.categories.map((category) => {
          return <Card key={category.idCategory} className="mt-6 ">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                className="w-full"
                src={category.strCategoryThumb}
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {category.strCategory}
              </Typography>
              <p className="line-clamp-4">
                {category.strCategoryDescription}
              </p>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => nav(`/meal-list?c=${category.strCategory}`)}>Read More</Button>
            </CardFooter>
          </Card>
        })
        }

      </div >
    </div>
  )
}


export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}