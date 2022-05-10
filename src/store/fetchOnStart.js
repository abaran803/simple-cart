import { cartActions } from "./cartDisplay";
import { cartItemsActions } from "./cartItems";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.REACT_APP_FIREBASE_ADDRESS
      );
      if (!response.ok) {
        throw new Error("Receiving cart data failed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      // if (cartData) {
      //   cartData.forEach((element) => {
      //     alert(`${element.title} ${element.price} ${element.quantity}`);
      //   });      
      //   dispatch(cartItemsActions.fetchData(cartData));
      // }
      dispatch(cartItemsActions.fetchData({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
      dispatch(
        cartActions.addNotification({
          status: "success",
          title: "Success!",
          message: "Received cart data successfully!",
        })
      );
    } catch (err) {
      alert(err);
      dispatch(
        cartActions.addNotification({
          status: "error",
          title: "Error!",
          message: "Receiving cart data failed!",
        })
      );
    }
  };
};
