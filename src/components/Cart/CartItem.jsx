import { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import CartContext from "../storage/CartContext";

export default function CartItem({
  name,
  quantity,
  price,
  onIncreaseItem,
  onDecreaseItem,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecreaseItem}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncreaseItem}>+</button>
      </p>
    </li>
  );
}
