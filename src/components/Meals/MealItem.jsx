import { useContext } from "react";
import Button from "../utils/Button.jsx";
import { currencyFormatter } from "../utils/formatting.js";
import CartContext from "../storage/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="meal image" />
        <div>
          <h3>{meal.name}</h3>
          <div className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </div>
          <div className="meal-item-description">{meal.description}</div>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
