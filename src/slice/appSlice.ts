import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  showModal: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
  showModal: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (currentState, action: PayloadAction<boolean>): AppState => ({
      ...currentState,
      isLoading: action.payload,
    }),
  },
});

export const appReducer = appSlice.reducer;

export const { setIsLoading: setIsLoadingActionCreator } = appSlice.actions;

export default appSlice;
