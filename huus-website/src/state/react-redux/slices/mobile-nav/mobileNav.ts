import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../../store";

import {
  IsOpen,
  IsToggleDisabled,
} from "../../../../domain-data-types/navigation/mobile/open-close/OpenClose_DomainTypes";

const mobileNavSlice = createSlice({
  name: "mobileNav",

  initialState: {
    isOpen: false as IsOpen,
    isToggleDisabled: false as IsToggleDisabled,
  },

  reducers: {
    isOpen: (state, action): void => {
      state.isOpen = action.payload;
    },

    isToggleDisabled: (state, action): void => {
      state.isToggleDisabled = action.payload;
    },
  },
});

const selectors = {
  isOpen: (store: AppStore): IsOpen => {
    return store.getState().mobileNav.isOpen;
  },

  isToggleDisabled: (store: AppStore): IsOpen => {
    return store.getState().mobileNav.isToggleDisabled;
  },
};

const mobileNavSliceActions = mobileNavSlice.actions;
const mobileNavSliceSelectors = selectors;

export type MobileNavSlice = typeof mobileNavSlice;
export type MobileNavSliceActions = typeof mobileNavSliceActions;
export type MobileNavSliceSelectors = typeof mobileNavSliceSelectors;

export { mobileNavSlice, mobileNavSliceActions, mobileNavSliceSelectors };
