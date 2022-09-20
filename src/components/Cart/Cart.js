import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {

  const items = useSelector((state) => state.cart.items);
  console.log(items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((items , index) => {
          return (
            <CartItem
            key ={`${index}`}
              item={
                {id : items.id, 
                title: items.name,
                quantity: items.quantity,
                    total: items.totaPrice, 
                    price:items.price }}
            />

          )
        })}

      </ul>
    </Card>
  );
};

export default Cart;
