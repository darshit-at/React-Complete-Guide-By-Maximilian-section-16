import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';

import { cartAction } from '../../store/card-slice';
// import { CardAction } from "./ui-slice";
const CartItem = (props) => {
  
  const {id, title, quantity, total, price } = props.item;
  console.log(id, title , price ,total);
 const dispatch = useDispatch();

 const removeItemHandler = () => {
  dispatch(cartAction.removeItemFromCart(id))
 }

 const addItemHandler = () => {
  dispatch(cartAction.addItemTocart({
   id,title, price
  }))
 }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
 ${total}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
