import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducer/index";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
