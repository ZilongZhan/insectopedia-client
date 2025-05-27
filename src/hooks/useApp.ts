import { useCallback } from "react";
import {
  setIsLoadingActionCreator,
  setModalConfigActionCreator,
} from "../slice/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { UseAppStructure } from "./types";
import type { ModalConfig } from "../slice/types";

const useApp = (): UseAppStructure => {
  const { isLoading, modalConfig } = useAppSelector(
    (state) => state.appReducer,
  );
  const dispatch = useAppDispatch();

  const setIsLoading = useCallback(
    (loading: boolean): void => {
      const isLoading = setIsLoadingActionCreator(loading);

      dispatch(isLoading);
    },
    [dispatch],
  );

  const setModalConfig = useCallback(
    (modalConfig: ModalConfig): void => {
      const config = setModalConfigActionCreator(modalConfig);

      dispatch(config);
    },
    [dispatch],
  );

  return {
    modalConfig,
    isLoading,
    setModalConfig,
    setIsLoading,
  };
};

export default useApp;
