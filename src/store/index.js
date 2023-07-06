import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./reducers/carsSlice";

export default configureStore({
  reducer: {
    cars: carsReducer,
  },
});
