import { LocalStorageTypes } from "@/app/models/localstorage";
import { Person } from "@/app/models/people";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/app/utilities/localstorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];
export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
