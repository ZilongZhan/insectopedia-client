import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Bug, BugsInfo } from "../types";

export interface BugState {
  bugsInfo: BugsInfo;
}

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
    addBug: (
      { bugsInfo: { bugs, bugsTotal } },
      { payload: newBug }: PayloadAction<Bug>,
    ): BugState => {
      return {
        bugsInfo: {
          bugs: [...bugs, newBug],
          bugsTotal: bugsTotal + 1,
        },
      };
    },
    deleteBug: (
      { bugsInfo: { bugs, bugsTotal } },
      { payload: bug }: PayloadAction<Bug>,
    ): BugState => {
      return {
        bugsInfo: {
          bugs: bugs.filter((thisBug) => thisBug.name !== bug.name),
          bugsTotal: bugsTotal - 1,
        },
      };
    },
  },
});

export const bugsReducer = bugSlice.reducer;

export const {
  renderBugsInfo: renderBugsInfoActionCreator,
  addBug: addBugActionCreator,
  deleteBug: deleteBugActionCreator,
} = bugSlice.actions;
