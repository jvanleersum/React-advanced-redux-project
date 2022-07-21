import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItem = useSelector(state => state.cartItem);
  const hasItem = useSelector(state => state.hasItem)
  console.log(cartItem)


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {hasItem && <CartItem
          item={cartItem}
        />}
        {!hasItem && <p>No items in the cart.</p>}
      </ul>
    </Card>
  );
};

export default Cart;
