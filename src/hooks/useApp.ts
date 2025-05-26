import { useCallback } from "react";
import { setIsLoadingActionCreator } from "../slice/appSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { UseAppStructure } from "./types";

const useApp = (): UseAppStructure => {
  const { isLoading } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  const setIsLoading = useCallback(
    (loading: boolean): void => {
      const isLoading = setIsLoadingActionCreator(loading);

      dispatch(isLoading);
    },
    [dispatch],
  );

  return {
    isLoading,
    setIsLoading,
  };
};

export default useApp;
