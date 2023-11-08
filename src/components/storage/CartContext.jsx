import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
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
    return {...state, items: updatedCartItems};
  }
  
  if(action.type === "REMOVE_ITEM") {

  }

  return state;
}
export function CartContextProvider({ children }) {
  useReducer(CartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
