import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  notification: {
    status: "",
    title: "",
    message: "",
  },
};

export const cartDisplay = createSlice({
  name: "displayCart",
  initialState,
  reducers: {
    show: (state) => {
      state.showCart = true;
    },
    hide: (state) => {
      state.showCart = false;
    },
    toggle: (state) => {
      state.showCart = !state.showCart;
    },
    addNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartDisplay.actions;

export default cartDisplay.reducer;
