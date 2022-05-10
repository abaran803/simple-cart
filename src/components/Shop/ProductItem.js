import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../store/cartItems";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(cartItemsActions.addItem(item))
  }
  const items = props.items.map((item) => (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={() => {addItem(item)}}>Add to Cart</button>
        </div>
      </Card>
    </li>
  ));

  return (
    <ul>
      { items }
    </ul>
  );
};

export default ProductItem;
