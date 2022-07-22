import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const hasItems = cartQuantity > 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {hasItems &&
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              item={{
                id: cartItem.id,
                title: cartItem.title,
                price: cartItem.price,
                quantity: cartItem.quantity,
                total: cartItem.total,
              }}
            />
          ))}
        {!hasItems && <p>No items in the cart.</p>}
      </ul>
    </Card>
  );
};

export default Cart;
