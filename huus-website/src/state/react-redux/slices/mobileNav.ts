import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

import { MobileNavLinksSet } from "../../../domain-types/navigation/mobile/links/Links_DomainTypes";

const mobileNavSlice = createSlice({
  name: "mobileNav",

  initialState: {
    isOpen: false as boolean,
    isToggleDisabled: false as boolean,

    linksSet: null as MobileNavLinksSet | null,
  },

  reducers: {
    isOpen: (state, action): void => {
      state.isOpen = action.payload;
    },

    isToggleDisabled: (state, action): void => {
      state.isToggleDisabled = action.payload;
    },

    linksSet: (state, action): void => {
      state.linksSet = action.payload;
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

  linksSet: (store: AppStore): MobileNavLinksSet | null => {
    return store.getState().mobileNav.linksSet;
  },
};

const mobileNavSliceActions = mobileNavSlice.actions;
const mobileNavSliceSelectors = selectors;

export type MobileNavSlice = typeof mobileNavSlice;
export type MobileNavSliceActions = typeof mobileNavSliceActions;
export type MobileNavSliceSelectors = typeof mobileNavSliceSelectors;

export { mobileNavSlice, mobileNavSliceActions, mobileNavSliceSelectors };
