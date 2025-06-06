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
    toggleIsFavorite: (
      { bugsInfo: { bugs, bugsTotal } },
      {
        payload: { id, isFavorite },
      }: PayloadAction<{ id: string; isFavorite: boolean }>,
    ): BugState => {
      return {
        bugsInfo: {
          bugs: bugs.map((bug) =>
            bug.id === id ? { ...bug, isFavorite } : bug,
          ),
          bugsTotal,
        },
      };
    },
    editBug: (
      { bugsInfo: { bugs, bugsTotal } },
      { payload: editedBug }: PayloadAction<Bug>,
    ): BugState => {
      return {
        bugsInfo: {
          bugs: bugs.map((bug) => (bug.id === editedBug.id ? editedBug : bug)),
          bugsTotal,
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
  toggleIsFavorite: toggleIsFavoriteActionCreator,
  editBug: editBugActionCreator,
} = bugSlice.actions;
