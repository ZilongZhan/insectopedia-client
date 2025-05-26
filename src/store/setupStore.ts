import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import { bugsReducer, type BugState } from "../bug/slice/bugSlice";
import { appReducer, type AppState } from "../slice/appSlice";

interface RootPreloadedState {
  bugsReducer: BugState;
  appReducer: AppState;
}

const setupStore = (preloadedState?: RootPreloadedState): EnhancedStore => {
  return configureStore({
    reducer: {
      bugsReducer,
      appReducer,
    },
    preloadedState,
  });
};

export default setupStore;
