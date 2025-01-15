import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../../store";
import { AppWindowChangeSources } from "./appWindow_Enum";
import {
  ViewPortPositionY,
  ViewPortWidth,
} from "../../../../domain-types/app-window/AppWindow_DomainTypes";

const initialState = {
  viewPortWidth: window.innerWidth as ViewPortWidth,
  viewPortWidth_lastChangeSource:
    AppWindowChangeSources.NONE as AppWindowChangeSources,

  viewPortPositionY: window.screenTop as ViewPortPositionY,
  viewPortPositionY_lastChangeSource:
    AppWindowChangeSources.NONE as AppWindowChangeSources,
};

const appWindowSlice = createSlice({
  name: "appWindow",

  initialState: initialState,

  reducers: {
    setViewPortWidth: (state, action): void => {
      state.viewPortWidth = action.payload;
    },

    setViewPortWidth_lastChangeSource: (state, action): void => {
      state.viewPortWidth_lastChangeSource = action.payload;
    },

    setViewPortPositionY: (state, action): void => {
      state.viewPortPositionY = action.payload;
    },

    setViewPortPositionY_lastChangeSource: (state, action): void => {
      state.viewPortPositionY_lastChangeSource = action.payload;
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
