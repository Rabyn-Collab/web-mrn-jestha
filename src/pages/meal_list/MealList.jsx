import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router"

export default function MealList() {
  const [search, setSearch] = useSearchParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const nav = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: { c: search.get('c') }
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {

      setErr(err.message);
      setLoad(false);

    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-pink-600">{err}</h1>
  return (
    <div className="p-5">
      {data && data.meals.map((meal) => {
        return <Card key={meal.idMeal} className="max-w-[700px] mb-5">
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={meal.strMealThumb} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  {meal.strMeal}
                </Typography>

              </div>
            </ListItem>
          </List>
        </Card>
      })}

    </div>
  )
}
