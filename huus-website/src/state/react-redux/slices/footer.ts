import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";
import { FooterNavLinkSet } from "../../../services/footer/nav/set-links/FooterNavSetLinksService_Interface";

const footerSlice = createSlice({
  name: "footer",

  initialState: {
    navLinkSet: null as FooterNavLinkSet | null,
  },

  reducers: {
    setNavLinkSet: (state, action): void => {
      state.navLinkSet = action.payload;
    },
  },
});

const selectors = {
  navLinkSet: (store: AppStore): FooterNavLinkSet | null => {
    return store.getState().footer.navLinkSet;
  },
};

const footerSliceActions = footerSlice.actions;
const footerSliceSelectors = selectors;

export type FooterSlice = typeof footerSlice;
export type FooterSliceActions = typeof footerSlice.actions;
export type FooterSliceSelectors = typeof footerSliceSelectors;

export { footerSlice, footerSliceActions, footerSliceSelectors };
