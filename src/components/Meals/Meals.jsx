import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import Error from "../Layout/Error";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Fail to fetch meals");
        }
        if (resData.length > 0) {
          setIsLoading(false);
        }
        setMeals(resData);
      } catch (error) {
        setError({
          message: error.message || "Could not fetch meals, please try again",
        });
      }
    }
    fetchMeals();
  }, []);
  if (error) {
    return <Error title="An error occured!" message={error.message}/>
  }
  return (
    <>
      {isLoading && <p>Fetching Meals Data...</p>}
      {!isLoading && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              image={meal.image}
              name={meal.name}
              price={meal.price}
              description={meal.description}
            />
          ))}
        </ul>
      )}
    </>
  );
}
