import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useSelector , useDispatch} from 'react-redux';
import { cartAction } from '../../store/card-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const totalprice = useSelector((state) => state.totalprice)
  const { title, price, description ,id } = props;

  const addToCartHandler = () => {
dispatch(cartAction.addItemTocart({
  id,title ,price
}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
