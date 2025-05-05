import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

import { FooterNavLinksSet } from "../../../domain-data-types/navigation/footer/links/Links_DomainTypes";

const footerSlice = createSlice({
  name: "footer",

  initialState: {
    navLinksSet: null as FooterNavLinksSet | null,
  },

  reducers: {
    navLinksSet: (state, action): void => {
      state.navLinksSet = action.payload;
    },
  },
});

const selectors = {
  navLinksSet: (store: AppStore): FooterNavLinksSet | null => {
    return store.getState().footer.navLinksSet;
  },
};

const footerSliceActions = footerSlice.actions;
const footerSliceSelectors = selectors;

export type FooterSlice = typeof footerSlice;
export type FooterSliceActions = typeof footerSlice.actions;
export type FooterSliceSelectors = typeof footerSliceSelectors;

export { footerSlice, footerSliceActions, footerSliceSelectors };
