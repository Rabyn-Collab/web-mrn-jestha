import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useNavigate, useSearchParams } from "react-router"
import { useApiHooks } from "../../hooks/apiHook.js";

export default function MealList() {


  const [search, setSearch] = useSearchParams();
  const [data, load, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', { c: search.get('c') });
  const nav = useNavigate();



  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-pink-600">{err}</h1>
  return (
    <div className="p-5">
      {data && data.meals.map((meal) => {
        return <Card
          onClick={() => nav(`/meal/${meal.idMeal}`)}
          key={meal.idMeal} className="max-w-[700px] mb-5">
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
