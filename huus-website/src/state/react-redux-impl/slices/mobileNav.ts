import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";

const mobileNavSlice = createSlice({
  name: "mobileNav",

  initialState: {
    isOpen: false as boolean,
    isToggleDisabled: false as boolean,
  },

  reducers: {
    setOpenState: (state, action): void => {
      if (typeof action.payload !== "boolean") {
        throw new Error(
          "'mobileNav' reducer 'setOpenState' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'boolean'",
        );
      }

      state.isOpen = action.payload;
    },

    setToggleDisabledState: (state, action): void => {
      if (typeof action.payload !== "boolean") {
        throw new Error(
          "'mobileNav' reducer 'setToggleDisabledState' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'boolean'",
        );
      }

      state.isToggleDisabled = action.payload;
    },
  },
});

const selectors = {
  isOpen: (store: AppStore): boolean => {
    return store.getState().mobileNav.isOpen;
  },
  isToggleDisabled: (store: AppStore): boolean => {
    return store.getState().mobileNav.isToggleDisabled;
  },
};

const mobileNavSliceActions = mobileNavSlice.actions;
const mobileNavSliceSelectors = selectors;

export type MobileNavSlice = typeof mobileNavSlice;
export type MobileNavSliceActions = typeof mobileNavSliceActions;
export type MobileNavSliceSelectors = typeof mobileNavSliceSelectors;

export { mobileNavSlice, mobileNavSliceActions, mobileNavSliceSelectors };
