import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Test Item1",
    price: 6,
    description: "First product of the Store",
  },
  {
    title: "Test Item2",
    price: 12,
    description: "Second product of the Store",
  },
  {
    title: "Test Item3",
    price: 12,
    description: "Second product of the Store",
  },
];

export const shopItems = createSlice({
  name: "displayCart",
  initialState,
  reducers: {},
});

export default shopItems.reducer;
