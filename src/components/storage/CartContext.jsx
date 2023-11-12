import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItem: () => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedCartItems = [...state.items];
    const existingItem = state.items[existingCartItemIndex];
    if (existingCartItemIndex > -1) {
      const updatedCartItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedCartItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedCartItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedCartItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }
    return { ...state, items: updatedCartItems };
  }

  if (action.type === "CLEAR_ITEM") {
    return { ...state, items: [] };
  }

  return state;
}
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearItem() {
    dispatchCartAction({ type: "CLEAR_ITEM" });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
