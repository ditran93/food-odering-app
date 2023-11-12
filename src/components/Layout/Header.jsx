import { useContext, useState } from "react";
import logo from "../../assets/logo.jpg";
import Button from "../utils/Button";
import CartContext from "../storage/CartContext";
import UserProgressContext from "../storage/UserProgessContext";
export default function Header(props) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce(
    (totalNumberofItems, item) => totalNumberofItems + item.quantity,
    0
  );
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
