import { createSlice } from "@reduxjs/toolkit";
import { AppStore } from "../../store";
import { AppWindowChangeSources } from "./appWindow_Enum";

const initialState = {
  width: window.innerWidth as number,
  width_lastChangeSource: AppWindowChangeSources.NONE as AppWindowChangeSources,

  positionY: window.screenTop as number,
  positionY_lastChangeSource:
    AppWindowChangeSources.NONE as AppWindowChangeSources,
};

const appWindowSlice = createSlice({
  name: "appWindow",

  initialState: initialState,

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

    setWidth_lastChangeSource: (state, action): void => {
      if (!(action.payload in AppWindowChangeSources)) {
        throw new Error(
          "'appWindow' reducer 'setWidth_lastChangeSource' given a payload not matching what exists in 'AppWindowChangeSources'. " +
            "Received '" +
            action.payload +
            "' out of '" +
            Object.values(AppWindowChangeSources) +
            "'.",
        );
      }

      state.width_lastChangeSource = action.payload;
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

    setPositionY_lastChangeSource: (state, action): void => {
      if (!(action.payload in AppWindowChangeSources)) {
        throw new Error(
          "'appWindow' reducer 'setPositionY_lastChangeSource' given a payload not matching what exists in 'AppWindowChangeSources'. " +
            "Received '" +
            action.payload +
            "' out of '" +
            Object.values(AppWindowChangeSources) +
            "'.",
        );
      }

      state.positionY_lastChangeSource = action.payload;
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

export type AppWindowSliceState = typeof initialState;
export type AppWindowSlice = typeof appWindowSlice;
export type AppWindowSliceActions = typeof appWindowSliceActions;
export type AppWindowSliceSelectors = typeof appWindowSliceSelectors;

export { appWindowSlice, appWindowSliceActions, appWindowSliceSelectors };
