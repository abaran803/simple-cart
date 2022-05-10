import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartItems";
import { fetchCartData } from "./store/fetchOnStart";

// Use so that checking that page is loading first time
// On loading first time, data should be loaded from server
let isInitial = true;

function App() {
  const displayCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  // PUT will overwrite the data where POST will update data
  useEffect(() => {
    // // One way of Sending data to server
    // const sendingCartData = async () => {
    //   dispatch(
    //     cartActions.addNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data",
    //     })
    //   );
    //   const response = await fetch(
    //     process.env.REACT_APP_FIREBASE_ADDRESS,
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Sending cart data failed.");
    //   }
    //   dispatch(
    //     cartActions.addNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sent cart data successfully!",
    //     })
    //   );
    // };
    // if(isInitial) {
    //   return isInitial = false;;
    // }
    // sendingCartData().catch((err) => {
    //   dispatch(
    //     cartActions.addNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sending cart data failed!",
    //     })
    //   );
    // });

    // Another approach of sending data to server
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      <Layout>
        {displayCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
