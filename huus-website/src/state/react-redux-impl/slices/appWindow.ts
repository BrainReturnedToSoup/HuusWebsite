import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../store";

const appWindowSlice = createSlice({
  name: "appWindow",

  initialState: {
    width: window.innerWidth as number,
    positionY: window.screenTop as number,
  },

  reducers: {
    setWidth: (state, action): void => {
      if (typeof action.payload !== "number") {
        throw new Error(
          "'appWindow' reducer 'setWidth' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'number'",
        );
      }

      state.width = action.payload;
    },

    setPositionY: (state, action): void => {
      if (typeof action.payload !== "number") {
        throw new Error(
          "'appWindow' reducer 'setPositionY' given a payload with a type '" +
            typeof action.payload +
            "'. Shoud be of type 'number'",
        );
      }

      state.positionY = action.payload;
    },
  },
});

const selectors = {
  width: (store: AppStore): number => {
    return store.getState().appWindow.width;
  },

  positionY: (store: AppStore): number => {
    return store.getState().appWindow.positionY;
  },
};

const appWindowSliceActions = appWindowSlice.actions;
const appWindowSliceSelectors = selectors;

export type AppWindowSlice = typeof appWindowSlice;
export type AppWindowSliceActions = typeof appWindowSliceActions;
export type AppWindowSliceSelectors = typeof appWindowSliceSelectors;

export { appWindowSlice, appWindowSliceActions, appWindowSliceSelectors };
