import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const newItem = {id, title, price, total: price, quantity:1}
    dispatch(cartActions.addItem(newItem))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
