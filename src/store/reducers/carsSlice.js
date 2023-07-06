import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cart: [],
  },

  reducers: {
    addCarToCart: (state, action) => {
      const car = action.payload;

      state.cart = [...state.cart, car];
    },
    removeCarFromCart: (state, action) => {
      const car = action.payload;
      state.cart = state.cart.filter((item) => item.title !== car.title);
    },
  },
});

export const { addCarToCart, removeCarFromCart } = carsSlice.actions;

export default carsSlice.reducer;
