import { useDispatch } from 'react-redux';
import { Fragment } from "react";
import classes from "./CartItem.module.css";
import { cartItemsActions } from '../../store/cartItems';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const increment = (title) => {
    dispatch(cartItemsActions.increment(title))
  }
  const decrement = (title) => {
    dispatch(cartItemsActions.decrement(title))
  }
  const item = props.items.map((val) => (
    <li className={classes.item}>
      <header>
        <h3>{val.title}</h3>
        <div className={classes.price}>
          ${val.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${val.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{val.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => {decrement(val.title)}}>-</button>
          <button onClick={() => {increment(val.title)}}>+</button>
        </div>
      </div>
    </li>
  ));

  return (
    <Fragment>
      {props.items && item}
    </Fragment>
  );
};

export default CartItem;
