import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartDisplay';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cnt = useSelector((state) => state.cartItems)
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cnt ? cnt.totalQuantity : 0}</span>
    </button>
  );
};

export default CartButton;
