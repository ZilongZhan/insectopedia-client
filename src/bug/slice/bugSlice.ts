import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BugsInfo } from "../types";

export type BugState = { bugsInfo: BugsInfo };

const initialState: BugState = {
  bugsInfo: {
    bugs: [],
    bugsTotal: 0,
  },
};

const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    renderBugsInfo: (
      currentState,
      action: PayloadAction<BugsInfo>,
    ): BugState => {
      return {
        ...currentState,
        bugsInfo: action.payload,
      };
    },
  },
});

export const bugsReducer = bugSlice.reducer;

export const { renderBugsInfo: renderBugsInfoActionCreator } = bugSlice.actions;
