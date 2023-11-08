import Button from "../utils/Button.jsx";
import { currencyFormatter } from "../utils/formatting.js";

export default function MealItem({ image, name, price, description }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="meal image" />
        <div>
          <h3>{name}</h3>
          <div className="meal-item-price">
            {currencyFormatter.format(price)}
          </div>
          <div className="meal-item-description">{description}</div>
        </div>
        <p className="meal-item-actions">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
