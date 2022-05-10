import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const item = useSelector((state) => state.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {item && <CartItem
          items={item.items}
        />}
      </ul>
    </Card>
  );
};

export default Cart;
