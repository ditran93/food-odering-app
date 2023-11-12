import Error from "../Layout/Error";
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const config = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", config, []);
  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if(error) {
    return <Error title="Failed to fetch meals" message={error}/>
  }

  return (
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} id={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}
