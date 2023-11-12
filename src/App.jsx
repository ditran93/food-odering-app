import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./components/storage/CartContext";
import { useState } from "react";
import { UserProgressContextProvider } from "./components/storage/UserProgessContext";
import Checkout from "./components/Cart/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
