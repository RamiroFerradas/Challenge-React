import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, favoritesSlice } from "./slices";
import { AppStore } from "../models";

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
