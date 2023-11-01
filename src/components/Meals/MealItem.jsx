export default function MealItem({image, name, price, description}) {
  
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="meal image" />
        <h3>{name}</h3>
        <div className="meal-item-price">{price}</div>
        <div className="meal-item-description">{description}</div>
        <button className="meal-item-actions">Add to Cart</button>
      </article>
    </li>
  );
}
