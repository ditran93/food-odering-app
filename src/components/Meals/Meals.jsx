import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      if (resData.length > 0) {
        setIsLoading(false);
      }
      setMeals(resData);
    }
    fetchMeals();
  }, []);
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
