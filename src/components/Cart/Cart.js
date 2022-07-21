import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cartItems);
  const hasItems = useSelector(state => state.hasItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {hasItems && cartItems.map(cartItem => <CartItem
          item={cartItem}
        />)}
        {!hasItems && <p>No items in the cart.</p>}
      </ul>
    </Card>
  );
};

export default Cart;
