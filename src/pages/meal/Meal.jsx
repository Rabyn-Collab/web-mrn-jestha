
import { useParams } from "react-router"
import { useApiHooks } from "../../hooks/apiHook.js";

export default function Meal() {
  const { id } = useParams();

  const [data, load, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php', { i: id });




  if (load) return <h1>Loading....</h1>
  if (err) return <h1 className="text-pink-600">{err}</h1>
  return (
    <div className="p-5">
      {/* <p>Lorem <span className="text-red-600">sdlkfsdlknfsdklfn</span> dolor sit amet consectetur adipisicing elit. Nemo quisquam, <span className="text-green-700">perferendis temporibus beatae deleniti, </span> optio provident ea enim veniam esse facere harum nobis sit quae laborum consectetur voluptates repellendus ipsa!</p> */}
      {data && data.meals.map((meal) => {
        const vidId = meal.strYoutube.split('=')[1];

        return <div key={meal.idMeal}>
          <div className="flex gap-5">
            <iframe width="420" height="315"
              src={`https://www.youtube.com/embed/${vidId}`}>
            </iframe>
            <img className="h-[315px] w-[420px] object-cover" src={meal.strMealThumb} alt="" />
          </div>

        </div>
      })}


    </div>
  )
}
