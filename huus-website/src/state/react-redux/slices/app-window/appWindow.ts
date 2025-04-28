import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../../store";

import {
  ViewPortPositionY,
  ViewPortWidth,
} from "../../../../domain-types/app-window/AppWindow_DomainTypes";

const initialState = {
  viewPortWidth: window.innerWidth as ViewPortWidth,

  viewPortPositionY: window.screenTop as ViewPortPositionY,
};

const appWindowSlice = createSlice({
  name: "appWindow",

  initialState: initialState,

  reducers: {
    setViewPortWidth: (state, action): void => {
      state.viewPortWidth = action.payload;
    },

    setViewPortPositionY: (state, action): void => {
      state.viewPortPositionY = action.payload;
    },
  },
});

const selectors = {
  viewPortWidth: (store: AppStore): number => {
    return store.getState().appWindow.viewPortWidth;
  },

  viewPortPositionY: (store: AppStore): number => {
    return store.getState().appWindow.viewPortPositionY;
  },
};

const appWindowSliceActions = appWindowSlice.actions;
const appWindowSliceSelectors = selectors;

export type AppWindowSliceState = typeof initialState;
export type AppWindowSlice = typeof appWindowSlice;
export type AppWindowSliceActions = typeof appWindowSliceActions;
export type AppWindowSliceSelectors = typeof appWindowSliceSelectors;

export { appWindowSlice, appWindowSliceActions, appWindowSliceSelectors };
