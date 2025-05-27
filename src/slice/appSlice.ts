import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalConfig } from "./types";

export interface AppState {
  modalConfig: ModalConfig;
  isLoading: boolean;
}

const initialState: AppState = {
  isLoading: false,
  modalConfig: {
    showModal: false,
    message: "",
    isErrorModal: false,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setModalConfig: (
      currentState,
      action: PayloadAction<ModalConfig>,
    ): AppState => ({
      ...currentState,
      modalConfig: action.payload,
    }),
    setIsLoading: (currentState, action: PayloadAction<boolean>): AppState => ({
      ...currentState,
      isLoading: action.payload,
    }),
  },
});

export const appReducer = appSlice.reducer;

export const {
  setModalConfig: setModalConfigActionCreator,
  setIsLoading: setIsLoadingActionCreator,
} = appSlice.actions;

export default appSlice;
