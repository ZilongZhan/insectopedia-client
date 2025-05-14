import { useCallback, useMemo } from "react";
import type { UseBugsStructure } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BugsClient from "../../client/BugsClient";
import { renderBugsInfoActionCreator } from "../../slice/bugSlice";

const useBugs = (): UseBugsStructure => {
  const bugsInfo = useAppSelector((state) => state.bugsReducer.bugsInfo);
  const dispatch = useAppDispatch();

  const bugsClient = useMemo(() => new BugsClient(), []);

  const renderBugsInfo = useCallback(
    async (pageNumber: number): Promise<void> => {
      const bugsInfo = await bugsClient.getBugsInfo(pageNumber);

      const action = renderBugsInfoActionCreator(bugsInfo);

      dispatch(action);
    },
    [bugsClient, dispatch],
  );

  return {
    bugsInfo,
    renderBugsInfo,
  };
};

export default useBugs;
