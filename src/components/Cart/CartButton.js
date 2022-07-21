import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartItem = useSelector(state => state.cartItem);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItem.quantity}</span>
    </button>
  );
};

export default CartButton;
