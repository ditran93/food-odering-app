import Modal from "../UI/Modal";
export default function Cart (props) {
  const cartItems = (
    <ul className="cart-item">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
    </Modal>
  );
};
