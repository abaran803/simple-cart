import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cartDisplay";

const initialState = {
  items: [],
  totalQuantity: 0,
};

export const cartItems = createSlice({
  name: "displayCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find(
        (element) => element.title === newItem.title
      );
      if (!existing) {
        state.items.push({
          title: newItem.title,
          quantity: 1,
          total: Number(newItem.price),
          price: Number(newItem.price),
        });
        state.totalQuantity++;
      } else {
        existing.quantity++;
        existing.total += existing.price;
      }
    },
    increment: (state, action) => {
      const newItemTitle = action.payload;
      const existing = state.items.find(
        (element) => element.title === newItemTitle
      );
      existing.quantity++;
      existing.total += existing.price;
    },
    decrement: (state, action) => {
      const selectedItemTitle = action.payload;
      const existing = state.items.find(
        (element) => element.title === selectedItemTitle
      );
      if (existing.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.title !== selectedItemTitle
        );
        state.totalQuantity--;
      } else {
        existing.quantity--;
        existing.total -= existing.price;
      }
    },
    fetchData: (state, action) => {
      if(action.payload === null) {
        return;
      }
      state.items = [...action.payload.items];
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const sendCartData = (cart) => {
  // Returning function work fine in redux toolkit
  return async (dispatch) => {
    dispatch(
      cartActions.addNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        process.env.REACT_APP_FIREBASE_ADDRESS,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartActions.addNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        cartActions.addNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartItemsActions = cartItems.actions;

export default cartItems.reducer;
